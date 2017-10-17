# October 9th, 2017

### Learning Objectives
By the end of this lesson, students will be able to

* identify variables, different kinds of values, and the var keyword
* get code into a web page with the `<script>`
* explain how JavaScript is different from HTML & CSS
* identify statements and expressions
* use the console and console.log, alert, and prompt
* link to external scripts
* identify common mistakes, good and bad variable names

### Required Readings/Materials
Chapter 1, Head First JavaScript Programming

### Homework Assignments
* Git Assignment  1 of 6
* Project Part 1 of 7
* Quiz 1

### My Notes

* [canvas.uw.edu](http://canvas.uw.edu)

* Set up environment
  * How to run JavaScript locally?
  * Any browser has a build in console
  * Went through list of online JavaScript dev tools

* Working with common low level intro stuff
  * storing data in variables
  * to or not to semi colon ... [link](https://davidwalsh.name/javascript-semicolons)
  * JSHint or JSLint
    * talked about using web resource, but need to have this baked into Gulp script

* Errors in the browser
  * Declaring a variable with no assignment returns an `undefined` error

* JavaScript primitives
  * number
  * string
  * boolean
  * null
  * undefined

* JavaScript objects ... talk more about this later

* Naming variables
  * Case sensitive `x != X`
  * Can start with `_` or `$`
    * used often with other libraries
    * not a good idea to use with your personal stuff because of library use
    * `$` == jQuery
    * `_` == Underscore or Lowdash
  * Can not start with a number, but can contain numbers after first letter
  * Name code with intent that describes the variable

* `NaN`
  * `'test' * 2 == NaN`
  * `isNaN('test') == true`

* Null
  * Null is an object. It's a bug in the original code? O_O
  * It's an intentional object void of data
  * Null != undefined

* Shorthand operators
  `i++` in reference to loops
  `i = i + 1` === `i += 1`

* Intro to methods ... string manipulation
  * `var str = 'this is a string'`
  * `var foo = str.length()`

* Basic inputs/outputs
  * Using the `prompt()` command
    * built into every browser
    * opens browser modal to enter data
    * `let foo = prompt('Tell me a secret.');` - will store input as value of the `foo` variable.
  * `alert`
    * Returns the content of the `alert()` function into the default browser modal
    * `alert('You have data!')`
  * `console.log()`
    * Easy way to get data to print back in the console
    * `console.log('this is data!')`

* IDEA: Use [prototype bootstrap project](https://github.com/blackfalcon/html5-boilerplate-sass-gulp) for class work
  * Need to update with JSLint
  * Need to update with SassLint

* Assignments
  * Read chapters 1 - 2 for next week
    * Do the puzzles
  * Code assignment
    * Send instructor Github account
    * Create HTML page with JS that prompts a user for a name and alerts a welcome message
    * All assignments are submitted in Canvas
