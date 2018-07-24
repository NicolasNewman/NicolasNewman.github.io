* The DOM is the document object model. 
* It is a structured representation of an HTML document.
* It is used to connect webpages to scripts.

# Accessing Elements
## By name/id/class
```javascript

// Old way
document.getElementById('someId');
document.getElementByClassName("someClass");
document.getElementsByTagName("tag (without angle brackets)");

// New way
document.querySelector('.someClass');
document.querySelector('div h1.title');

document.querySelectorAll("div.note, div.alert");
```

## By relation
```javascript
var stored = document.getElementById("someId");

var children = stored.childNodes;
var parental = children.parentNode;
```

# Adding/Creating/Modifying Elements

## Creating Elements
```javascript
var newP = document.createElement('p');
var pText = document.createTextNode("This is the text that will be placed in newP");
newP.appendChild(pText);
```

## Adding Elements
```javascript
var div = document.querySelector("container");
div.appendChild(newP);

var parent = div.parentNode;

// Insert newP before div
parent.insertBefore(newP, div);
```

## Modifying Elements
```javascript
var element = document.querySelector("#result");

element.classList.remove("wrong");
element.classList.add("correct", "txt-lg");
element.classList.toggle("correct");
element.classList.contains("foo");
```

# Events
```javascript
var element = document.querySelectorAll(".button");

element.onClick = function() {
	console.log("clicked");
};

var logEventType = function(e) {
	console.log("event type: ", e.type);
}
element.addEventListener("focus", logEventType, false);
element.removeEventListener("focus", logEventType, false);
```