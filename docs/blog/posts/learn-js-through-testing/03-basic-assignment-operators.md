---
title: "Assignment Operators LJTT #3"
description: Let's Learn About Basic Assignment Operators
image: /posts/javascript.png
date: Sun Aug 18 2019 12:12:09
subject: Assignment Operators
specFile: basic-assignment-operators.spec.js
---

# {{$page.title}}

Welcome back to the series, today we will be working through JavaScript `{{$page.frontmatter.subject}}`.

::: tip
Be sure to check out the first part of the series [here](/blog/posts/learn-js-through-testing/00-getting-started.html) for project set up, or download the project template [here](https://github.com/softwarewright/learn-js-thru-testing/archive/basic-arithmetic-operators.zip). Run `npm install` inside of the project folder to get started if you download it.
:::

**Before getting started be sure to create a `{{$page.frontmatter.specFile}}` file in your project directory. This is where we will put all of the new `Test Cases`.**

## Basic Assignment Operators

Much like in the previous post [arithmetic operators](/blog/post/learn-js-thru-testing/02-basic-arithmetic-operators), we will start with a table listing the common operators that exist in JavaScript.

::: tip
There are other assignment operators in JavaScript. For now, we will stick with the basics and cover the others in a later tutorial.
:::

**Given the following variables:**

``` javascript
var x = 10;
var y = 3;
```

|Operator Name| Operator| Usage| Value Of (x) | Description |
|:-----|:--------|:-----|:-----------|:------------|
|Assignment|=|x = y|3| Assign the variable on the left of the equal sign to the value to the right. |
|Addition Assignment|+=|x += y|13| Assign the variable on the left of the equal sign to the value of the variable plus the value to the right.
|Subtration Assignment|-=|x -= y|7| Assign the variable on the left of the equal sign to the value of the variable subtracted by the value to the right.|
|Multiplication Assignment|*=|x *= y|30| Assign the variable on the left of the equal sign to the value of the variable multiplied by the value to the right. |
|Division Assignment|/=|x /= y|3.3333333333333335| Assign the variable on the left of the equal sign to the value of the variable divided by the value to the right. |
|Remainder Assignment|%=|x %= y|1| Assign the variable on the left of the equal sign to the value of the variable modulus the value to the right. |

::: tip
`Remainder Assignment` uses the `modulus operator` mentioned in the previous tutorial which you can [read here](/blog/posts/learn-js-through-testing/02-basic-arithmetic-operators).
:::

Great now that we have our table let's start making `Test Cases` for each of the `assignment operators`. 

### = (Assignment)

This first operator should feel familiar since we have been using it since the beginning of the series. The `Assignment Operator`, does just that; assigns the variable on the left to the value on the right. Therefore when looking at the example in the chart it can be seen that assigning the value of `y` to `x` will override the previous value of that the `variable` `x` once held. As a result, the value of `x` is now `3` and the value of `y` remains the same. With this information we can start by creating our `Test Case`, the description being `the = operator changes the variable on the left to the value on the right`.

``` javascript
// test case description goes here
test("the = operator changes the variable on the left to the value on the right", () => {
 // assertions go here
})
```

Next, we need to create our `variables` `x` and `y` with the same values expected in the chart.

``` javascript {4,5}
// test case description goes here
test("the = operator changes the variable on the left to the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;
})
```

After that is done we will follow the usage from the chart and assign the value of `y` to the variable `x`.

``` javascript {7}
// test case description goes here
test("the = operator changes the variable on the left to the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x = y;
})
```

Now that `x` has been assigned the value of `y` our `Test Assertion` should be that we `expect` `x` `toEqual` `3`. Also, we will add an extra `Test Assertion` that the value of `y` has not changed, meaning we `expect` `y` `toEqual` `3`. The assignment of the `x` variable does not affect the value of the `y` variable.

::: tip
Since we are dealing with `value types` the changes that happen to `x` will not affect `y`. Later in the series will we talk about how `reference types` can be affected by changes done after being assigned. If this previous sentence doesn't make sense, don't worry we will cover it all in detail in a later piece of this series.
:::

``` javascript {9,10}
// test case description goes here
test("the = operator changes the variable on the left to the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x = y;

 expect(x).toEqual(3)
 expect(y).toEqual(3)
})
```

Great work! Give your `Test Cases` a run using the `npm test` command to make sure all is well

::: tip
Again get into the habit of always running your `Test Cases` after adding a new one.
:::

### += (Addition Assignment)

The `+=` operator is shorthand to add the variable on the left (x) to the value on the right (y) then perform an assignment to the first variable (x). The extended operation looks like this `x = x + y` if we  swap the variables for numbers we end up with the following `13 = 10 + 3`. Once again the `+=` operator condenses the previously mentioned expression into the following `x += y`.

Now that we understand the magic behind the shorthand operator we can start writing our `Test Case`. The description should be `add then assign changes the variable on the left to be itself plus the value on the right`.

``` javascript {2}
// test case description goes here
test("+= changes the variable on the left to be itself plus the value on the right", () => {
 // assertions go here
})
```

Once again we add our variables `x` and `y` with the values `10` and `3 respectively`.

``` javascript {4}
// test case description goes here
test("+= changes the variable on the left to be itself plus the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;
})
```

Then use the `+=` `Assignment Operator`, which should give the variable `x` the value of `13`.

``` javascript {6}
// test case description goes here
test("+= changes the variable on the left to be itself plus the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x += y;
})
```

Finally create our `Test Assertion` that we `expect` `x` `toEqual` `13`


``` javascript {8}
// test case description goes here
test("+= changes the variable on the left to be itself plus the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x += y;

 expect(x).toEqual(13);
})
```

Great work! Now we just need to run the `Test Cases` to be sure they are passing.

::: tip
I would highly recommend attempting the other assignment operators from the chart now, and proving them out with `Test Cases`. If you don't quite feel comfortable with that yet, feel free to follow along.
:::

### -= (Subtraction Assignment)

The `-=` `operator` follows the same rules as the `+=` `operator` the only difference being that it performs subtraction instead of addition. Therefore when performing `x -= y` where `var x = 10;` and `var y = 3;` the end result will be `7`, because `7 = 10 - 3`. Given that the operators are so similar our `Test Cases` will be as well, the description should read `-= operator changes the variable on the left to be itself minus the value on the right`.

``` javascript {2}
// test case description goes here
test("-= operator changes the variable on the left to be itself minus the value on the right", () => {
 // assertions go here
})
```

Then we need to add our variables and perform the operation.

``` javascript {4,5,7}
// test case description goes here
test("-= operator changes the variable on the left to be itself minus the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x -= y;
})
```

This should give `x` the value of `7`, thus our `Test Assertion` should be `expect` `x` `toEqual` `7`.


``` javascript {4,5,7}
// test case description goes here
test("-= operator changes the variable on the left to be itself minus the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x -= y;

 expect(x).toEqual(7);
})
```

Give your `Test Cases` a run using `npm test`, and once they are passing move on to the next operator.

### -= (Multiplication Assignment)

Once again this operator is similar to the others; the only difference being the type of operation is multiplication. As a result the operation `x *= y` given `var x = 10;` and `var y = 3;` the result of `x` will be `30`. Let's get started by creating our description, `*= operator changes the variable on the left to be itself multiplied the value on the right`.


``` javascript {2}
// test case description goes here
test("*= operator changes the variable on the left to be itself multiplied the value on the right", () => {
 // assertions go here
})
```

Next, we will create our variables and perform the multiplication operation.

``` javascript {4,5,7}
// test case description goes here
test("*= operator changes the variable on the left to be itself multiplied the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x *= y;
})
```

As we discussed above the value of `x` will now be `30` and our `Test Assertion` will be that we `expect` `x` `toEqual` `30`.


``` javascript {9}
// test case description goes here
test("*= operator changes the variable on the left to be itself multiplied the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x *= y;

 expect(x).toEqual(30);
})
```

### -= (Division Assignment)

Just like the other operators `/=` follows the same rules the only difference being the operation is division. Therefore `x /= y` given `var x = 10;` and `var y = 3` will assign `x` the value of `3.3333333333333335`. Now that we know what we are expecting, let's start the `Test Case`! The description should look like the following, `/= operator changes the variable on the left to be itself divided by the value on the right`.

::: tip
If you are not sure how we got the value `3.3333333333333335`, check out [the previous post](/blog/posts/learn-js-through-testing/02-basic-arithmetic-operators) where we discuss floating point numbers and the division operator.
:::

``` javascript {2}
// test case description goes here
test("/= operator changes the variable on the left to be itself divided by the value on the right", () => {
 // assertions go here
})
```

Once again let's create our variables and perform the operation.

``` javascript {4,5,7}
// test case description goes here
test("/= operator changes the variable on the left to be itself divided by the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x /= y;
})
```

This will assign `x` the value of `3.3333333333333335` which in turn gives us the `Test Assertion` that we `expect` `x` `toEqual` `3.3333333333333335`.

``` javascript {9}
// test case description goes here
test("/= operator changes the variable on the left to be itself divided by the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x /= y;

 expect(x).toEqual(3.3333333333333335);
})
```

### %= (Remainder Assignment)

On to the final operator, the `remainder assignment operator`. Much like the others, it follows the same rules just with a modulus operation instead.

::: tip
If you are not familiar with the modulus operator check out the [previous tutorial](/blog/posts/learn-js-through-testing/02-basic-arithmetic-operators)
:::

As a result, our `Test Case` description should look like the following, `%= operator changes the variable on the left to be itself modulus the value on the right`.

``` javascript {2}
// test case description goes here
test("%= operator changes the variable on the left to be itself modulus the value on the right", () => {
 // assertions go here
})
```

Next is variable creation and perform the remainder assignment operation.

``` javascript {4,5,7}
// test case description goes here
test("%= operator changes the variable on the left to be itself modulus the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x %= y;
})
```

The operation should assign the value of `x` to `1`, thus we assert that we `expect` `x` `toEqual` `1`.


``` javascript {9}
// test case description goes here
test("%= operator changes the variable on the left to be itself modulus the value on the right", () => {
 // assertions go here
 var x = 10;
 var y = 3;

 x %= y;

 expect(x).toBe(1);
})
```
That's all for the basic assignment operators of JavaScript, great work getting through another tutorial! If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

## **Support this content through [Patreon](https://www.patreon.com/softwarewright)**

<EmailSubscription />

<vue-disqus shortname="softwarewright" :identifier="$page.key" :url="$page.url" />
