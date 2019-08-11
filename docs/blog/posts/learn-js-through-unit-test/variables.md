---
title: "Learn JavaScript Through Testing #1"
description: The first part of the series, we will install NodeJS and learn about variables.
image: /posts/testing.png
draft: true
---
When learning any programming language the first thing to learn about is variables. In JavaScript there are three ways to define variables `var, let, and const`. For learning purposes now we will just focus on one, using the **var** keyword come back to the others at a later point. Variables can be assigned to values that can be any of the following types:

- String: A sequence of text i.e. "abc"
- Number: A numeric value i.e. 10, 34, 90
- Boolean: The value **true** or the value **false** in JavaScript these are reserved words
- Array: Multiple values stored in a single location i.e. [1, 2, 3]
- Object: Everything in JavaScript, we will come back to this point in a later post for now just know that everything in JavaScript is an object

::: tip
There are a couple of other things that variables can be that we didn't mention above those will come in later posts.
:::

Now that we have learned a bit about variables it is time to start creating our **Test Assertions** to prove that the statements above are true. We'll start with String and make an assertion that a sequence of text is a string. Start with the **Test Case** block.

``` javascript
test("a sequence of text is a string", () => {
    // assertions go here
})
```

Now on to the assertion, the way that we perform assertions in jest is through the expect function. Followed by what we expect the value to be. I know that we have not talked about functions yet, and we will later, but we will keep the syntax of this pretty simple. It will always be **expect({value}).to{be-expectation}**, in our case the following

``` javascript
// expect the variable that we created
var sequenceOfCharacters = "abc";
// to be a string 
expect(sequenceOfCharacters).toBeString()
```