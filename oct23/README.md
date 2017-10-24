# October 23rd

## Learning Objectives
By the end of this lesson, students will be able to

* identify arrays
* use the for loop
* use the for loop with return and break
* use the push method
* use the indexOf method

## Required Readings/Materials
* Chapter 4, Head First JavaScript Programming

## Assignments
* Assignment 3-1: Array Practice
* Assignment 2-2: Update Battleship to use Arrays
* Git Assignment 3 of 6
* Koan 2 AboutArrays
* Project Part 3 of 7
* Quiz 3

### Notes

* APIs = programmableweb.com
* `.pop()` will remove the last item in the array
  ```js
  var myArray = [1, 2, 3, 4, 5];
  var itsPop = myArray.pop();

  console.log(itsPop); // 5
  console.log(myArray); // [1, 2, 3, 4]
  ```
* `.shift()` will remove the first item in the array
  ```js
  var myArray = [1, 2, 3, 4, 5];
  var itsShift = myArray.shift();

  console.log(itsShift); // 1
  console.log(myArray); // [2, 3, 4, 5]
  ```
* `unshift()` will add an item to the front of the array.
  ```js
  var myArray = [1, 2, 3, 4, 5];
  var itsUnshift = myArray.unshift('x');

  console.log(myArray); // ["x", 1, 2, 3, 4, 5]
  ```
* `.indexOf()` if the item is in the array, it will return the index location of that item, if it's not there will return `-1`.
  ```js
  var myArray = ['Dale', 'Zoe', 'Zen', 'Jen'];
  var result = myArray.indexOf('Zen');
  var badResult = myArray.indexOf('Fred');

  console.log(result); // 2
  console.log(badResult); // -1
  ```
* `.lastIndexOf()` will return the last instance of the item in that array if it exists.
  ```js
  var myArray = ['Dale', 'Zoe', 'Zen', 'Jen', 'Dale', 'Zoe'];
  var lastItem = myArray.lastIndexOf('Zoe');

  console.log(lastItem);
  ```
.`.sort()` will sort the index in acceding order.
  ```js
  var myArray = ['Dale', 'Zoe', 'Zen', 'Jen', 'Dale', 'Zoe'];
  var sorted = myArray.sort();

  console.log(sorted);
  ```
* `.reverse` will reverse the order of the array, can be added to the `.sort()` method
  ```js
  var myArray = ['Dale', 'Zoe', 'Zen', 'Jen', 'Dale', 'Zoe'];
  var sorted = myArray.sort().reverse();

  console.log(sorted); // ["Zoe", "Zoe", "Zen", "Jen", "Dale", "Dale"]
  ```
* `.split()` will split a string into an array based on the character you define, you can also use a space as an empty string `('  ')`
  ```js
  var myArray = 'Dale Zoe Zen Jen';
  var fixIt = myArray.split(' ').sort();

  console.log(fixIt); // ["Dale", "Jen", "Zen", "Zoe"]
  ```
* `.join` will return the array back as a string
  ```js
  var myArray = 'Dale Zoe Zen Jen';
  var fixIt = myArray.split(' ').sort().join(' ');

  console.log(fixIt); // "Dale Jen Zen Zoe"
  ```
* Multidimensional arrays; basically an array that consists of multiple arrays
  ```js
  var multiArray = [[1,2,3], [4,5,6], [7,8,9]];
  var finder = multiArray[1][2];

  console.log(finder); // 6
  ```

### My Labs

You can add a value to an array that is outside the total length of the array. This is called a `sparse array` and is a bad idea.

```js
var thisArray = [0, 1, 2, 3];
thisArray[10] = 4;

console.log(thisArray) // [0, 1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined, 4]
```

##### First class lab

Create a program that has an array of drinks and prompt the user for new drink and replace the second item in the array with the value of the prompt.

```js
var drinks = ['coke', 'pepsi', 'elks blood', 'vodka tonic', 'beer'];
console.log(drinks);

var newDrink = prompt('Add a new drink');
drinks[1] = newDrink;
console.log(drinks);

var sellDrink = false;
```

##### Second lab

Building off the first lab, loop through the array to determine of a specific element is in the array and return the correct response.


```js
var ask = prompt('What drink would you like?');
var drinks = ['coke', 'pepsi', 'elks blood', 'vodka tonic', 'beer'];
var sellDrink = false;
var i = 0; // only needed for the While loop

// use a While loop
while (i < drinks.length) {
  if (drinks[i] === ask) {
    sellDrink = true;
  }
  i = i + 1;
}

// use a For loop
for (let i = 0; i < drinks.length; i++) {
  if (drinks[i] === ask) {
    sellDrink = true;
  }
}

// use a For ... In loop
for (let drink in drinks) {
  if (drinks[drink] === ask) {
    sellDrink = true;
  }
}

if (sellDrink === true) {
  console.log(`You may have a ${ask}!`)
} else {
  console.log(`Sorry, no ${ask} for you.`)
}
```

##### Third lab (doesn't work in JSBin)

Start with a single item array and prompt the user 5 times and add those values to the array. Return the array to the log.

```js
var food = ['burger'];

for (i = 1; i < 5; i++) {
  food[i] = prompt('more food');
  food.push(i);
}

console.log(food);
```

##### Fourth lab (doesn't work in JSBin)

Start with an empty array and prompt the user for 5 names. Then prompt the user of they want to sort the array or not. Return the array to the log.

```js
var names = [];

for (i = 0; i < 5; i++) {
  names[i] = prompt('Please enter a name');
  names.push(i);
}

var sort = confirm('should named be sorted?');

console.log(sort);

if(sort) {
  names = names.sort();
}

console.log(names);
```


