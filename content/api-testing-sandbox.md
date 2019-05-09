---
head:
  title: API Testing Sandbox
  meta:
    - content: Learn how to test APIs using httpbin, Docker, supertest, and Jest
      name: description
    - name: author
      content: Darrius Wright
    - name: keywords
      content: JavaScript, API, API Testing, Jest, supertest, docker, httpbin
image: /posts/testing.png
date: Sun, 05 May 2019 03:28:47 GMT
---

**Required Software**

- [Docker](https://www.docker.com/get-started)
- [NodeJS](https://nodejs.org/en/)

## What is API Testing?

Before developing a sandbox for API Testing we need to understand what API Testing is and why its important. In short API Testing allow you test that the endpoints of your API return valid results upon assertion. There are many examples of valid results for API tests, including but not limited to, status codes, the response body, and headers. In this post we will be writing API Tests in JavaScript against a fake server that we will stand up using Docker.

## Why JavaScript for API Testing?

JavaScript has undoubtedly one of largest development communities around. As a result creating API Testing framework in the language ends up being a fairly simple task. If you're curious of what settings up an API Testing framework looks like in JavaScript check out my previous post [here](/blog/posts/javascript-api-testing). Given the previously mentioned, JavaScript and the libraries that surround it can make a great API testing framework.

## Why create an API Testing Sandbox?

Sandboxes are a great way to practice in a given subject. Whether you are a beginner or a seasoned vet to API Testing having a place to practice writing tests is significant. As a result I will be showing you a simple setup that will enable you to practice writing API tests.

## Sandbox Setup

### Enter httpbin

[Httpbin](https://httpbin.org) is a simple HTTP service created by [Kenneth Reitz](https://www.kennethreitz.org/) that will allow you to send requests and get back responses that you specify, thus allowing you to write assertions against those requests. The httpbin service allow you to make requests that return different status codes, allows testing against all http verbs, even authentication endpoint checks.

To get started with this service we will need to run it using docker. First ensure that you have [docker installed](https://www.docker.com/get-started), afterward use the following command to start the service.

```bash
docker run -p 8001:80 --name httpbin kennethreitz/httpbin
```

The command above will start the httpbin service on port 8001, if you visit [http://localhost:8001](http://localhost:8001) you can see UI of the httpbin service. If you click around the UI you can try out some requests and see what responses you get back. For example under **HTTP Methods** you can try the **/get** request. You should get the following response back if you **Try it out** and then click **Execute**:

```
Curl: curl -X GET "http://localhost:8001/get" -H "accept: application/json"

Request URL: http://localhost:8001/get

Code 200

Response body

{
  "args": {},
  "headers": {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Connection": "keep-alive",
    "Cookie": "_ga=GA1.1.1242642017.1556946873; _gid=GA1.1.402070062.1556946873",
    "Host": "localhost:8001",
    "Referer": "http://localhost:8001/",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) snap Chromium/73.0.3683.103 Chrome/73.0.3683.103 Safari/537.36"
  },
  "origin": "172.17.0.1",
  "url": "http://localhost:8001/get"
}

Response headers
 access-control-allow-credentials: true
 access-control-allow-origin: *
 connection: keep-alive
 content-length: 569
 content-type: application/json
 date: Sun, 05 May 2019 20:51:17 GMT
 server: gunicorn/19.9.0
```

Great now that we have httpbin setup we can write some tests against it to practice our API Test writing skills.

### Setting up our testing framework

We will do the minimum setup to be able to write API tests, if you would like to see a more complex API test setup check out my [previous post](/blog/post/javascript-api-testing).

First we need to create a project, run the following commands from your terminal:

```bash
mkdir api-sandbox
cd api-sandbox
npm init -y
```

Next we will need to install some dependencies in order to write these API tests. We will be using [Jest](https://jestjs.io/) as our testing framework and [supertest](https://github.com/visionmedia/supertest) as our API assertion library. Therefore while in the **api-sandbox** directory run the following command to install the dependencies:

```bash
npm install -D supertest jest
```

Then update your **package.json** file so that the script will run the jest runner instead of echoing an error.

```json
{
  ...,
  "scripts": {
    "test": "jest"
  },
  ...
}
```

Great! You're now ready to start writing API tests against the httpbin server that you stood up. We will start with a simple test against **/get** endpoint that we mentioned earlier. We can start by making a **spec** file and writing our test inside it, we'll name it **httpbin.spec.js**. By default when you run jest it will search for all files that end in **.spec.js** and execute the tests within them.

```javascript
// ./httpbin.spec.js
const supertest = require("supertest");

describe("httpbin API tests", () => {
  it("should return 200 from the /get endpoint", async () => {
    await supertest("http://localhost:8001")
      .get("/get")
      .expect(200) // validate the status code
      .expect("Content-Type", "application/json") // validate a header
      .expect(response => {
        const { body } = response;

        expect(body.url).toBe("http://localhost:8001/get"); // validate the body contains a url property
      });
  });
});
```

Once you are done writing the test run the following command in your terminal to run your tests.

```bash
npm test
```

That's it! You now have the ability to write tests against a fake server in JavaScript and validate your results. I would highly encourage you to read more documentation on the possible assertions that supertest and jest provide as well as explore the different requests that you can make to httpbin through their UI. All of the code as well as instructions for managing the httpbin service can be found [here](https://github.com/softwarebywright/api-testing-sandbox) as well as in the resources down below.

**Resources**

- [Jest Documentation](https://jestjs.io/docs/en/getting-started.html)
- [Supertest Documenation](https://github.com/visionmedia/supertest)
