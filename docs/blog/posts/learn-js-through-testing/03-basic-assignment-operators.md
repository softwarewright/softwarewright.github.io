---
title: "Learn JavaScript Through Testing #3"
description: Let's Learn About Basic Assignment Operators
image: /posts/javascript.png
date: Sun Aug 18 2019 12:12:09
subject: Assignment Operators
specFile: basic-assignment-operators.js
---

# {{$page.title}}

Welcome back to the series, today we will be working through JavaScript `{{$page.frontmatter.subject}}`.

::: tip
Be sure to check out the first part of the series [here](/blog/posts/learn-js-through-testing/00-getting-started.html) for project set up, or download the project template [here](https://github.com/softwarewright/learn-js-thru-testing/archive/variables.zip). Run `npm install` inside of the project folder to get started if you download it.
:::

**Before getting started be sure to create a `{{$page.frontmatter.specFile}}` file in your project directory. This is where we will put all of the new `Test Cases`.**

## Basic Assignment Operators

Much like in the previous post [arithmetic operators](/blog/post/learn-js-thru-testing/02-basic-arithmetic-operators), we will start with a table listing the common operators that exist in JavaScript.

**Given the following variables:**

``` javascript
var x = 10;
var y = 3;
```

|Operator Name| Operator| Usage| Value Of x | Description |
|:-----|:--------|:-----|:-----------|:------------|
||=|x = y|3| Assign the variable on the left of the equal sign to the value to the right. |
||+=|x += y|13| Assign the variable on the left  of the equal sign to the value of the variable plus the value to the right.
||-=|x -= y|7| Assign the variable on the left  of the equal sign to the value of the variable subtracted by the value to the right.|
||*=|x *= y|30| Assign the variable on the left  of the equal sign to the value of the variable multiplied by the value to the right. |
||/=|x /= y|3.3333333333333335| Assign the variable on the left  of the equal sign to the value of the variable divided by the value to the right. |

Great now that we have our table let's start making `Test Cases` for each of the `assignment operators`. 

### = (Assign)

This first operator should feel familiar since we have been using it since the beginning of the series, it is simple value assignment. Therefore when looking at the example in the chart you can seen that we assign the value of `y` to `x`, this overrides the previous value that the `variable` `x` once held. As a result the value of `x` is now `3` and the value of `y` remains the same. With this information we can start by creating our `Test Case`, the description being `assignment changes the variable on the left to the value on the right`.

``` javascript
// test case description goes here
test("assignment changes the variable on the left to the value on the right", () => {
 // assertions go here
})
```

Next we need to create our `variables` `x` and `y` with the same values expected in the chart.

``` javascript {4,5}
// test case description goes here
test("assignment changes the variable on the left to the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;
})
```

After that is done we will follow the usage from the chart and assign the value of `y` to the variable `x`.

``` javascript {7}
// test case description goes here
test("assignment changes the variable on the left to the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x = y;
})
```

Now that `x` has been assigned the value of `y` our `Test Assertion` should be that we `expect` `x` `toBe` `3`. In addition we will add an extra `Test Assertion` that the value of `y` has not changed meaning we `expect` `y` `toBe` `3`. The assignment of the `x` variable has no effect on the value of the `y` variable.

::: tip
Since we are dealing with `value types` (numbers) the changes that happen to `x` will not effect `y`, later in the series will we talk about how `reference types` can be effected by changes done after assignment. If this previous sentence doesn't make sense don't worry we will cover it all in detail in a later piece of this series.
:::

``` javascript {9,10}
// test case description goes here
test("assignment changes the variable on the left to the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x = y;

 expect(x).toBe(3)
 expect(y).toBe(3)
})
```

Great work! Give your `Test Cases` a run using the `npm test` command to make sure all is well

::: tip
Again get into the habit of always running your `Test Cases` after adding a new one.
:::

### += (Add then assign)

The `+=` operator is actually shorthand for add the variable on the left (x) to the value on the right (x) then perform assignment to that same variable. The operation extended looks like this `x = x + y`, if we were to swap the variables for number we end up with the following `13 = 10 + 3`. Once again the `+=` operator condenses the previously mentioned expression into the following `x += y`.

Now that we understand the magic behind the shorthand we can start writing our `Test Case`. The description should be `add then assign changes the variable on the left to be the variable on the right plus itself`.

``` javascript {2}
// test case description goes here
test("add then assign changes the variable on the left to be the variable on the right plus itself", () => {
 // assertions go here
})
```

If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

<EmailSubscription />

<vue-disqus shortname="softwarewright" :identifier="$page.key" :url="$page.url" />