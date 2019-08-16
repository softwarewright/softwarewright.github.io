---
title: "Learn JavaScript Through Testing #1"
description: Let's learn about variables.
image: /posts/testing.png
date: Thu Aug 15 2019 20:27:33
---

# {{$page.title}}

Welcome back we are going to pick up where we left off in the [last article](/blog/posts/learn-js-through-testing/00-getting-started) with variables. 


:::tip
If you would like to skip the previous article you can download the starter project [here](https://github.com/softwarewright/learn-js-thru-testing/archive/master.zip). Just be sure that you have `NodeJS` along with `npm` installed.
:::

## Understanding Variables

In JavaScript, there are three ways to define variables `var, let, and const`. For learning purposes now we will just focus on one, **var**, and come back to the others at a later point. If you remember the last article we've already seen this in action with the following code:

``` javascript
var theMeaningOfLife = 42;
```

In this example, the `variable` named `theMeaningOfLife` is assigned the number `42`, but variables are not limited to numeric values. 
Variables can be assigned to values that are any of the following types:

::: tip
There are a couple of other things that variables can be that we didn't mention below those will come in later posts.
:::

- String: A sequence of text i.e. "abc"
- Number: A numeric value i.e. 10, 34, 90
- Boolean: A `true` or `false` value, `true` and `false` are both reserved words in JavaScript
- Array: Multiple values stored in a single location denoted by square brackets i.e. [1, "two", 3], which can be accessed by indexing into the array. This can be done by using the name of the variable followed by square brackets and a number specifying the element's location in the array i.e. `myArray[0]`. The element's location is also known as the element's index and arrays start their indexes at 0. 
- Object: A key/value collection of data denoted by curly braces `{ name: "Software Wright" }`. In the example, the key is `name` and the value is a `String` with the value `"Software Wright"`. The `value` of an object's `key` can be obtained by using the `dot operator` in the example above if I wanted the `value` of the name `key` I can use the following syntax `objectValue.name` which you will see below.

::: tip
There are a lot more details that we can go into for Objects, we'll come back to this in a later tutorial. For now, we will keep it at the level of key/value pairs between curly braces. The same goes for Arrays, we will dive deeper into them in a later tutorial.
:::


### Testing Strings

Great, now that we know what a variable can be let's prove it! We'll start with the first statement about strings, they are `a sequence of text i.e. "abc"`. Perfect we have our `Test Case`, `a sequence of text is a string`. Now we need to open the `variables.spec.js` file from the last post and add the following code:

``` javascript
// test case description goes here
test("", () => {
 // assertions go here
})
```

::: tip
If this looks unfamiliar check out [this section](/blog/posts/learn-js-through-testing/00-getting-started#before-we-start-learning)) from the previous article.
:::

Next, we will fill in the description of our `Test Case` with what we mentioned before.


``` javascript {2}
// test case description goes here
test("a sequence of text is a string", () => {
 // assertions go here
})
```

Then we need to create a variable using what we discussed earlier, let's name the variable `aSequenceOfText` and we will assign it the value `abc`.

``` javascript {4}
// test case description goes here
test("a sequence of text is a string", () => {
 // assertions go here
 var aSequenceOfText = "abc";
})
```

Finally, we want to make our assertion that we `expect` a `aSequenceOfText` `toBe` a `String`.

``` javascript {4}
// test case description goes here
test("a sequence of text is a string", () => {
 // assertions go here
 var aSequenceOfText = "abc";

 expect(aSequenceOfText).toBeString()
})
```

That's it! Now give the test a run using the `npm test` command from the previous article and you should get the following:

```bash
 PASS ./variables.spec.js
 ✓ the meaning of life is 42 (7ms)
 ✓ a sequence of text is a string (1ms)

Test Suites: 1 passed, 1 total
Tests: 2 passed, 2 total
Snapshots: 0 total
Time: 1.064s
```
:::tip
A `String` can be any sequence of text, not limited to `abc`, we will learn more about `Strings` and what they can do in a later post. So stay tuned!
:::

:::warn
Now that you have done the `String` `Test Case` I would encourage you to write tests for `Numbers`, `Booleans`, and `Arrays`. If you don
:::

### Testing Numbers

Great work! Now on to the next `Test Case` for `Numbers` the rules that we have defined are, `a numeric value` can be `10, 34, 90`. What would be a good description for this test case? How about `a numeric variable can be 10, 34, or 90`? We'll add this `Test Case` to our `variables.spec.js` file.

``` javascript
// test case description goes here
test("a numeric variable can be 10, 34, or 90", () => {
 // assertions go here
})
```

Next, we need a few variables for each value `numericValue1`, `numericValue2`, and `numericValue3` and we will assign the values we mentioned earlier respectively.


``` javascript {3-6}
// test case description goes here
test("a numeric variable can be 10, 34, or 90", () => {
 // assertions go here
 var numericValue1 = 10;
 var numericValue2 = 34;
 var numericValue3 = 90;
})
```

Finally, we need to assert that all of our `variables` are `Numbers`. We will do this in a `Test Assertion` for each of the variables, and make the statement that we `expect` the variables `toBeNumber`s.

``` javascript {3-6}
// test case description goes here
test("a numeric variable can be 10, 34, or 90", () => {
 // assertions go here
 var numericValue1 = 10;
 var numericValue2 = 34;
 var numericValue3 = 90;

 expect(numericValue1).toBeNumber()
 expect(numericValue2).toBeNumber()
 expect(numericValue3).toBeNumber()
})
```

Next, run your test using the `npm test` command to prove that each variable is a number. You should see the following output in your terminal.

``` bash
PASS ./variables.spec.js
 ✓ the meaning of life is 42 (6ms)
 ✓ a sequence of text is a string (1ms)
 ✓ a numeric variable can be 10, 34, or 90 (1ms)

Test Suites: 1 passed, 1 total
Tests: 3 passed, 3 total
Snapshots: 0 total
Time: 1.113s
Ran all test suites.
```

### Testing Boolean

Next up is testing variables with Boolean values, a boolean value can either be `true` or `false`. The values `true` and `false` are both reserved words in the `JavaScript` language.

:::tip
There is a deeper discussion about truthy and falsy values that we will talk about in a later tutorial, but for now, let's stick with the idea of `true` or `false`. If you would like information about truthy and falsy values you can find out more [here](https://www.sitepoint.com/javascript-truthy-falsy/)
:::

Back to the description mentioned above, we can write our `Test Case` description, `a boolean value can be true or false` and also write our `Test Case`.

``` javascript {2}
// test case description goes here
test("a boolean value can be true or false", () => {
 // assertions go here
})
```

Next, we will need to create a couple of variables setting one to a `true` value and the other to a `false` value.

``` javascript {4,5}
// test case description goes here
test("a boolean value can be true or false", () => {
 // assertions go here
 var trueValue = true;
 var falseValue = false;
})
```

Finally we are going to `expect` the `trueValue` `toBeTrue` and the `falseValue` `toBeFalse` through `Test Assertions`.

``` javascript {7,8}
// test case description goes here
test("a boolean value can be true or false", () => {
 // assertions go here
 var trueValue = true;
 var falseValue = false;

 expect(trueValue).toBeTrue()
 expect(falseValue).toBeFalse()
})
```

### Testing Arrays

Arrays, as mentioned above, are `multiple values stored in a single location`, the single location in our case will be a variable. Given this statement, we will create our `Test Case` with the description `an array stores multiple values in a single location`.

``` javascript
// test case description goes here
test("an array stores multiple values in a single location", () => {
 // assertions go here
})
```

Great we have our `Test Case` setup now on to creating our `variable`. Let's use the `array` value that we listed in the description above ` [1, "two", 3]` to define our `variable` `arrayValue`.

::: tip
Notice that the value of the `array` contains both `numbers` and a `string`. You are not limited to a single type of value when dealing with `arrays`, in fact they can be whatever you want per `element`.
:::

``` javascript {4}
// test case description goes here
test("an array stores multiple values in a single location", () => {
 // assertions go here
 var arrayValue = [1, "two", 3];
})
```

Next we will be writing `Test Assertions` for each `element` in the `array`. Using the knowledge from the description above we should be able to `index` into the `array` to get each `element` starting with `0`. Therefore we `expect` `arrayValue[0]` `toBe` the `number` `1`, `arrayValue[1]` `toBe` the `string` `"two"`, and `arrayValue[2]` `toBe` the `number` `3`.

``` javascript {6-8}
// test case description goes here
test("an array stores multiple values in a single location", () => {
 // assertions go here
 var arrayValue = [1, "two", 3];

 expect(arrayValue[0]).toBe(1);
 expect(arrayValue[1]).toBe("two");
 expect(arrayValue[2]).toBe(3);
})
```

### Testing Objects

Finally `Objects` which are `A key/value collection of data`, knowing this we can make the following `Test Case` description `an object contains a key/value collection of data`.

``` javascript {3}
// test case description goes here
test("an object contains a key/value collection of data", () => {
 // assertions go here
})
```

Next up is creating our variable `objectValue` with the value mentioned above denoted with curly braces `{ name: "Software Wright" }`.


``` javascript {3}
// test case description goes here
test("an object contains a key/value collection of data", () => {
 // assertions go here
 var objectValue = { name: "Software Wright" };
})
```

Then using the `dot operator` that we mentioned above we will get the `value` of the name `key` to perform our `Test Assertion`. In this `Test Assertion` we `expect` the `name` `key` `toBe` the string `"Software Wright"`.

``` javascript {5}
// test case description goes here
test("an object contains a key/value collection of data", () => {
 // assertions go here
 var objectValue = { name: "Software Wright" };

 expect(objectValue.name).toBe("Software Wright")
})
```

:::tip
The expectation could also be written as the following
``` javascript
expect(objectValue).toHaveProperty("name", "Software Wright")
```
This works because a `key` is also known as a `property` of an object. We will dive further into this in later articles, but the line above essential reads that the `objectValue` should have a `property` `name` with the `value` `"Software Wright"`
:::

Amazing work getting through the tutorial, we've just scratched the surface on variables and their value and I can't wait to see you in the next post. If you have any questions or feedback feel free to [contact me](/contact) or leave a comment below, and always remember **you are the Captain of this Quality Cruise Line**.

<vue-disqus shortname="softwarewright" :identifier="$page.key" :url="$page.url" />
