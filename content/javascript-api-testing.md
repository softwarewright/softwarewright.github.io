---
head:
  title: JavaScript API Testing
  meta:
    - content: Develop a JavaScript API Testing framework using Jest and Supertest
      name: description
    - name: author
      content: Darrius Wright
    - name: keywords
      content: JavaScript, supertest, TypeScript, jest, API Testing, api, express, test, testing
image: /posts/javascript.png
date: Thu, 02 May 2019 05:21:28 GMT
---

**Required Software**

- [NodeJS](https://nodejs.org/en/)

## Why use JavaScript for API Testing?

Great question! When considering overwhelming community support that JavaScript has, along with libraries that are specifically created for the purpose of API testing JavaScript is definitely worth considering for API testing. [Supertest](https://github.com/visionmedia/supertest), one of the most prominent libraries for API testing in JavaScript, provides a simple interface making requests as well as asserting their results. In addition, it's fairly simple to create your own custom assertions for the supertest which we will dive into in the post below.

## Setting up the API

We'll start by creating a project and installing the dependencies we need. We are going to use express to create our API, and Jest coupled with supertest to create our API Testing framework.

```bash
// create your project directory
mdkir javascript-api-testing
cd javascript-api-testing

// create a default package.json and install dependencies
npm init -y
npm install express
npm install -D supertest jest
```

```json
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

Awesome now that we have all of our dependencies for creating our API and API Tests we can start by creating a basic API to test against. As you can see below there is a todo endpoint that exposes GET and POST methods, and a health endpoint that exposes a GET method.

```javascript
// index.js

const express = require("express");
const todoRouter = express.Router();
const healthRouter = express.Router();
const app = express();

let todoId = 0;
const todos = [];

todoRouter.get("/", (req, res) => {
  res.send(todos);
});

todoRouter.post("/", (req, res) => {
  if (!req.body.title) {
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

app.listen(process.env.PORT || 3000, () => console.log("API Started"));
```

Great, we've got something to write API tests against. Before we begin to write our tests we need to start our API, and we do this by running the command below in a terminal.

```bash
npm start
```

Now that the API is running we can construct our tests for it. Let's start by creating our first test file and filling it in with our tests for the GET /todo endpoint.

## Setting up the API tests

```javascript
// ./todo.spec.js

// here we require the supertest module
const supertest = require("supertest");
// create a variable for the endpoint that we would like to execute against
const endpoint = "http://localhost:3000";

// create our describe blocks for our tests
describe("/todo", () => {
  describe("GET /", () => {
    it("should return a 200 when requesting todos", async () => {
      // ensure the function is async since we are making an API request

      await supertest(endpoint) // set the base url for supertest
        .get("/todo") // GET request against the /todo endpoint
        .expect(200); // expect a 200 back
    });
  });
});
```

After creating this test run it with the following command:

```bash
npm test
```

As you can see it's pretty simple to create an API test using these libraries, but let's take things a bit further. In my experience with supertest I've noticed on test failures the error message returned to the user is not the most informative.

To see an example of this change the expect(200) in the test above to expect(201) and run you tests again.

```bash
expected 201 "Created", got 200 "OK"
      at Test.Object.<anonymous>.Test._assertStatus (node_modules/supertest/lib/test.js:268:12)
      at Test.Object.<anonymous>.Test._assertFunction (node_modules/supertest/lib/test.js:283:11)
      at Test.Object.<anonymous>.Test.assert (node_modules/supertest/lib/test.js:173:18)
      at localAssert (node_modules/supertest/lib/test.js:131:12)
      at node_modules/supertest/lib/test.js:128:5
```

While knowing the status code was incorrect is good, it would be amazing if we could get the full detail of the request and response. Let's take a look at enhancing the supertest library by extending supertest and adding additional assertions.

## Customizing Supertest

For now we will add this logic above our original test, but don't you worry it wont be there for long.

```javascript
// ./todo.spec.js

const supertest = require("supertest");
const http = require("http");
const endpoint = "http://localhost:3000";

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

```bash
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

```javascript
// ./test/supertest-extended.js

const http = require("http");
const Test = supertest.Test;

Test.prototype.expectStatus = function(expectedStatus) {
  return this.expect(response => {
    const { status } = response;

    if (expectedStatus !== status) {
      const message = `
      Request: ${this.method} ${this.url}
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(this._data)}
      Response:
        Headers: ${JSON.stringify(this.header)}
        Body: ${JSON.stringify(response.body)}
        Status: ${response.status}

      Expected ${expectedStatus} "${
        http.STATUS_CODES[expectedStatus]
      }", got ${status} "${http.STATUS_CODES[status]}`;

      throw new Error(message);
    }
  });
};
```

```javascript
// ./jest.config.js

module.exports = {
  setupFiles: ["./test/supertest-extended.js"]
};
```

Now we can make as many tests as we like across as many files as we would like.

```javascript
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

## Intellisense on Custom Assertions

Great that covers API test creation and customization, we've covered a lot of ground with only a few files. Though one thing that you may notice if you are in an editor like Visual Studio Code is that intellisense will not recognize the new method that you have added to the Test class, let's fix that with a typings declaration.

```typescript
// ./test/supertest-extended.d.ts

import * as supertest from "supertest";

declare module "supertest" {
  interface Test {
    expectStatus(code: number): Test;
  }
}
```

Simple enough right? We extend the existing typings for supertest within our own project and now we have typings on our custom supertest assertions.

Whew! If you have managed to follow along through this entire blog post you've done something pretty incredible. You've created an extensible API Testing Framework that has full intellisense. Congratulations on making it through and test on fellow developers!

Source code can be found [here](https://github.com/softwarebywright/javascript-api-testing).

**Resources**

- [Jest Documentation](https://jestjs.io/docs/en/getting-started.html)
- [Supertest Documenation](https://github.com/visionmedia/supertest)
