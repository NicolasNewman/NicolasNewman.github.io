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

```

## Function expression
```javascript
var doSomething = function(value) {
	return ("The given info is of type " + (typeof value));
}

var str = doSomething(12);
```