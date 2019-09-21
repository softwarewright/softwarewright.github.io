---
title: "Relational Operators LLJT #5"
description: Let's Learn About Relational Operators
image: /posts/javascript.png
date: Mon Sep 09 2019 08:14:57
subject: Relational Operators
specFile: relational-operators.spec.js
---

# {{$page.title}}

Welcome back to the series, today we will be working through JavaScript `{{$page.frontmatter.subject}}`.

::: tip
Be sure to check out the first part of the series [here](/blog/posts/learn-js-through-testing/00-getting-started.html) for project set up, or download the project template [here](https://github.com/softwarewright/learn-js-thru-testing/archive/equality-operators.zip). Run `npm install` inside of the project folder to get started if you download it.
:::

**Before getting started be sure to create a `{{$page.frontmatter.specFile}}` file in your project directory. This is where we will put all of the new `Test Cases`.**

## Relational Operators

JavaScript's `Relational Operators` compare two values to obtain a `Boolean` result, meaning a `true` or `false` value. These `relational operators` check if values are greater than or less than one another. Time to remember your first-grade math class, because this code is about to get relational! Let's start working our way through the table below to get our bearings.


|Operator|Operator Name|Examples|Results| Description|
|:-------:|:-------:|:-------:|:-------:|:-------:|
| < | Less Than | 3 < 10 <hr/> 10 < 3 <hr> 3 < 3  | true <hr/> false <hr> false | Checks if the value to the left is less than the value to the right. |
| <= | Less Than Or Equal To | 3 <= 10 <hr/> 10 <= 3 <hr> 3 <= 3  | true <hr/> false <hr> true | Checks if the value to the left is less than or equal the value to the right. |
| > | Greater Than | 3 > 10 <hr/> 10 > 3 <hr> 3 > 3  | false <hr/> true <hr> false | Checks if the value to the left is greater than than the value to the right. |
| >= | Greater Than Or Equal | 3 >= 10 <hr/> 10 >= 3 <hr> 3 >= 3  | false <hr/> true <hr> true| Checks if the value to the left is greater than or equal to the value to the right. |

The operators in the table above, hopefully, are pretty self-explanatory in what they do.

::: tip
The `relational operators` work on more than just numbers, they can be used for strings or any value in javascript. Just be sure that the comparison of value makes sense, for example comparing two objects with any of the operators would yield unexpected results.
:::

Now that we have our chart, let's jump into the tests!

### Less Than <

The less than operator, as the description mentions, checks that the value on the left is less than the value of the right. As a result when performing the comparison `3 < 10` the `Boolean` result will be true since `3` is less than `10`. Simple enough right? If not, let's start writing our `Test Case` and `Test Assertions` to prove the comparison is true. Much like the other tutorials, we will start with the test description, `the less than operator checks that the value on the left is less than the value on the right`. Great now that we have our description, we'll create the `Test Case`.

``` javascript
// test case description goes here
test("the less than operator checks that the value on the left is less than the value on the right", () => {
 // assertions go here
})
```

Now that we have an amazing test description we can start creating our assertions. There will be an assertion per example from the description above, starting with `3 < 10`. With the first example we `expect` `3 < 10` `toBeTrue`, and therefore we will add the assertion below.


``` javascript {4}
// test case description goes here
test("the less than operator checks that the value on the left is less than the value on the right", () => {
 // assertions go here
 expect(3 < 10).toBeTrue();
})
```

Give those `Test Cases` another run using `npm test`, and we'll move on to the next set of assertions. In the same `Test Case` we'll add next two examples that we `expect` `10 < 3` `toBeFalse` and that we `expect` `3 < 3` `toBeFalse`.


``` javascript {5,6}
// test case description goes here
test("the less than operator checks that the value on the left is less than the value on the right", () => {
 // assertions go here
 expect(3 < 10).toBeTrue();
 expect(10 < 3).toBeFalse();
 expect(3 < 3).toBeFalse();
})
```
::: tip
Remember `3` is equal to `3` so the last statement resolves to false instead of true. We'll see below how the less than or equal to operator accounts for that.
:::

::: tip
The first assertion above can also be written with `toBeLessThan` instead, like so:

``` javascript
expect(3).toBeLessThan(10)
```
:::

Fantasic work! Now that we have our assertions run the `Test Cases` once more using `npm test` and we'll move on to the next operator.

::: tip
Given the chart above and the previous examples you should have enough to write the rest of the `Test Cases`, so I would recommend attempting them on your own. If you don't feel comfortable then feel free to follow along with the rest of the operators.
:::

### Less Than Or Equal <=

Next up, the less than or equal operator which checks if the value on the left is less than or equal to the value on the right. Based on this we can create a `Test Case` with a description down below stating this.

``` javascript
// test case description goes here
test("the less than or equal operator checks that the value on the left is less than or equal to the value on the right", () => {
 // assertions go here
})
```

Once you have your `Test Case` created, let's start writing our `Test Assertions`. The first assertion will be that we `expect` `3 <= 10` `toBeTrue`, thus add the assertion to your `Test Case`.

``` javascript {4}
// test case description goes here
test("the less than or equal operator checks that the value on the left is less than or equal to the value on the right", () => {
 // assertions go here
 expect(3 <= 10).toBeTrue();
})
```

Once you have run your `Test Cases` again, add the next two `Test Assertions` that we `expect` `10 <= 3` `toBeFalse` and we `expect` `3 <= 3` `toBeTrue`.

``` javascript {5,6}
// test case description goes here
test("the less than or equal operator checks that the value on the left is less than or equal to the value on the right", () => {
 // assertions go here
 expect(3 <= 10).toBeTrue();
 expect(10 <= 3).toBeFalse();
 expect(3 <= 3).toBeTrue();
})
```

::: tip
Again for the true assertions we have the ability to use another option besides `toBeTrue`, which is `toBeLessThanOrEqual`:

``` javascript
expect(3).toBeLessThanOrEqual(10);
expect(3).toBeLessThanOrEqual(3);
```

This will be the same for the `GreaterThan` and `GreaterThanOrEqual` operators mentioned below.
:::

Once again we have a completed `Test Case` so be sure to run your `Test Cases` again using `npm test` and we'll move on to the next operator.

### Greater Than >

On to the greater than operator, which I'm sure you have guessed, checks if the value on the left is greater than the value to the right. Therefore, we will use the information in the table above to create our `Test Case` and its `description`.

``` javascript
// test case description goes here
test("the greater than operator checks that the value on the left is greater than the value on the right", () => {
 // assertions go here
})
```

That's a great looking `Test Case`, but it could seriously use some `Test Assertions` starting with the comparison `3 > 10`. With the first example in the table above we `expect` `3 > 10` `toBeFalse`, so with this let's add our `Test Assertion` to our `Test Case`.


``` javascript {4}
// test case description goes here
test("the greater than operator checks that the value on the left is greater than the value on the right", () => {
 // assertions go here
 expect(3 > 10).toBeFalse()
})
```

Run those `Test Cases` again and move on to the last two examples, we `expect` `10 > 3` `toBeTrue` and we `expect` `3 > 3` `toBeFalse`.

``` javascript {5,6}
// test case description goes here
test("the greater than operator checks that the value on the left is greater than the value on the right", () => {
 // assertions go here
 expect(3 > 10).toBeFalse()
 expect(10 > 3).toBeTrue()
 expect(3 > 3).toBeFalse()
})
```

Done and done! Once again run your `Test Cases` and then move on to the final operator.

### Greater Than Or Equal >=

Lastly, we have the greater than or equal operator which checks for just what you would expect. Is the value on the left greater than or equal to the value on the right? Fantastic, let's use this information and the description above to create a `Test Case` with a `description`.

``` javascript
// test case description goes here
test("the greater than or equal operator checks that the value on the left is greater than or equal to the value on the right", () => {
 // assertions go here
})
```

Moving on to our `Test Assertion` based on the table example above, we `expect` `3 >= 10` `toBeFalse`. 

``` javascript {4}
// test case description goes here
test("the greater than or equal operator checks that the value on the left is greater than or equal to the value on the right", () => {
 // assertions go here
 expect(3 >= 10).toBeFalse()
})
```

Now on to our final `Test Assertions` of the tutorial, we `expect` `10 >= 3` `toBeTrue` and we `expect` `3 >= 3` `toBeTrue`.

``` javascript {5,6}
// test case description goes here
test("the greater than or equal operator checks that the value on the left is greater than or equal to the value on the right", () => {
 // assertions go here
 expect(3 >= 10).toBeFalse();
 expect(10 >= 3).toBeTrue();
 expect(3 >= 3).toBeTrue();
})
```

Phenomenal work getting through another tutorial, and I hope you gained something from the post. I would highly recommend trying different numbers in each of the test cases and ensure you understand the operators before moving on. If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

## **Support this content through [Patreon](https://www.patreon.com/softwarewright)**

<EmailSubscription />

<vue-disqus shortname="softwarewright" identifier="relational_operators" :url="$page.url" />