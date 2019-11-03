---
title: "Jest Unit Testing: Extending the framework"
description: Extend the jest framework to create cleaner tests.
image: /posts/javascript.png
date: Fri Nov 01 2019 21:55:05
---



# {{$page.title}}

<center>
  <strong>{{$page.readingTime.text}}</strong> 
</center>


**Required Software**

- [NodeJS](https://nodejs.org/en/)

Hands down [jest](https://jestjs.io/) is the best javascript unit testing framework that I have had the pleasure of using. When they say `delightful JavaScript Testing Framework` on their website they mean it!

Today we'll be walking through one of my favorite features of the `jest` framework, the ability to extend it. There are three libraries that we will be going over that can help simplify your tests and make the more readable.

## Getting Started

::: tip
This  post assumes that you have `NodeJS` installed and `npm`. Check that they are installed and working by running `npm -v` and `node -v`. Instructions for installing `NodeJS` can be found [at this post](https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm)
:::

To get started we need to run a few commands to set up our project. 

``` bash
# Make a folder for the project, name it whatever your like
mkdir extending-jest

# cd into that folder
cd extending-jest

# Create your package.json file in the directory
npm init -y

# Install jest
npm i -D jest
```

Next update your `package.json` file in your project folder with a new test command, removing `echo \"Error: no test specified\" && exit 1`.

``` json {7}
{
  "name": "extending-jest",
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
    "jest": "^24.9.0"
  }
}
```

Now that you've created the project and installed jest, we'll create a test that proves that the framework is setup and working.

``` javascript
// test.spec.js

test("20 + 22 should be the answer to life", () => {
    expect(20 + 22).toBe(42)
})
```

Be sure to save the `test.spec.js` file above and give your test a run by using the `npm test` command within a terminal inside your project's directory. You should see the following printed to the terminal:

```
> jest

 PASS  ./test.spec.js
  √ 20 + 22 should be the answer to life (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        5.311s
Ran all test suites.
```

Great we've got `jest` setup! For the final step you need to add a `jest` config section to your `package.json` file, this section will be used later in the post to extend the framework.

::: tip
You don't have to list your `jest` config inside of your `package.json` file, the same can be accomplished by creating a `jest.config.js` file. By default `jest` will look for either of the two without you having to specify them through the command line interface.

``` javascript
// jest.config.js
module.exports = {}
```
:::

``` json {16}
// package.json
{
  "name": "extending-jest",
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
    "jest": "^24.9.0"
  },
  "jest": { }
}
```


## Jest Extended

The first package, [jest-extended](https://www.npmjs.com/package/jest-extended), takes your expectations to the next level by adding additional matchers to your `expect` calls. In the `jest-extended` package there are matchers for `Dates`, `Booleans`, `Mocks`, and so much more. If you would like to see a complete list of all of the additional matchers that the library supplies I would recommend checking out the [jest-extended docs](https://github.com/jest-community/jest-extended)

### Setup

To get started we will install package as a dev dependency.

``` bash
npm i -D jest-extended
```

Once the `jest-extended` dependency has been installed you will need to add the package to the `jest` config inside of the `package.json` file. We do this by adding the `setupFilesAfterEnv` property to the `jest` config section and supplying an array with the string `"jest-extended"` as an element of the array.
 
```json {5}
// package.json
{
  ...,
  "jest": {
    "setupFilesAfterEnv": ["jest-extended"]
  }
}
```

With that the `jest-extended` package is ready to be used in your tests!

### Usage

Now that we have extended the framework, let's see what we can do! We'll start by creating a simple function for us to test inside of a spec file.

``` javascript
// extended.spec.js
const filterEvenNumbers = (items) => items.filter(i => i % 2 === 0)
```

Next let's write our first test without the `jest-extended` package to see the difference in value that the package can add to our tests once used.

**Before**
``` javascript
// extended.spec.js
...

describe("filterEvenNumbers", () => {

  it("should filter array down to only even numbers", () => {
      const numbers = filterEvenNumbers([1,2,3,4,5,6])

      expect(numbers).toBeInstanceOf(Array)
      expect(numbers).toHaveLength(3)
      expect(numbers).toEqual(expect.arrayContaining([2, 4, 6]))
  })
})
```

If you notice in the code above the goal of the first two assertions is to see if the variable `numbers` is an `Array` with a length of `3`. Using the library `jest-extended` we can combine those two assertions into a single statement that checks both.

``` javascript
expect(numbers).toBeArrayOfSize(3)
```

Next the final assertion in this test checks that the returned array contains the values `2, 4, and 6`, the statement `expect(numbers).toEqual(expect.arrayContaining([2, 4, 6]))` does achive this goal, but it could be a bit more cohesive. Luckily the `jest-extended` packges provides us with a function that can do just that `toIncludeAllMembers`, with which we can supply the same array.

``` javascript
expect(numbers).toIncludeAllMembers([2,4,6])
```

::: tip
You could use a `expect(numbers).toEquals([2,4,6])` instead and your tests would still pass the only problem is that if the order is not what you expect then your test will fail. For example  `expect(numbers).toEquals([4, 2, 6])` would cause a test failure whereas `expect(numbers).toIncludeAllMembers([4, 2, 6])` will not since it only cares that the elements are present not that the elements are in a particular order.
:::

The full conversion to `jest-extended` matchers can be seen below:

**After**
``` javascript {7,8}
// extended.spec.js
...
describe("filterEvenNumbers", () => { 
    it("should filter array down to only even numbers", () => {
        const numbers = filterEvenNumbers([1,2,3,4,5,6])

        expect(numbers).toBeArrayOfSize(3)
        expect(numbers).toIncludeAllMembers([2, 4, 6])
    })
})
```

::: tip
I can't recommend enough going through the matchers available for the package on the [jest-extended docs](https://github.com/jest-community/jest-extended)
:::

## Jest Chain

Next up we have [jest-chain](https://github.com/mattphillips/jest-chain), this package allows us to chain our assertions together instead of having separate expect calls. This package essentially turns `jest's` matchers into a `Fluent Interface` allowing unlimited `method chaining`.

::: tip
If you would like to understand more about `Fluent Interfaces` check out [this article](https://en.wikipedia.org/wiki/Fluent_interface).
:::

### Setup

The setup for `jest-chain` is the exact same as `jest-extended`, first install the package and then add it to the `setupFilesAfterEnv` array.

``` bash
npm i -D jest-chain
```

``` json {5}
// package.json
{
  ...,
  "jest": {
    "setupFilesAfterEnv": ["jest-extended", "jest-chain"]
  }
}
```

### Usage

Using the test that we created before we can see that instead of using the multiple assertions they can be all chained into a single expect statement:

**Before**

``` javascript {7,8}
// extended.spec.js
...
describe("filterEvenNumbers", () => { 
    it("should filter array down to only even numbers", () => {
        const numbers = filterEvenNumbers([1,2,3,4,5,6])

        expect(numbers).toBeArrayOfSize(3)
        expect(numbers).toIncludeAllMembers([2, 4, 6])
    })
})
```

**After**

``` javascript {7,8,9}
// extended.spec.js
...
describe("filterEvenNumbers", () => { 
    it("should filter array down to only even numbers", () => {
        const numbers = filterEvenNumbers([1,2,3,4,5,6])

        expect(numbers)
            .toBeArrayOfSize(3)
            .toIncludeAllMembers([2, 4, 6])
    })
})
```

::: tip
Since there is only one assertion, the code above could be simplified even further by calling the function inside of the expect function like so:
``` javascript
...
expect(filterEvenNumbers([1,2,3,4,5,6]))
...
```
:::

As you can see even though `jest-extended` is not a apart of the base set of matcher that `jest` provides it still works well with the `jest-chain` package. The best part about `jest-chain` is that if you get errors for anything in the method chain the error output is still highly readable. You can check this by making either/both of the assertions false and check out the messages that you get.

**Incorrect array size**
``` bash
● filterEvenNumbers › should filter array down to only even numbers

    expect(received).toBeArrayOfSize(expected)

    Expected value to be an array of size:
      4
    Received:
      value: [2, 4, 6]
      length: 3

       6 | 
       7 |         expect(numbers)
    >  8 |             .toBeArrayOfSize(4)
         |              ^
       9 |             .toIncludeAllMembers([2, 4, 6])
      10 |     })
      11 | 
```

**Unexpected member**

``` bash
 ● filterEvenNumbers › should filter array down to only even numbers

    expect(received).toIncludeAllMembers(expected)

    Expected list to have all of the following members:
      [2, 4, 6, 8]
    Received:
      [2, 4, 6]

       7 |         expect(numbers)
       8 |             .toBeArrayOfSize(3)
    >  9 |             .toIncludeAllMembers([2, 4, 6, 8])
         |              ^
      10 |     })
      11 | 
      12 | })
```

## Jest Expect Message

The final package `jest-expect-message` is a simple package that allows you to add a custom message to your expectation, which can help with debugging a test failures.

### Setup

The `jest-expect-message` is much like the other packages the only difference is that you will want to this package first in the `setupFilesAfterEnv` array. This is because in the implementation of the package the defintion of global `expect` function is changed. Therefore you want the `expect` function change to happen before the other packages attempt to make modifications to the global `expect` function.

``` bash
npm i -D jest-expect-message
```

``` json
{
  ...,
  "jest": {
    "setupFilesAfterEnv": [ "jest-expect-message", "jest-extended", "jest-chain" ]
  }
}
```

::: danger
The order is important `jest-expect-message` needs to be first in the list.
:::

### Usage

Once again we will update our previous test to take advantage of the newly installed package. To use the `jest-expect-message` package supply a message as the second argument of the `expect` function, and if your assertions fail the custom message will be displayed.

To test that the message appears correctly we will add an additional element to the `toIncludeAllMembers` assertion and force a failure.

``` javascript {6,8}
// extended.spec.js
describe("filterEvenNumbers", () => { 
    it("should filter array down to only even numbers", () => {
        const numbers = filterEvenNumbers([1,2,3,4,5,6])

        expect(numbers, `Result of the filter: ${numbers}`)
            .toBeArrayOfSize(3)
            .toIncludeAllMembers([2, 4, 6, 8])
    })
})
```

You should see the following custom error message:

``` bash {3,4}
  ● filterEvenNumbers › should filter array down to only even numbers

    Custom message:
      The array should only contain even numbers: 2,4,6

    expect(received).toIncludeAllMembers(expected)

    Expected list to have all of the following members:
      [2, 4, 6, 8]
    Received:
      [2, 4, 6]

       7 |         expect(numbers, `The array should only contain even numbers: ${numbers}`)    
       8 |             .toBeArrayOfSize(3)
    >  9 |             .toIncludeAllMembers([2, 4, 6, 8])
         |              ^
      10 |     })
      11 | 
      12 | })
```

That's it for this tutorial on `Extending Jest` great work making it all the way through! If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

Resources
- [jest-extended](https://www.npmjs.com/package/jest-extended)
- [jest-chain](https://github.com/mattphillips/jest-chain)
- [jest-expect-message](https://github.com/mattphillips/jest-expect-message)

### Share <social :url="$page.path" />

<hr/>

<comments shortname="softwarewright" identifier="extending-jest" :url="$page.path" />
