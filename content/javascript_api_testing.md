---
title: JavaScript API Testing
---

## Topics

 - Setting up [Jest](https://jestjs.io/) and [supertest](https://github.com/visionmedia/supertest)

 - Customizing [supertest](https://github.com/visionmedia/supertest)

 - Intellisense on [supertest](https://github.com/visionmedia/supertest) customizations

<br/>

Source code can be found [here](https://github.com/softwarebywright/javascript-api-testing).

<br/>
<br/>

So you want to do some JavaScript API testing, you've come to the right place! In order for us to test an API we first need to create one. We'll start by creating a project and installing the dependencies we need. We are going to use express to create our API, and Jest coupled with supertest to create our testing framework.

``` bash
// create your project directory
mdkir javascript-api-testing
cd javascript-api-testing

// create a default package.json and install dependencies
npm init -y
npm install express
npm install -D supertest jest
```

``` json
// ./package.json
{
  ...,
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  ...
}
```

Awesome now that we have all of our dependencies for creating our API and API Tests we can start by creating a simple API that we can write our tests against. As you can see below there is a todo endpoint that exposes GET and POST methods, and a health endpoint that exposes a GET method. 

``` javascript
// index.js

const express = require("express");
const todoRouter = express.Router();
const healthRouter = express.Router();
const app = express();

let todoId = 0;
const todos = []

todoRouter.get("/", (req, res) => {
  res.send(todos);
});

todoRouter.post("/", (req, res) => {
  if(!req.body.title) {
    return res.status(400).send("Todo must have a title");
  }

  todos.push({ id: todoId++, title: req.body.title });

  return res.sendStatus(200);
});

app.use("/todo", todoRouter);

healthRouter.get("/", (req, res) => {
  res.send({
    status: "ok"
  });
});

app.use("/health", healthRouter);

app.listen(process.env.PORT || 3000, ()=>console.log("API Started"));
```

Great! We've got something to write test against, and that is the most important part. Though before we begin to write our tests we need to start our API, and we do this by running the command below in a terminal.

npm start

Now that the API is running we can create some tests for it. Let's start by creating our first test file and filling it in with our tests for the GET /todo endpoint. 

``` javascript
// ./todo.spec.js

const supertest = require("supertest");
const endpoint = "http://localhost:3000";

describe("/todo", () => {
  describe("GET /", () => {
    it("should return a 200 when requesting todos", async () => {
      await supertest(endpoint)
        .get("/todo")
        .expect(200);
    });
  });
});
```

After creating this test run it with the following command:
``` bash
npm test
```
As you can see it's pretty simple to create an API test using these libraries, but let's take things a bit further. One thing that I noticed when using supertest is when there is a test failure the information returned to the user is not the most informative. 

To see an example of this change the expect(200) in the test above to expect(201) and run you tests again.

``` bash
expected 201 "Created", got 200 "OK"
      at Test.Object.<anonymous>.Test._assertStatus (node_modules/supertest/lib/test.js:268:12)
      at Test.Object.<anonymous>.Test._assertFunction (node_modules/supertest/lib/test.js:283:11)
      at Test.Object.<anonymous>.Test.assert (node_modules/supertest/lib/test.js:173:18)
      at localAssert (node_modules/supertest/lib/test.js:131:12)
      at node_modules/supertest/lib/test.js:128:5
```

While knowing the status code was incorrect is good, wouldn't be amazing if we can get the full detail of the request and response? Let's take a shot at enhancing the supertest library by extending the supertest.Test prototype and adding additional assertions.

For now we will add this logic above our original test, but don't you worry it wont be there for long.

``` javascript
// ./todo.spec.js

const supertest = require("supertest");
const endpoint = "http://localhost:3000";

const http = require("http");
const Test = supertest.Test;

Test.prototype.expectStatus = function (expectedStatus) {
  return this.expect((response) => {
    const {status} = response;

     if(expectedStatus !== status) {
      const message = `
      Request: ${this.method} ${this.url}
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(this._data)}
      Response:
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(response.body)}
        Status: ${response.status}

      Expected ${expectedStatus} "${http.STATUS_CODES[expectedStatus]}", got ${status} "${http.STATUS_CODES[status]}`

      throw new Error(message);
    }
  })
}


describe("/todo", () => {
  ...
     .expectStatus(201);
```

Now if you run your test again, you'll notice that we have a very informative message of both the request sent, and the response given back.

``` bash
Request: GET http://localhost:3000/todo
  Headers: {"User-Agent":"node-superagent/3.8.3"}
  Body: undefined
Response:
  Headers: {"User-Agent":"node-superagent/3.8.3"}
  Body: []
  Status: 200

Expected 201 "Created", got 200 "OK
```

Now you may be thinking how I'm I supposed to use these prototype changes across all of my API Tests? Well we will rely on jest to preconfigure supertest for us through our jest.config.js.

``` javascript
// ./test/supertest-extended.js

const http = require("http");
const Test = supertest.Test;

Test.prototype.expectStatus = function (expectedStatus) {
  return this.expect((response) => {
    const {status} = response;

    if(expectedStatus !== status) {
      const message = `
      Request: ${this.method} ${this.url}
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(this._data)}
      Response:
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(response.body)}
        Status: ${response.status}

      Expected ${expectedStatus} "${http.STATUS_CODES[expectedStatus]}", got ${status} "${http.STATUS_CODES[status]}`

      throw new Error(message);
    }
  })
}
```

``` javascript
// ./jest.config.js

module.exports = {
  setupFiles: [
    "./test/supertest-extended.js"
  ]
}
```

Now we can make as many tests as we like across as many files as we would like.

``` javascript
// ./health.spec.js

const supertest = require("supertest");
const endpoint = "http://localhost:3000";

describe("/health", () => {
  describe("GET /", () => {
    it("should return a 200 when requesting health", async () => {
      await supertest(endpoint)
        .get("/health")
        .expectStatus(201);
    });
  });
});
```

Great that covers API test creation and customization, we've covered a lot of ground with only a few files. Though one thing that you may notice if you are in an editor like Visual Studio Code is that intellisense will not recognize the new method that you have added to the  Test class, let's fix that with a typings declaration.

``` typescript
// ./test/supertest-extended.d.ts

import * as supertest from 'supertest';

declare module 'supertest' {
    interface Test {
        expectStatus(code:number): Test;
   }
}
```

Simple enough right? We extend the existing typings for supertest within our own project and now we have typings on our custom supertest assertions.

Whew! That was a wild ride right? If you have managed to follow along through this entire blog post you've done something pretty incredible. You've created an extensible API Testing Framework, that has full intellisense. Congratulations on making it through and test on fellow developers!

