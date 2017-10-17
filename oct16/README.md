# October 16th

### Learning Objectives
By the end of this lesson, students will be able to

* write a basic JavaScript program: 99 Bottles of beer on the wall
* use a while loop
* construct conditional expressions
* explain best practices: variable names, keywords, comments

### Readings/Materials
Chapter 2, Head First JavaScript Programming

### Assignments
* Assignment 2-1: Fix the Bug in 99 Bottles
* Assignment 2-2: Madlib
* Assignment 2-3: Create a loop
* Koan 1 AboutExpects
* Git Assignment 2 of 6
* Project Part 2 of 7
* Quiz 2

### My Notes

* `if ... else` statements
  * As long as the `if` statement still returns true, return the function statement inside the `if` statement.
  * `if (something === true) { ... } else { ... }` use `else` to define an action when the `if` statement is no longer true.
  * `if (something === true) { ... } else if (somethingElse === true){ ... }` set secondary condition in order to run an action.
  * You can nest `if` statements if necessary
  * Optimal to chain `if` statements; `if(thing === true || otherThing === true){ ... }`
* Switch statements

    ```
    let day; // set variable to be populated by switch statement
    switch (new Date().getDay()) {

      // The case is the evaluation of the returned value
      // The method on the Date object will return a number between 0 - 6 based on the day of the week
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
    }

    console.log(day);
    ```

* `for` loops and `while` loops
  * ran though examples really fast
  * there are a lot of examples out there, this is not a new concept for me

* `do ... while` loops are very similar to `while` loops, except for the fact that they will ALWAYS run at least once
  * This is a good use case for when you want something to happen, even if the condition is FALSE
  * Note: the `while` loop just needs to evaluate if something is `true`, it doesn't have to compare something. For example you can pass in a function that will return `true` or `false`, e.g. `while (keyPress())`.

    ```
    var x = 10;

    while (x === 11) {
      console.log('yay') // returns nothing
    }

    do {
      console.log('yay') // returns even though condition is false
    }
    while (x === 11);
    ```

* In class lab ... fun with loops

    ```
    var foo = 1;

    while (foo <= 5) {
      var loop;

      if (foo > 1) {
        loop = 'loops';
      } else {
        loop = 'loop';
      }
      console.log(`${foo} while ${loop}`);
      foo++;
    }

    var bar = 5;

    for (i = 1; i <= bar; i++) {
      var loop;

      if (i > 1) {
        loop = 'loops';
      } else {
        loop = 'loop';
      }

      console.log(`${i} for ${loop}`);
    }

    var fooBar = 1;

    do {
      if (fooBar > 1) {
        var looper = 'loops';
      } else {
        var looper = 'loop';
      }

      console.log(`${fooBar} do ... while ${looper}`);
      fooBar++;
    }
    while (fooBar <= 5);
    ```

* Intro to methods on a string ...
  * [More](http://learningjs.anotheruiguy.com/thingsToKnow/methods.html) on methods
  * Hello `.` notation
  * `String.prototype.substring(indesOne, [indexTwo])`
    ```
    var anyString = 'Mozilla';

    // Displays 'Moz'
    console.log(anyString.substring(0, 3));
    console.log(anyString.substring(3, 0));

    // Displays 'lla'
    console.log(anyString.substring(4, 7));
    console.log(anyString.substring(4));
    console.log(anyString.substring(7, 4));
    ```
