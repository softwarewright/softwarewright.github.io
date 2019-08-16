---
title: "Learn JavaScript Through Testing #0"
description: The first part of the series, we will install NodeJS and learn a bit about variables.
image: /posts/testing.png
date: Tue Aug 13 2019 21:20:31
---

# {{$page.title}}

**Required Software**

- [NodeJS](https://nodejs.org/en/)

**Recommended Software**

- [Visual Studio Code](https://code.visualstudio.com) - I would highly recommend using Visual Studio Code as your editor, this will be the editor that I use throughout this series.

## Why this series?

This is an opportunity for anyone interested in learning JavaScript with a background in testing, but not necessarily any experience in the automation of testing. Throughout this series, we will learn about the different facets of JavaScript and prove that they work in an automated fashion that will teach both the language as well as how to write tests in it. I know what you are thinking, how can I write tests in JavaScript without knowing JavaScript. Don't worry the goal of this series is to give you the minimum tools that you will need to get started with writing the test and we will use those to build your knowledge of JavaScript. 

I am extremely excited to be doing this series and I hope that you learn a lot from progressing through. If you have any questions or feedback feel free to [contact me](/contact)

## Getting Started

### Install NodeJS

We need to first install NodeJS to provide us with a way to run our JavaScript code. There are countless ways to install NodeJS, the easiest being their home page [here](https://nodejs.org/en/) where they provide easy installation. If you have a package manager, like [Chocolatey](https://chocolatey.org/docs/installation) or [Homebrew](https://brew.sh/), I would highly recommend using it to install NodeJS rather than through their download link. Then just be sure that the binary has been added to your environment variables. For more in-depth instructions for installation check out [this post](https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm). 

::: tip
Be sure to get the LTS version of NodeJS when you download it.
:::

Make sure that everything is set up correctly by running the following commands.

```
node -v
npm -v
```

If you see the version of these output by both commands then you know that you have installed NodeJS correctly

``` bash
# like so...
$ node -v
v8.16.0
$ npm -v
6.4.1
```

::: tip
You may need to restart your terminal to be able to run these commands.
:::

### Setting Up A Project

:::tip
If you would like to skip the project setup you can download the project [here](https://github.com/softwarewright/learn-js-thru-testing/archive/master.zip) and skip to the  [before we start](#before-we-start-learning) section
:::

Setting up a NodeJS project is a simple process, to begin choose a directory for your code to live. My directory will be `learn-js-thru-testing`, once that directory has been created `cd` into it. Next, you will need to create a `package.json` file, this can be done using the command below.

``` bash
# This will create a package.json file with defaults already assigned
npm init -y
```

::: tip
The package.json file serves two purposes, describing your project as well as the dependencies needed to run it. You can read more about the `package.json` file on npm's documentation [here](https://docs.npmjs.com/files/package.json)
:::

Next, we need to install our `Testing Framework` by running the following command inside of the directory with your code.

::: tip
It's ok if you don't understand what a `Testing Framework` is we will discuss it at length throughout this series.
:::

``` bash
# This will install jest, IntelliSense for jest, and additional jest functions
npm install -D @types/jest jest jest-extended
``` 

::: tip
Jest is a `JavaScript Testing Framework` that simplifies the process of testing. If you would like to learn more about jest check out their website [here](https://jestjs.io). The jest-extended package provides additional functions to jest that make testing even easier, check out their documentation [here](https://github.com/jest-community/jest-extended) if you are curious.
:::

Once that is finished you will need to update the package.json `test` script to run the jest framework, and add the extended jest library. 

This means changes the test command in the `scripts` section

```json {4}
{
 ...,
 "scripts": {
 "test": "echo \"Error: no test specified\" && exit 1"
 }
}
```

To this


```json {4,6-10}
{
 ... ,
 "scripts": {
 "test": "jest"
 },
}
```

Then you will need to add the following section to the bottom of your `package.json` file.

``` json {3-7}
{
 ... ,
 "jest": {
    "setupFilesAfterEnv": [
       "jest-extended"
    ]
 }
}
```

After all of the changes your `package.json` should similar to the following:

``` json
{
  "name": "learn-js-thru-unit-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^24.0.17",
    "jest": "^24.8.0",
    "jest-extended": "^0.11.2"
  },
  "jest": {
    "setupFilesAfterEnv": [
      "jest-extended"
    ]
  }
}
```

::: warn
Be sure that you have the `jest` section and the `test` `script` inside of the `scripts` section set up correctly or the tests may not run properly.
:::

## Before we start learning

Throughout this series, we will be learning about JavaScript in an assertion based manner. Therefore if there is a concept within JavaScript that we discuss, it must be backed up with a test. For example, if I were to tell you variables exist in JavaScript and can be assigned values, then there must be a test that asserts that is the case. We will continue to dive into the series in this manner so buckle up because this is going to get exciting!

There are a couple of pieces of terminology and code that we need to dive into before we get started. The first term is a `Test Case`, this is a set of assertions used to determine if a system under test is functioning properly. Therefore we can say that as we write `Test Cases` we will be asserting that, JavaScript, our system under test is functioning properly. `Test Assertions`, the next terminology, are statements that should always be true otherwise our system under test is not functioning properly. For example, if I were to assert that 0 is greater than 1, this would be considered a valid assertion otherwise the system of math is not functioning properly. The final piece that we need to cover is creating a `Test Case` in jest, below is a template that you should use when creating any new `Test Case` in jest.

::: tip
Later in this post, we will show `Test Assertions` look like in the code.
:::

1. Create a file that ends in `.spec.js` i.e. `variables.spec.js`

2. Add a `Test Case`
``` javascript
// test case description goes here
test("", () => {
 // assertions go here
})
```

::: danger
If the two above criteria are not met then the test will not run properly.
:::

When you want to run your `Test Cases` to validate they are working, you will need to run the command below within a terminal that is in the directory with your tests in it.

``` bash
npm test
```

## Variables

:::tip
To start this section first create a file called variables.spec.js, this will house our test cases.
:::

### What is a variable

Variables, in any language, represent a way to store information for later use. For example, if I wanted to store the meaning of life inside of a variable I would first need to start with the keyword `var` followed by the name of the variable `theMeaningOfLife` and then it's value `42`.

``` javascript
var theMeaningOfLife = 42;
```

:::tip
There are other ways to create variables in JavaScript besides the `var` keyword, but we will get into those in a later tutorial.
:::

Great! Now that we have a basic understanding of variables let's jump into the beginning of our assertions. Above we just made the statement that `theMeaningOfLife` has a value of `42`, now we are going to assert on that statement.

We first need to start by creating a file to place our test cases in, I will name my file `variables.spec.js` but feel free to name this file whatever you like as long as it ends in `.spec.js`. Once you have that file created in your project directory, you will want to add the following code to the file.

```javascript
//variables.spec.js

// test case description goes here
test("", () => {
 // assertions go here
})
```

:::tip
The above code is a way to create `Test Cases` in the jest testing framework, later we will discuss in more detail about how this works. I would highly recommend keeping the code above around so that as you want to make more `Test Cases` it will be as simple as copy-and-paste.
:::

Now that we have an empty `Test Case` in jest we can start to fill in information about it. Let's start with the description, our previous assertion is that `the meaning of life` has a value of `42`, so that will be the description of our `Test Case`. To add the description, type in between the double quotes after the word `test(` the following: `the meaning of life is 42` like below.


```javascript {3}
//variables.spec.js

test("the meaning of life is 42", () => {
 // assertions go here
})
```

Great we have a description for our test the next thing on our list is to create our variable and assert that its value is correct. We'll define the variable first using the code that we showed at the beginning of this section.

```javascript {5}
//variables.spec.js

test("the meaning of life is 42", () => {
 // assertions go here
 var theMeaningOfLife = 42;
})
```

Now we are ready to begin writing a `Test Assertion`, the format that jest expects our assertions to be in is `expect({value}).to{be-expectation}`. Therefore in our case we `expect` `theMeaningOfLife` `toEqual` `42`, the way that assertion will appear in the code is `expect(theMeaningOfLife).toEqual(42)` and that's it! Let's add this code to our `Test Case` and prove our assertion.

```javascript {6}
//variables.spec.js

test("the meaning of life is 42", () => {
 // assertions go here
 var theMeaningOfLife = 42;
 expect(theMeaningOfLife).toEqual(42);
})
```

::: tip
As you type out `expect(theMeaningOfLife)` and press `.` I would recommend looking through the options that your editor presents to you. It's fine if you don't understand them for now, we will get into them as we continue throughout the series.
:::

Now that we have created our assertion of `theMeaningOfLife` we now need to run it. To do that you will need to `Open a Terminal` then `Navigate to the directory with your code` and finally `run the npm test command` as shown below.

``` bash
npm test
```

::: tip
This command will run the `test script` that is listed inside of the `package.json file`. In our case, this will run the jest test runner.
:::

Once you have run the command you should see the following output from your terminal.

``` bash
 PASS ./variable.spec.js
 ✓ the meaning of life is 42 (6ms)

Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time: 0.919s, estimated 1s
Ran all test suites.
```

Congratulations! You have just created your first `Test Case` with a `Test Assertion` pat yourself on the back! Great job making it through the first part of the series, in the next part we will continue by diving even deeper into variables in JavaScript. If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

<vue-disqus shortname="softwarewright" :identifier="$page.key" :url="$page.url" />