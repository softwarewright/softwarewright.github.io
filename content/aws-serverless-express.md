---
head:
  title: How To Turn An ExpressJS API Into A Serverless API
  meta:
    - content: Learn how to change an ExpressJS API into a serverless API with just a few changes.
      name: description
    - name: author
      content: Darrius Wright
    - name: keywords
      content: AWS, Lambda, express, aws-serverless-express,sam,aws-sam-cli,sam-local,serverless,api, CloudFormation
image: /posts/lambda.png
date: Sun, 05 May 2019 02:48:40 GMT
---

**Required Software**

- [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- [aws-sam-cli](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [Docker](https://www.docker.com/get-started)
- [NodeJS](https://nodejs.org/en/)

Unless you have been under a rock for the last 5 years you have likely heard of Serverless development. Serverless architecture presents amazing opportunities for developers to care less about what is running their code and focus more on writing code that will deliver value. AWS has been one of the largest players within the Serverless space and offer many solutions that simplify how you host your code. One of AWS's most prominent offerings is AWS Lambda, in short it gives you a simple way to deploy code without having to consider the servers that code runs on it. Thus Lambda creates a more simplified development experience, but the questions I would like to answer today is how to do we integrate existing code into serverless code. If you're clever you've realized from the title that we will be doing this with an [ExpressJS](https://expressjs.com/) application, [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) to integrate express with a serverless lambda function, and finally [aws-sam-cli](https://github.com/awslabs/aws-sam-cli) to develop this as a serverless application.

## Setup

So without further ado, let's get started. The first thing that we need to do is get our Express application started. If you already have an Express application made feel free to skip to the next step.

```bash
npm init -y
npm install --save express
```

```json
// ./package.json
{
...,
"scripts": {
"start": "node index.js"
},
...
}
```

```javascript
// ./app.js

const express = require("express");
const app = express();
const healthRouter = express.Router();
const pingRouter = express.Router();

healthRouter.get("/", (_, res) => res.send({ status: "ok" }));
pingRouter.get("/", (_, res) => res.send("pong"));

app.use("/health", healthRouter);
app.use("/ping", pingRouter);

module.exports = app;
```

```javascript
// index.js

const app = require("./app");

app.listen(process.env.PORT || 3000, () => console.log("API Started"));
```

Great, now we have our code setup for our simple Express API we can run it using the following command from your terminal:

```bash
npm start
```

Now if you go to http://localhost:3000/health or http://localhost:3000/ping you'll get a response back. With this now in place we can start talking about how this would look as a Serverless Application. Once you are done with the server be sure to stop it.

## Serverless Start

Great, now that the Express API has been created we can being the process of transforming it application into a Serverless API. Let's being with the tooling that we will use to test locally and deploy our application, the aws-sam-cli. With this tool you can execute your lambdas, run them as a local api, and much more. If you would like to read more about the aws-sam-cli check out the documentation [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-command-reference.html), for now you will just need to make sure that it is installed using the documentation found [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html). Once that is installed you should be able to run the following command in your terminal:

```bash
sam --version
```

_This article was written using version 0.15.0_

Now that you have the aws-sam-cli installed we can move on to the **aws-serverless-express** library, this is what enables us to make our Express API a serverless one with minimal changes. The first step to using this package is installation using the command below:

```bash
npm install --save aws-serverless-express
```

Next we need to update the code within our **index.js** file to take advantage of the **aws-serverless-express** library that we just installed.

```javascript
// index.js
const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app");
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) =>
  awsServerlessExpress.proxy(server, event, context);
```

That's it! Simple enough right? With this our code is ready for the wonderful world of serverless. The last thing that we need to do is create our CloudFormation file and we can give this code a run.

The CloudFormation file is fairly simple, we create a Serverless Function with an event that will execute the function for any API call on any method. We do this by setting the path property to "/{+proxy}" and the method property to ANY respectively.

```yml
# template.yaml
AWSTemplateFormatVersion: "2010-09-09"
Transform: AWS::Serverless-2016-10-31

Resources:
  HelloWorldFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: .
      Handler: index.handler
      Runtime: nodejs8.10
      Timeout: 10
      Events:
        ApiEvent:
          Type: Api
          Properties:
            Path: "/{proxy+}"
            Method: ANY
```

Fantastic this is the moment that we have been waiting for, open up that terminal and run the following command:

```bash
sam local start-api
```

If all goes well you should see the following in your terminal:

```bash
2019-04-22 21:16:49 Mounting HelloWorldFunction at http://127.0.0.1:3000/{proxy+} [GET, DELETE, PUT, POST, HEAD, OPTIONS, PATCH]
2019-04-22 21:16:49 You can now browse to the above endpoints to invoke your functions. You do not need to restart/reload SAM CLI while working on your functions, changes will be reflected instantly/automatically. You only need to restart SAM CLI if you update your AWS SAM template
```

Now if you go the endpoints mentioned before, you'll see that you get the same responses as before.

## Serverless Deploy

We have come a long way we've created our API, converted it to work as a serverless API, and tested it locally. Though we are missing the most important thing of all, shipped code! Let's deploy this thing! To start off you will need to create an S3 bucket within your account, this will be where your packaged lambda code will live. You can do this through the S3 console within the AWS, for more detailed instructions go here. Once you have created your S3 bucket run the following command to package your code:

```bash
sam package --template-file template.yaml --s3-bucket {{your_bucket_name}} --output-template-file packaged.yaml
```

Once your application is finished being packaged we can deploy the code to AWS using the following command:

```bash
sam deploy --template-file packaged.yaml --stack-name hello-api --capabilities CAPABILITY_IAM
```

Once that has finished deploying feel free to navigate to your API withing the API Gateway Console, after you are on the API Gateway page navigate to APIs -> hello-api -> Dashboard. At the top of the dashboard you will see the URL of the API that you have just created if you copy it and add /health or /ping and you'll get the same responses as before.

Congratulations for making it through, now you've got a fully deployed serverless application. I wish you luck on your development adventures.

**Resources**

- [aws-sam-cli]()
