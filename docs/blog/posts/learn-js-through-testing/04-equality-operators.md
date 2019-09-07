---
title: "Equality Operators LJTT #4"
description: Let's Learn About Equality Operators
image: /posts/javascript.png
date: Sat Aug 24 2019 18:07:03
subject: Equality Operators
specFile: equality-operators.js
---

# {{$page.title}}

Welcome back to the series, today we will be working through JavaScript `{{$page.frontmatter.subject}}`.

::: tip
Be sure to check out the first part of the series [here](/blog/posts/learn-js-through-testing/00-getting-started.html) for project set up, or download the project template [here](https://github.com/softwarewright/learn-js-thru-testing/archive/basic-assignment-operators.zip). Run `npm install` inside of the project folder to get started if you download it.
:::

**Before getting started be sure to create a `{{$page.frontmatter.specFile}}` file in your project directory. This is where we will put all of the new `Test Cases`.**

## Equality Operators

Equality Operators return a `boolean value` (`true/false`) based on the result of `boolean expression`. So the question is what do these `expressions` look like? I'm glad you asked! Listed below is a list of different equality operators in 
JavaScript.

|Operator|Operator Names|Example|Results| Description|
|:-------:|:-------:|:-------:|:-------:|:-------:|
| == | Equality, Double Equals| 10 == 10 <hr/> 10 == 3 <hr> 10 == "10" | true <hr> false <hr> true | This operator checks that the two values being compared are `loosely equal`. `Loosely Equal` meaning that in the example of 10 == '10' JavaScript will convert the '10' `String` into a type that is similar to what 10 is, in this case a `Number`. | 
| === | Strict Equality, Triple Equals| 10 === 10 <hr/> 10 === 3 <hr><span style="text-align:center;white-space:nowrap">10 === "10"</span>| false <hr> false <hr> true | The strict equality operator will check that the two values are exactly the same, this includes their type.  | 
| != | Inequality, Not Equal | 10 != 10 <hr/> 10 != 3 <hr><span style="text-align:center;white-space:nowrap">10 != "10"</span>| false <hr> true <hr> false | This operator checks that the two values being compared are `loosely unequal`. `Loosely` once again meaning that JavaScript will convert the value on the right to the type of the value on the left and then check if they two values are not equal. | 
| !== | Strict Inequality, Strict Not Equal | 10 !== 10 <hr/> 10 !== 3 <hr><span style="text-align:center;white-space:nowrap">10 !== "10"</span>| false <hr> true <hr> true | The strict unequals operator ensures that the two are completely unequal to each other. | 



Given the table above let's start writing `Test Cases`.

### Equality, ==

First up we have the `Equality Operator`, as mentioned in the table above it checks if two values are `loosely equal`. The way that JavaScript checks that two values are loosely equal is through `implicit type coercion`. 

`Implicit Type Coercion` is the operation of changing one JavaScript type into another. This `implicit type conversion` means that when using the `equality operator` in the following comparison `10 == '10'` JavaScript will first figure out the type of the value on the left side of the `equality operator` then convert the value of the right side of the `equality operator` to that same type. Thus resulting in the string `'10'` being converted into the number `10` which means that the comparison `10 == '10'` will be true.

::: tip
There are two types of type coercion `implicit` and `explicit` in this tutorial we only cover the former, though if would like to learn about the latter check out [this post](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/).
:::


Now with the theory out of the way let's dive into our `Test Cases`. The first `Test Case` is that the `equality operator '==' checks that two values are loosely equal`, therefore we will create our `Test Case` with the previous description below.

``` javascript
// test case description goes here
test("equality operator == checks that two values are loosely equal", () => {
 // assertions go here
})
```

Once the `Test Case` has been created we can move into our `Test Assertions`. The first `Test Assertion` from the table above is that we `expect` `10 == '10'` `toBeTrue`, therefore we will add the expectation into our `Test Case`.

``` javascript {4}
// test case description goes here
test("equality operator == checks that two values are loosely equal", () => {
 // assertions go here
 expect(10 == '10').toBeTrue();
})
```
Now that we have added our first `Test Assertion` I would recommend that you run the `Test Case` to ensure that it is working using the `npm test` command. Once everything is passing move on to the next `Test Assertion` which will live in the same `Test Case` above, and is that we `expect` `10 == 3` `toBeFalse`. 

``` javascript {5}
// test case description goes here
test("equality operator == checks that two values are loosely equal", () => {
 // assertions go here
 expect(10 == '10').toBeTrue();
 expect(10 == 3).toBeFalse();
})
```

Sure enough, the number `10` is not equal to the number `3`, thus it is a `false` statement. Run your `Test Cases` again then move on to the final `Test Assertion`, we `expect` `10 == 10` `toBeTrue`. This `Test Assertion` like the other will live in the same `Test Case`.

``` javascript {6}
// test case description goes here
test("equality operator == checks that two values are loosely equal", () => {
 // assertions go here
 expect(10 == '10').toBeTrue();
 expect(10 == 3).toBeFalse();
 expect(10 == 10).toBeTrue();
})
```

Great we have completed our `Test Case` for the `Equality Operator`, let's move on to the `Strict Equality Operator`.

::: tip
I would highly recommend adding additional `Test Assertions` to the `Test Case` above to solidify your understanding of the `Equality Operator`. If you are feeling adventurous I would suggest throwing variables into the mix, and the same goes for any of the other `Test Cases` that we write in this tutorial.
:::

### Strict Equality, ===

Next up is the `Strict Equality Operator`, and as the name suggests it is more strict about the equality of two values. With the `Strict Equality Operator`, there will be no `implicit type coercion` if the two values are not the same type and value then they are not equal. For example while `10 == '10'` with the `Equality Operator` would yield a true result, with the `Strict Equality Operator` `10 === '10'` yields false. This is because strictly speaking the string `'10'` is not equal to the number `10`. 

Great! Now that we understand the basics let's get into the `Test Cases`.

::: tip
The general rule of thumb is to use the `Strict Equality Operator` over `Equality Operator` because most of the time you don't want `type coercion` to occur. Keep in mind though that there are times that it can be beneficial to have the `type coercion` of the `Equality Operator`.
:::

The `Test Case` description will be the following: `strict equality operator === checks that two values are strictly equal`.

``` javascript
// test case description goes here
test("strict equality operator === checks that two values are strictly equal", () => {
 // assertions go here
})
```

Now let's write some `Test Assertions`, the first being that we `expect` `10 === '10'` `toBeFalse` since there is no `implicit type coercion` the string `'10'` will not be equal to the number `10`.

``` javascript {4}
// test case description goes here
test("strict equality operator === checks that two values are strictly equal", () => {
 // assertions go here
 expect(10 === '10').toBeFalse()
})
```

Give your `Test Cases` a run again using `npm test` command and move on to the next `Test Assertion`. Within the same `Test Case` we will add the `Test Assertion` that we `expect` `10 == 3` `toBeFalse` since `10` is not equal to `3`.

``` javascript {5}
// test case description goes here
test("strict equality operator === checks that two values are strictly equal", () => {
 // assertions go here
 expect(10 === '10').toBeFalse()
 expect(10 === 3).toBeFalse()
})
```

Once again run your `Test Cases` again using `npm test`, then move on to the final `Test Assertion` that we `expect` `10 === 10` `toBeTrue`.

``` javascript {6}
// test case description goes here
test("strict equality operator === checks that two values are strictly equal", () => {
 // assertions go here
 expect(10 === '10').toBeFalse();
 expect(10 === 3).toBeFalse();
 expect(10 === 10).toBeTrue();
})
```

Great Work! We are halfway through the equality operators in the table so give your `Test Cases` a run again and we'll move on to the next operator.

::: tip
Now that we have finished the `equality` and `strict equality` operators I would recommend writing the `Test Cases` for the `inequality` and `strict inequality` operators on your own. The key thing to remember is that the results of these operations will be the opposite of the `equality` versions since they are checking for `inequality`. If you still not comfortable with that don't worry, and feel free to read along with the `Test Cases` down below.
:::

### Inequality, !=

The `Inequality Operator` checks if two values are not equal, much like the `Equality Operator`, it will perform `type coercion` before performing the comparison. 
Therefore when performing the equality `10 != '10'` the string `'10'` will be converted to a number before checking inequality resulting in a `false` result. The `false` result is due to the two values being equal after `type coercion` and since we are using the `Inequality Operator` we will receive the result of `false`. Great! We have covered the theory now on to the `Test Cases`.

In this `Test Case`, our description will be the following: `inequality operator != checks that two values are loosely unequal`.

``` javascript
// test case description goes here
test("inequality operator != checks that two values are loosely unequal", () => {
 // assertions go here
})
```

Great, now let's start by adding our `Test Assertions` based on the table above. The first `Test Assertion` is that we `expect` `10 != '10'` `toBeFalse`, because as mentioned above after `type coercion` the values are equal.

::: tip
After adding each `Test Assertion` be sure to run your `Test Cases` using `npm test` in your terminal.
:::

``` javascript {4}
// test case description goes here
test("inequality operator != checks that two values are loosely unequal", () => {
 // assertions go here
 expect(10 != '10').toBeFalse();
})
```

Next up is the assertion that we `expect` `10 != 3` `toBeTrue`, because sure enough `10` is not equal to `3`.

``` javascript {5}
// test case description goes here
test("inequality operator != checks that two values are loosely unequal", () => {
 // assertions go here
 expect(10 != '10').toBeFalse();
 expect(10 != 3).toBeTrue();
})
```

Finally we `expect` `10 != 10` `toBeFalse` since the value of `10` is equal to `10`.

``` javascript {6}
// test case description goes here
test("inequality operator != checks that two values are loosely unequal", () => {
 // assertions go here
 expect(10 != '10').toBeFalse();
 expect(10 != 3).toBeTrue();
 expect(10 != 10).toBeFalse();
})
```

Once again, great work! We will be moving on to the final operator, but before that be sure to give your `Test Cases` a run.

### Strict Inequality, !==

On to the final operator in the table, the `Strict Inequality Operator` which ensures that two values are strictly unequal meaning there is no `type coercion`. As a result the comparison of `10 !== '10'` will return `true` because strictly speaking the two values are not equal. Hopefully, that makes enough sense, if not let's get a better understanding by writing our `Test Case`.

Our `Test Case` will start with the description of the `strict inequality operator !== checks that two values are strictly unequal`.

``` javascript
// test case description goes here
test("strict inequality operator !== checks that two values are strictly unequal", () => {
 // assertions go here
})
```

Next we'll start with our first `Test Assertion` that we `expect` `10 !== '10'` `toBeTrue`. This is because, once again, strictly speaking, the number `10` does not equal the string `'10'`


``` javascript {4}
// test case description goes here
test("strict inequality operator !== checks that two values are strictly unequal", () => {
 // assertions go here
 expect(10 !== '10').toBeTrue();
})
```

::: tip
Don't forget to run your `Test Cases` using `npm test` after each `Assertion`.
:::

On to the next `Test Assertion`, we `expect` `10 !== 3` `toBeTrue`. This is a true statement because the number `10` is not equal to the number `3`. 


``` javascript {5}
// test case description goes here
test("strict inequality operator !== checks that two values are strictly unequal", () => {
 // assertions go here
 expect(10 !== '10').toBeTrue();
 expect(10 !== 3).toBeTrue();
})
```

Then our final `Test Assertion`, we `expect` `10 !== 10` `toBeFalse`. This is a false statement because the two values are the same, therefore equal.

``` javascript {6}
// test case description goes here
test("strict inequality operator !== checks that two values are strictly unequal", () => {
 // assertions go here
 expect(10 !== '10').toBeTrue();
 expect(10 !== 3).toBeTrue();
 expect(10 !== 10).toBeFalse();
})
```

That's it for this tutorial on `Equality Operators` great work making it all the way through! If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

## **Support this content through [Patreon](https://www.patreon.com/softwarewright)**

<EmailSubscription />

<vue-disqus shortname="softwarewright" :identifier="$page.key" :url="$page.url" />
