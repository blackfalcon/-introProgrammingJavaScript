# October 30th

## Learning Objectives
By the end of this lesson, students will be able to

* describe what a function is
* define a function
* explain the return statement
* discuss scope - global and local
* describe variable shadowing
* explain how JavaScript uses 2 passes, and where functions are defined
* construct Boolean expressions and use logical operators
* use Math.random(), Math.floor()

## Required Readings/Materials
* Chapter 3, Head First JavaScript Programming
* Chapter 10, Head First JavaScript Programming
* Chapter 11, Head First JavaScript Programming

## Assignments
* Assignment 4A-1: Calculate your age in seconds
* Assignment 4A-2: Coffee Prompter
* Git Assignment 4 of 6
* Koan 3 AboutFunctions
* Project Part 4 of 7
* Quiz 4A Functions;
* Optional:
  * Assignment 4BEC-1 (Optional): Paper Folds
  * Assignment 4BEC-2 (Optional): More Paper Folds

### Chapter 3; Functions
* `Parameters` are assigned to variables within the scope of a function
* When a developer invokes a function, `arguments` are used in place of the required parameters
* Anything can be passed into a functions' parameters. Primitive, an object and even another function
  * It's most common that variables will be passed in as arguments
  * It's an option to pass in a object literal if the data is complex enough and the function can parse the object literal
    * This is much like pass in a Map to a Mixin in Sass
* In a function, through a method called `pass-by-copy` the value of a variable passed as an argument into a function will be mutated, but the value of the actual variable will not
* Global and local variables; anything outside the scope of a function is a GLOBAL var, arguments inside the scope of a function are local variables
  * Even if you declare a variable inside a function, but do not use a `var`, `let` or `const` keyword, the variable will be global when the function is invoked
  * You can use the same name of a global var inside a function with a local var, as long as you use a `var` keyword, this is called `variable shadowing`
* Garbage collection; once the scope of something is closed, JavaScript drops the vars and their values
* You can define a function anywhere in your code, before or after you invoke them, declarative function are fully hoisted
  * If you define a anonymous function with the `var` keyword, this HAS to come before use as the function will get hoisted and the actual function will be where you wrote it

### Chapter 10; First class functions
* The difference between a function expression and a declaration is how the browser parses the code
  * Declarations are hoisted
  * Expressions are simply references to the hoisted variable reference
* The return value of a function can be assigned to a variable
  * The function itself can be assigned to a variable, thus the arguments can be passed into the newly assigned function variable
* Functions have **first class values**
  * Assign the value to a variable (or store it in a data structure like an array or object)
  * Pass the value to a function
  * Return the value from a function
