# Variables and Data

## Let and Const
* **const** is **imutable** (unchangable)
* **let** is **mutable** (changeable)
```javascript
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

// ES6
const name6 = "Jane Smith"; // Imutable (can't change)
let age = 23; // Can mutate

name6 = "Jane Miller" // TypeError
```
* Variables declared with **var** are **function scoped**
* Variables declared with **let** or **const** are **block scoped**

```javascript
// ES5
function driversLicence(passedTest) { // New function
	if(passedTest) {
		var firstName = 'John';
		var dob = 1990;

	}
	console.log(firstName + ", born in " + dob + " can now drive");
}
driversLicence(true);

//ES6
function driversLicence(passedTest) { // New block and function
	if(passedTest) { // New block
		let firstName = 'John';
		const dob = 1990;
	}
	console.log(firstName + ", born in " + dob + " can now drive");
}
driversLicence(true); // Failes, let and const are blocked scoped (created by {}) while var is created by new functions
```
```javascript
let i = 23;

for(let i = 0; i < 5; i++) {
	console.log(i);
}
console.log(i);

// 0, 1, 2, 3, 4, 23
// Both i's are different variables
```

* **var** is set to undefined during the creation of the variable object in the creation phase
* **let** will not let you use a variable if it hasn't been created yet. (It will through a ReferenceError instead of being undefined)

## Destructuring
```javascript
// ==========
// Arrays
// ==========
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

const [name6, age6] = ['John', 26];

// ==========
// Objects
// ==========
const obj = {
	firstName: 'John',
	lastName: 'Smith'
};
// The keys must match
const {firstName, lastName} = obj;

// Keys don't have to match
const {firstName: a, lastName: b} = obj;

// ==============================
// Functions returning objects
// ==============================
function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}
const [age, retirement] = calcAgeRetirement(1990);

```

## Strings
### Template Literals
```javascript
let firstName = "john";
let lastName = "Smith";
const dob = 1990;

function calcAge(year) {
	return 2018 - year;
}

//ES5
var str = 'This is ' + firstName + ' ' + lastName + ' who was born in ' + dob + '. Today, he is ' + calcAge(dob) + ' years old';

//ES6
let str = `This is ${firstName} ${lastName} who was born in ${dob}. Today, he is ${calcAge(dob)} years old`; 
```
### String Methods
```javascript
const str = "John Smith"
n.startsWith('J');
n.endsWith('th');
n.includes('oh');
str.repeat(5);
```

## Arrays

### Nodelist to Array
```javascript
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
```

### Spread
```javascript
function addFourAges(a, b, c, d) {
	return a + b + c + d;
}

var ages = [18, 30, 12, 21];

// ES5
var sum5 = addFourAges.apply(null, ages);

// ES6
var sum6 = addFourAges(...ages);
```

```javascript
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
```

### Loops
```javascript

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
for(var i = 0; i < boxesArr5.length; i++) {
	if (boxesArr5[i].className === 'box blue') {
		continue;
	}
	boxesArr5[i].textContent = 'I changed to blue';
}

// ES6
const boxesArr6 = Array.from(boxes);
for (const cur of boxesArr6) {
	if (cur.className.includes('blue')) {
		continue;
	}
	cur.textContent = 'I changes to blue';
}
// Allows us to use break or continue
```

### Finding Items

```javascript
var ages = [12, 17, 8, 21, 14, 11];

// ES5
var full = ages.map(function(cur) {
	return cur >= 18;
});
var age = ages[full.indexOf(true)];

// ES6
ages.findIndex(cur => cur >= 18); // returns 3
ages.find(cur => cur >= 18); // returns 21
```

# Functions
## Blocks and IIFEs
```javascript
{
	const a = 1;
	let b = 2;
	var c = 3;
} // new block is created

console.log(a + b); // ReferenceError
console.log(c); // Success
```

## Arrow Functions
The arrow function allows callback functions to be written with less code.
```javascript
const years = [1990, 1995, 1982, 1937];

//ES5
var ages5 = years.map(function(el) {
	return 2018 - el;
});

//ES6
let ages6 = years.map(el => 2018 - el);

ages6 = years.map((el, indx) => `Age element ${indx+1}: ${2018-el}.`);

ages6 = years.map((el, indx) => {
	const now = new Date().getFullYear();
	const age = now - el;
});
```

Arrow functions do not have their own 'this' keyword. (methods have their own 'this' while function's 'this' refers to the global object)
```javascript
// ES5
var box5 {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this; // Fixes the problem
		document.querySelector('.green').addEventListener('click', function() {
			var str = 'This is box number ' + this.position + ' and it is ' + this.color;
		});
	}
}
box5.clickMe(); // Returns undeinfed undefined. The callback function is a regular function and so this points to the global object

//ES6
const box6 {
	color: 'green',
	position: 1,
	clickMe: function() {
		document.querySelector('.green').addEventListener('click', () => {
			var str = `This is box number ${position} and it is ${green}`;
		});
	}
}
box6.clickMe(); // Returns 1 green. This works because the value of this is preserved.
```

```javascript
function Person(name) {
	this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
	var arr = friends.map(function(el) { // This changes this to point to the global object
		return this.name + ' is friends with ' + el;
	}.bind(this)); // bind fixes the problem
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
	let arr = friends.map(el => `${this.name} is friends with ${el}`);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
```

## Rest Parameters

```javascript
// ES5
function isFullAge5() {
	var argsArr = Array.prototype.slice.call(arguments);
	argsArr.forEach(function(age) {
		console.log((2018 - age) >= 18);
	});
}
isFullAge5(1990, 1999, 1965);

// ES6
function isFullAge6(limit, ...years) {
	years.forEach(age => console.log((2018 - age) >= limit));
}
isFullAge6(25, 1990, 1999, 1965);
```

## Default Parameters

```javascript
function SmithPerson(firstName, dob, lastName='Smith') {
	this.firstName = firstName;
	this.dob = dob;
	this.lastName = lastName;
}
```

# Promises

```javascript
var p1 = new Promise((resolve, reject) => {
	const num = Math.random();
	if (num < 0.5) {
		resolve(num);
	} else {
		reject(num);
	}
});

p1.then(result => {
	console.log(`Success: ${result}`);
}).catch(err => {
	console.log(`Error: ${err}`);	
});
```

## Async/Await

```javascript
// getIDs and getRecipe from previous block
async function getRecipiesAW() {
	const IDs = await getIDs;
	const recipe = await getRecipe(IDs[2]);

	return recipe;
}

getRecipiesAW().then(result => console.log(result));
```

# AJAX

## With XMLHTTPRequest
### readyState
| Value | State            | Description                                                  |
|-------|------------------|--------------------------------------------------------------|
| 0     | UNSENT           | Client has been created. open() not called yet. 			  |
| 1     | OPENED           | open() has been called										  |
| 2     | HEADERS_RECEIVED | send() has been called, and headers and status are available |
| 3     | LOADING          | Downloading; responseText holds partial data.                |
| 4     | DONE             | The operation is complete                                    |

### Example
```javascript
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = () => {
	console.log(`readyState: ${XHR.readyState}`);
	if (XHR.readyState === 4) {
		if (XHR.status == 200) {
			console.log(XHR.responseText);
		} else {
			console.log("There was a problem")
		}
	}
};
XHR.open('GET', 'https://api.github.com/zen');
XHR.send();
```

## With Promises
```javascript
fetch('https://crossorigin.me/https://www.metaweather.com/api/location/44418/').then(result => {
	return result.json();	
}).then(data => {
	console.log(data);	
}).catch(err => console.log(err));
```

## With Async/Await
```javascript
async function getWeatherAW(woeid) {
	try {
		fetch(`https://crossorigin.me/https://www.metaweather.com/api/location/${woeid}/`);
		const data = await result.json();
		return data;		
	} catch(err) {
		console.log(err);
	}
}
getWeatherAW(44418).then(result => console.log(result));
```