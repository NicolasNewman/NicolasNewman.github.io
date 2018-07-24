# The tidbits and strange

## Truthy and Falsy

| Value           | Result |
|-----------------|--------|
| undefined       | false  |
| null            | false  |
| 0               | false  |
| ''              | false  |
| NaN             | false  |
| Everything else | true   |

```javascript
var height; // undefined

if(height) {
	console.log("Height is defined");
} else {
	console.log("Height is undefined"); // result
}
```

# Creating a function

## Function declaration
```javascript
function doSomething(value) {
	return ("The given info is of type " + (typeof value));
}

var str = doSomething(12);
```

## Function expression
```javascript
var doSomething = function(value) {
	return ("The given info is of type " + (typeof value));
}

var str = doSomething(12);
```

## Self-invoking (anonymous, IIFE)
This is useful when you don't want to reuse the function and need it to be in its own scope (for privacy)
```javascript
(function() {
	alert("I run when the script is executed");
})();
```

## First Class Functions: Passing Functions as Arguments
```javascript
function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

arrayCalc([1990, 2001, 1995, 1950, 1999], function(el) {
	return 2018 - el;
});
```

## First Class Functions: Functions Returning Functions
```javascript
// This is just an example, closures should be used for this scenario.
function interviewQuestion(job) {
	if(job === "designer") {
		return function(name) { console.log(name + ", can you explain what UX design is?") }
	} else if(job === "teacher") {
		return function(name) { console.log("What subject do you teach, " + name + "?") }
	} else {
		return function(name) { console.log("Hello " + name + " what do you do?")}
	}
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion("John");

question("designer")("Mark");
```

## Closures
A closure gives you access to an outer function's cope from an inner function
```javascript
function retirement(retirementAge) {
	var str = ' years left until retirement';
	return function(dob) {
		var age = 2018 - dob;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1940);

var retirementIceland = retirement(67);
```

```javascript
function score() {
	var sc = 0;
	return function(correct) {
		if(correct) {
			sc++;
		}
		return sc;
	}
}

var scoreKeeper = score();
var isCorrect = true;
var sc = scoreKeeper(isCorrect);
console.log(sc);
```
While the execution stack goes away once the outer function returns, its scope chain still sits in memory. When the inner function is called, its context is added to the execution stack. The new scope created for the inner function still has access to the outer scope.

## Bind, call, and apply
```javascript
var john = {
	name: "John",
	age: 26,
	job: '"teacher',
	presentation: function(Style, timeOfDay) {
		if(tyle === 'formal') {
			console.log("Good " + timeOfDay + ", ladies and gentlement! I\'m " + this.name + ", I\'m a " + this.job);
		} else if(style === 'friendly') {
			console.log("Hey! What\'s up?");
		}
	}
}

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
}

// These two methods set the this variable but imedietly call the function
john.presentation.call(emily, 'friendly', 'afternoon'); // replaces this variable with emily. This is method borrowing.
john.presentation.apply(emily, ['friendly', 'afternoon']); // won't work in this example since it doesn't take an array

// Bind will set the this variable but returns a function that can be called at a later point. This is known as currying (creating a function based on another but with preset parameters)
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly("morning");

var emilyFormal = john.presentation.bind(emily, "formal");
```

```javascript
function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
}

function isFullAge(limit, el) {
	return el >= limit;
}

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
```

# Execution Context

## Execution Context
A container that stores a section of code along with variables. The default is the global execution context. It contains code that is **not inside any functions** and is associated with the **global object (window in browsers)** (lastName === window.lastName). When a function is called, **a new execution context is created** and goes on top of the execution stack. If a function is called within a function, it will jump to execute second function's code and return back to the first function when it is done executing the new stack.


## Execution Context Object
Each execution content **contains an object**. The object contains the Variable Object (VO), scope chain, and "this". The execution context is created in two stages

1. Creation phase
    1. Creation of the VO
		* The argument object is created, containing all the arguments that were passed into the function.
		* Code is scanned for **function declarations:** for each function, a property is created in the VO, **pointing to the function**.
		* Code is scanned for **variable declarations:** for each variable, a property is created in the VO, and set to undefined.
		* These last two points are what is known as hoisting. Functions are already defined when the execution phase starts, variables are not
	2. Creation of the scope chain
		* **Each new function creates a scope:** the space/environment in which the variables it defines are accessible. Scopes are not created though if statements, while loops, or for loops.
		* **Lexical scoping:** a function that is lexically within another function gets access to the scope of the outer function.
	3. Determine value of the 'this' variable
2. Execution phase
	1. The code of the function that generated the current execution context is ran line by line

## 1.1 Creation of the VO (Hoisting)
```javascript
// Executes
doSomething();
function doSomething() {
	console.log("foo");
}

// TypeError
doSomething2();
var doSomething2 = function() {
	console.log("foo");
}

// Undefined
console.log(a);
var a = 5;

// ReferenceError
console.log(b);
```

## 1.2 Creation of the Scope Chain
### Execution Stack
```javascript
var a = "Hello"; // Global scope
first();

function first() { // first() scope, has access to parent scope (global and a)
	var b = "Hi!";
	second();

	function second() { // second() scope, has access to parent scope (first and global)
		var c = "Hey!";
		console.log(a + b + c);
	}
}
```
### Scope Chain
```javascript
var a = "Hello"; // Global scope
first();

function first() { // first() scope, has access to parent scope (global and a)
	var b = "Hi!";
	second();

	function second() { // second() scope, has access to parent scope (first and global)
		var c = "Hey!";
		third();
	}
}

function third() { // Can only access a, not b and c
	var d = "John";
	console.log(a + b + c + d);
}
```

## 1.3 this
* **Regular function call:** the this keyword points at the global object (the window object in the browser)
* **Method call:** the this variable points to the object that is calling the method
* The this keyword is not assigned a value until a function where it is defined is actually called
```javascript

function printThis() {
	console.log(this);
} // returns the global object

var john = {
	name: 'John',
	dob: '1990',
	printThis: function() {
		console.log(this);

		function innerFunc() {
			console.log(this);
		} // returns the global object (regular function call)
		innerFunc();
	} // returns the object john (method call)
}
```

# Objects
(almost) everything is an object

| Primitives | Everything Else                         |
|------------|-----------------------------------------|
| Numbers    | Arrays                                  |
| Strings    | Functions                               |
| Booleans   | Objects                                 |
| Undefined  | Dates                                   |
| Null       | Wrappers for Numbers, Strings, Booleans |
|            | And everything else is an object        |

* Every JavaScript object has a **prototype property**, which makes inheritance possible in JavaScript
* The prototype property of an object is where we put methods and properties that we want **other objects to inherit**
* The Constructor's prototype property is **NOT** the prototype of the Constructor itself, it's the prototype of **ALL** instances that are created through it
* When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found. This is the **prototype chain**

## Example with Function Constructors
```javascript
var Person = function(name, dob, job) {
	this.name = name;
	this.dob = dob;
	this.job = job;
	this.calculateAge = function() {
		console.log(2018 - this.dob);
	}
}

Person.prototype.calculateAge2 = function() {
	console.log(2018 - this.dob);
}
Person.prototype.lastName = 'Smith';

var john = new Person("John", 1990, "Teacher");
```
* New creates a new empty object.
* The function is called
	* New Execution Environment is created along with its this variable.
	* this points to the empty object due to the new keyword
* this.name attaches the variables to the new object

An array has the length property and its prototype contains functions such as slice, pop, push, and toString

## Example with Object.create
```javascript
var personProto = {
	calculateAge: function() {
		console.log(2018 - this.dob);
	}
}

// first method of using create
var john = Object.create(personProto);
john.name = "John";
john.dob = 1990;
john.job = "Teacher";

// second method of using create
var jane = Object.create(personProto, {
	name: { value: 'Jane' },
	dob: { value: 1969},
	job : { value: 'designer'}
});
```