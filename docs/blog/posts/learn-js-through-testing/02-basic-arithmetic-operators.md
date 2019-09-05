---
title: "Arithmetic Operators LJTT #2"
description: Let's Learn About Basic Arithmetic Operators
image: /posts/javascript.png
date: Fri Aug 16 2019 22:38:56
subject: Arithmetic Operators
specFile: basic-arithmetic-operators.spec.js
---

# {{$page.title}}

Welcome back to the series, today we will be working through JavaScript `{{$page.frontmatter.subject}}`. I hope you're as excited as I am to relive elementary school math. Let's start learning!

::: tip
Be sure to check out the first part of the series [here](/blog/posts/learn-js-through-testing/00-getting-started.html) for project set up, or download the project template [here](https://github.com/softwarewright/learn-js-thru-testing/archive/variables.zip). Run `npm install` inside of the project folder to get started if you download it.
:::

**Before getting started be sure to create a `{{$page.frontmatter.specFile}}` file in your project directory. This is where we will put all of the new `Test Cases`.**

## Basic Arithmetic Operators

In the table below we list some of the basic `operators` that exist within the JavaScript Language. I'm sure that you will recognize at least a few of them from your 4th grade math class. Throughout this tutorial we will use this table to prove out their usage in JavaScript.

**Given the following variables:**

``` javascript
var x = 10;
var y = 3;
```

| Operator | Type | Usage | Result |
|:-------- |:---- |:----- |:------ |
| + | Addition | x + y | 13 |
| - | Subtraction | x - y | 7 |
| * | Multiplication | x * y | 30 |
| / | Division | x / y | 3.3333333333333335 |
| % | Modulus (remainder operator) | x % y | 1 |

::: tip
The modulus operator is called the remainder operator because it will first divide the first number by the second number, then if the first number cannot be divided evenly by the second number the leftover amount is the remainder. For example 13 % 5 would be 3 because 13 can be divided evenly by 5, 2 times with a remainder value of 3. I would recommend trying with other values to practice with this operator. 
:::

Now that we have covered the table, we can begin writing the `Test Assertions` for each of the `operators`.

### Addition

Looking at the usage for addition in the chart above if we add two `variables` that are `numbers` the result will be the sum of the two `numbers`. Given this statement let's create our first `Test Case` description, `the addition of two numbers will be their sum`.

``` javascript {2}
// test case description goes here
test("the addition of two numbers will be their sum", () => {
 // assertions go here
})
```

Next, we need to create the `variables` that we will be adding `x` and `y`. The value of these two variables will be `10` and `3` respectively as mentioned above in the example.

``` javascript {4,5}
// test case description goes here
test("the addition of two numbers will be their sum", () => {
 // assertions go here
 var x = 10;
 var y = 3;
})
```

With the creation of these `variables` can use the `addition` `operator` on them to write our `Test Assertion`, `expect` `x + y` `toBe` `13`.


``` javascript {7}
// test case description goes here
test("the addition of two numbers will be their sum", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 expect(x + y).toBe(13);
})
```

Great if you run your tests using the `npm test` command you should see them all passing.

::: tip
If you understand how this first `Test Case` works I would encourage you to attempt the other `arithmetic operators`, if not feel free to follow along with the tutorial.
:::

### Subtraction

The next `operator` in the chart above is subtraction. When subtracting two `variables` that are `numbers` the result will be their difference. Based on the previous statement we can create our `Test Case` description, `the subtraction of two numbers will be their difference`.

``` javascript {2}
// test case description goes here
test("the subtraction of two numbers will be their difference", () => {
 // assertions go here
})
```

Once again we will create the `variables` to operate on. The values of these two `variables` will once again be `10` and `3`.

``` javascript {4,5}
// test case description goes here
test("the subtraction of two numbers will be their difference", () => {
 // assertions go here
 var x = 10;
 var y = 3;
})
```

Finally we add our `Test Assertion` that we `expect` `x - y` `toBe` `7`, since `10 - 3 = 7`.

``` javascript {7}
// test case description goes here
test("the subtraction of two numbers will be their difference", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 expect(x - y).toBe(7)
})
```

Great work! That's another operator down, give your `Test Cases` another run using `npm test` to prove everything is working.

::: tip
I would **highly recommend** getting in the habit of running your `Test Cases` after creating each one.
:::

### Multiplication

On to multiplication, when multiplying two `variables` that are `numbers` the result will be the product of the two `numbers`. We will follow the same logic as the previous `Test Cases` and create our description `the multiplication of two numbers will be their product`, the `variables`, the `Test Assertion` that we `expect` `x * y` `toBe` `30`.


``` javascript
// test case description goes here
test("the multiplication of two numbers will be their product", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 expect(x * y).toBe(30)
})
```

### Division

Division is bit different than the others, when dividing values in JavaScript you will run into something called `floating point numbers`. `Floating point` numbers, at a high level, allow us to represent decimal values in JavaScript. For example, if we wanted to represent the value of PI we could assign a variable to the value `3.14`.

::: tip
Technically all numbers in JavaScript are 64-bit floating-point numbers. If you want to understand a bit more about floating-point numbers check out [this article](https://medium.com/@sarafecadu/64-bit-floating-point-a-javascript-story-fa6aad266665).
:::

Back to writing our `Test Case` we will need to keep in mind that since `10` cannot be evenly divided by `3` the result will be a `decimal` value. As a result, we `expect` `x/y` `toBe` `3.3333333333333335` is our `Test Assertion`. The rest of the test will follow the same rules as all of the others.


``` javascript
// test case description goes here
test("the division of two numbers will be their quotient", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 expect(x / y).toBe(3.3333333333333335)
})
```

### Modulus

As mentioned in the chart above the `modulus operator`, otherwise known as the `remainder operator`, can be used to obtain remainder from the division of two numbers. In our case, we `expect` `x % y` `toBe` `1`, because the remainder after dividing `10` by `3` will be `1`. The rest of the `Test Case` will follow the same rules as the others.

``` javascript
// test case description goes here
test("the modulus of two numbers will be their remainder", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 expect(x % y).toBe(1)
})
```

That's it for the basic `arithmetic operators`! Be sure to run your `Test Cases` to make sure they are all passing.

Fantastic work getting through this tutorial, you should now have a basic understanding the basic arithmetic operators of JavaScript. I would recommend changing out some of the numbers, updating your `Test Cases`, and even adding new ones to solidify these concepts. If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

<EmailSubscription />

<vue-disqus shortname="softwarewright" :identifier="$page.key" :url="$page.url" />
