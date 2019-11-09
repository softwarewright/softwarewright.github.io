---
title: "Jest Unit Testing: Jest Mock Functions"
description: 
image: /posts/javascript.png
date: Fri Nov 01 2019 21:55:05
---



# {{$page.title}}

<center>
  <strong>{{$page.readingTime.text}}</strong> 
</center>


**Required Software**

- [NodeJS](https://nodejs.org/en/)

Welcome back for another exciting trip through the world of `jest testing` :smiley:! In this article we will be discussing one of my favorite topics within `jest` and that is mocks, more specifically we will be doing a deep dive into `jest.fn()`. Before we begin it's important to understand the purpose of mocking and why it can by extremely useful in testing.

## What is a mock anyways?

Mocks mimic the functionality of code, that must be why they're such a joke. Get it? Because they `mimic` code :sweat_smile:, nevermind I'll stick to being a developer :nerd_face:. 

In all seriousness mocking is a powerful tool in testing that should not be underestimated. Mocks give you the ability to prove that given your external dependencies are functioning correctly, that your code will execute as expected. 

### Mocking The hard way

All of that sounds great, but code is king :crown: so let's see some examples. We'll start with a `Users Service` class that has a single function `getUsers` and a `dependency` on the `requestService`.

``` javascript {4,8}
// users.service.js

class UsersService {
  constructor(requestService) {
    this.requestService = requestService;
  }

  async getUsers() {
    const response = await this.requestService.get('/users');

    return response.data;
  }
}

module.exports = UsersService;
```

As you can see this function makes an API call using a request library supplied through the constructor, then returns the body of the request which happens to be stored as a `property` named `data`.

Now if we wanted to test this code as is without mocking, there is a bit of leg work that we would have to do:

- Supply a request library like `axios`
- Ensure there is a base url set so that `/users` works
- Set up an API with a users endpoint for this class to call
- And so on ...

But wait! Using mocks we can supply a fake request object, and ensure that given the results of our request are successful we should get back the data of the request.

Let's test this by creating a javascript file and using our `UsersService`.

::: tip
Create a `users.service.js` in a directory of your choice with the code above placed inside, then create a `index.js` file with the code below.
:::

``` javascript
// index.js

const UsersService = require("./users.service.js");

// the main function is just to be able to run our async code.
const main = async () => {
  const usersService = new UsersService();

  const users = await usersService.getUsers();
  console.log(users);
}

main();
```

If you run the code above using `node index.js` from your terminal you get an error mentioning `TypeError: Cannot read property 'get' of undefined`. This is because we did not supply a `requestService` for our `usersService`.

Now we could install a package like `axios` or `fetch`, but we want to explore the world of mocks. Therefore we will create our own mock and then explore using the `jest.fn()` supplied by jest to mock our `requestService`.

The `requestService` has an interface that is modelled closely after the `axios` library.

You can tell by observing the usage in the `UsersService.getUsers` function.

```javascript {3,5}
...
  async getUsers() {
    const response = await this.requestService.get('/users');

    return response.data;
  }
...
```

There are a few things that we can tell about this `requestService`:

- It is an object that has a `get` function
- The `get` function takes at least one parameter which is the `url` that we are requesting
- Since we `await` on that line then the function must return the response in a promise
- The response returned should have a `data` which will be returned by the `getUsers` function.

Given the statements above we know that when creating our own mock we will need an `object` that contains a `get function` that takes a `url parameter` and returns a `Promise` returning the `response` that contains a `data` property. With this in mind let's start creating our `mock` `requestService` back in our `index.js` file.


```javascript {3-8}
...
const main = async () => {
  const requestService = {
    get(url) {
      const response = { data: [] }
      return Promise.resolve(response)
    }
  };
  const usersService = new UsersService(requestService);
...
```

Great! If you run the code again, you'll see that you get the following back.

``` bash
$ node index.js
[]
```

As you can see we recieved the empty array that we supplied in the response of the get request. Fantasic! We have made a simple stand in mock for a request library, but if you look at this mock it's not very useful.

Currently the only thing that the mock is capable of doing is returning a response that has an empty array. Think about if I wanted to understand/do more complicated things with my mock such as:

- Check if mocked function was called
- See how many times the mock was called
- What was the mock called with
- Make the mock return different values
- Make the mock throw an error to see how my code will react

Our mock implementation was nice but if we want the functionalty above it looks like we're gonna need a bigger boat, alright that's the last joke of this post swear.

We need to start looking toward jest's mock functions.

## Jest Mock Functions

Jest's mock functions are a powerful tool at the heart of the testing framework. The mock functions give us a deeper understanding of our mocked objects such as:

- The number of calls made
- The parameters given for each call 
- Also they allow different return values
- And so much more...

With this higher level of mocking we can start to test our code in a more cohesive fashion, but first we have to setup the jest framework.

### Jest Setup

Before we can start mocking we need to do a bit of setup. Start by running the following commands:

``` bash
npm init -y
npm install --save-dev jest
```

::: tip
This will create a package.json file and install jest as a dev dependency.
:::

Next update the `test` `script` inside of the package.json file to the `jest` command.

``` json {7}
{
  "name": "mock-functions",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "jest": "^24.9.0"
  }
}
```

That's it! You are now setup to run jest tests, so let's get mocking!

### Making the jump to mocks

To start writing our tests we need to have a spec file, so in your project create a `users.service.spec.js` file.

Next we are going to add our first test, with a description.

``` javascript
test("should request the users", () => {

})
```

Now that we have an empty test I think it's time we start to fill it. We'll
start by creating our `UsersService`.

``` javascript {1,4}
const UsersService = require("./users.service");

test("should request the users", () => {
  const usersService = new UsersService();
})
```

Much like before we need to create our `requestService` and mock it out, but this time we will be taking advantage of `jest's` mock functions. To do this you simply assign the `get` function inside of the `requestService` to `jest.fn()` and then pass it into the `UsersService` constructor like below.

``` javascript
const UsersService = require("./users.service");

test("should request the users", () => {
  const requestService = { 
    get: jest.fn() 
  };
  const usersService = new UsersService(requestService);
})
```

If your only goal is to assign a mock to the `get` function of the `requestService` then we would be done, but there is a bit more that we need to complete this example. We need to return a `Promise` containing the `response` when the `get` function is called. Luckly the `jest` mock allows us to do this with a single function call, `mockResolvedValue` which will have the mock function you've created return a `Promise` containing the result of your choosing.

``` javascript {6}
const UsersService = require("./users.service");

test("should request the users", () => {
  const response = { data: [] };
  const requestService = { 
    get: jest.fn().mockResolvedValue(response)
  };
  const usersService = new UsersService(requestService);
})
```

Now that we've setup our mock function we are ready to test our `getUsers` function and make our assertions against the mock.

::: warning
Be sure to make the test function `async`. See the changes on line `3` of the code snippet below.
:::

``` javascript {3,10,12}
const UsersService = require("./users.service");

test("should request the users", async () => {
  const response = { data: [] };
  const requestService = { 
    get: jest.fn().mockResolvedValue(response)
  };
  const usersService = new UsersService(requestService);

  await usersService.getUsers();

  expect(requestService.get).toHaveBeenCalledWith("/users");
})
```

Woah! That's pretty awesome right, with very little effort we have created a mock object and proved that the `requestService` was called correctly when the `getUsers` function is called. 

Though if I'm being honest the code above feels a bit magical, so let's dive a bit deeper into inner workings the `jest.fn()`.


### jest.fn() deep dive

Let's step away from our current test for a bit to breakdown the `jest.fn()`. Let's start by creating a new test to be run and we'll skip our first test like so.

``` javascript
...
test.skip("should request the users", async () => {
...

test("jest.fn() deep dive", () => { })
```

Amazing! Now that we have our test case, let's talk mocks. To start off add a `variable` `mockFunction` to the test and assign it the value `jest.fn()`, then do a console log of the variable to see what you get back.

``` javascript
...
test("jest.fn() deep dive", () => {
    const mockFunction = jest.fn();

    console.log(mockFunction);
})
```

If you run your tests using the `npm test` command from your terminal, you should see the following output in the logs of your terminal. There is a lot of functions in this log of the `mockFunction`, but there is one that is very important to notice on line `5`. The `mock` property contains information about the calls that have been made to your `mock` function.

``` bash {5}
  console.log users.service.spec.js:18
    { [Function: mockConstructor]
      _isMockFunction: true,
      getMockImplementation: [Function],
      mock: [Getter/Setter],
      mockClear: [Function],
      mockReset: [Function],
      mockRestore: [Function],
      mockReturnValueOnce: [Function],
      mockResolvedValueOnce: [Function],
      mockRejectedValueOnce: [Function],
      mockReturnValue: [Function],
      mockResolvedValue: [Function],
      mockRejectedValue: [Function],
      mockImplementationOnce: [Function],
      mockImplementation: [Function],
      mockReturnThis: [Function],
      mockName: [Function],
      getMockName: [Function] }
```

To prove this let's change our console log to print out the `mock` property of the `mockFunction` variable instead.

``` javascript
test("jest.fn() deep dive", () => {
    const mockFunction = jest.fn();

    console.log(mockFunction.mock);
})
```

If you run the `npm test` command again we can see the output of the `mockFunction.mock` property.

``` bash
  console.log users.service.spec.js:18
    { calls: [], instances: [], invocationCallOrder: [], results: [] }
```

As you can see there have been no calls to the `mockFunction variable`, if we were to call the function and then console log again we can now see information about the the calls that have been made to the `mockFunction` variable.

``` javascript
test("jest.fn() deep dive", () => {
    const mockFunction = jest.fn();

    console.log(mockFunction.mock);
    mockFunction("Hello Mocks");
    console.log(mockFunction.mock);
})
```

The first output will be the same as above, but the second output we can see information about the call.

``` bash
  console.log users.service.spec.js:20
    { calls: [ [ 'Hello Mocks' ] ],
      instances: [ undefined ],
      invocationCallOrder: [ 1 ],
      results: [ { type: 'return', value: undefined } ] }
```

Notice that `calls` has the parameters that the function was called with, `invocationCallOrder` tells you when the function was called, and finally `results` tells you what the function returned when it was called. 

::: tip
Since we did not specify that the function returned a value the `results` of the first call is undefined. Feel free to specify what the function returns using one of the following functions and see the value change.

- mockReturnValueOnce
- mockReturnValue
:::

Let's add some assertions to solidify what we learned. We'll right them in long form, and then switch to the short hand.

``` javascript {9,11,13}
test("jest.fn() deep dive", () => {
    const mockFunction = jest.fn();

    console.log(mockFunction.mock);
    mockFunction("Hello Mocks");
    console.log(mockFunction.mock);
    
    // expect the mock to have only been called once
    expect(mockFunction.mock.calls).toHaveLength(1)
    // expect the mock to have been called with the string "Hello Mocks"
    expect(mockFunction.mock.calls[0]).toEqual(["Hello Mocks"]);
    // expect the mock to have returned undefined
    expect(mockFunction.mock.results[0]).toEqual({ type: 'return', value: undefined });
})
```

Now let's see the shorthand

``` javascript {8-10}
test("jest.fn() deep dive", () => {
    const mockFunction = jest.fn();

    console.log(mockFunction.mock);
    mockFunction("Hello Mocks");
    console.log(mockFunction.mock);
    
    expect(mockFunction).toBeCalledTimes(1)
    expect(mockFunction).toHaveBeenCalledWith("Hello Mocks");
    expect(mockFunction).toHaveReturned(undefined);
})
```

Now that we have broken down the `jest.fn()` function I would highly recommend adding more mock function variables and calling them as well, changing out the return types, and watching as the mock object changes with each call.


That's it for this tutorial on `jest mock functions` great work making it all the way through! If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

Resources
- [Source Code](https://github.com/softwarewright/)
- 

### Share <social :url="$page.path" />

<hr/>

<comments shortname="softwarewright" identifier="jest-mock-functions" :url="$page.path" />
