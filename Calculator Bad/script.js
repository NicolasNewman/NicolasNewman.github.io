var operation = "";
var operationPressed = false;
var numOne = "";
var numTwo = "";
var output = "";
var buttonId = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9", "btn0", "btnDecimal"];
var buttonValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

var buttonOperation = ["btnAdd", "btnSubtract", "btnDivide", "btnMulty"]
var operationSym = ["+", "-", "/", "*"]

function buttonPressed(id) {
	for(var x = 0; x < buttonOperation.length; x++) {
		if(buttonOperation[x] == id) {
			operation = operationSym[x];
			operationPressed = true;
			output = operation;
			break;
		}
	}
	
	if(operationPressed == false) {
		for(var x = 0; x < buttonId.length; x++) { 
			if(buttonId[x] == id) {
				numOne = numOne + buttonValue[x];
				output = numOne;
				break;
			}
		}
	}else{
		for(var x = 0; x < buttonId.length; x++) { 
			if(buttonId[x] == id) {
				numTwo = numTwo + buttonValue[x];
				output = numTwo;
				break;
			}
		}
	}
	
	if(id == "btnClear") {
		numOne = "";
		numTwo = "";
		operation = "";
		output = "";
	}
	
	if(id == "btnEqual") {
		if(operation == "+") {
			output = parseFloat(numOne) + parseFloat(numTwo);
		}
		else if(operation == "-") {
			output = parseFloat(numOne) - parseFloat(numTwo);
		}
		else if(operation == "/") {
			output = parseFloat(numOne) / parseFloat(numTwo);
		}
		else if(operation == "*") {
			output = parseFloat(numOne) * parseFloat(numTwo);
		}
		numOne = "";
		numTwo = "";
		operation = "";
		operationPressed = false;
	}
	
	document.getElementById("output").value = output;
	output = "";
		
}

function numOneFill(id) {
	for(var x = 0; x < buttonId.length; x++) {
		if(buttonId[x] == id) {
			numOne = numOne + buttonValue[x];
			break;
		}
	}
}

function operatorFill(id) {
	alert("Operation");
}

function numTwoFill(id) {
	for(var x = 0; x < buttonId.length; x++) {
		if(buttonId[x] === id) {
			alert(buttonValue[x]);
		}
	}
}