var LENGTH = 65534;
var cell = [0];
var pointer = 0;
var code = "";
var output = "";
var bPlace = 0;

function help() {
	var win = window.open('https://learnxinyminutes.com/docs/brainfuck/', '_blank');
	if (win) {
		win.focus();
	} else {
		alert('Please allow popups for this website');
	}
}

function example() {
	document.getElementById('input').value = "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.";
}
function run() {
	console.clear();
	pointer = 0;
	output = "";
	for(var x = 0; x < code.length; x++) {
		cell[x] = 0;
	}
	code = document.getElementById('input').value; 
	bPlace = 0;
	for(var x = 0; x < code.length; x++) {
		if(code.charAt(x) === "+") {
			cell[pointer]++;
		}
		if(code.charAt(x) === "-") {
			cell[pointer]--;
		}
		if(code.charAt(x) === ".") {
			output = output + String.fromCharCode(cell[pointer]);
			console.log("Setting letter to: " + String.fromCharCode(cell[pointer]))
		}
		if(code.charAt(x) === ",") {
			
		}
		if(code.charAt(x) === ">") {
			console.log("Pointer: " + pointer)
			console.log("-------------------")
			pointer++;
			cell.push(0);
		}
		if(code.charAt(x) === "<") {
			if(pointer != 0) {
				console.log("Pointer: " + pointer)
				console.log("-------------------")
				pointer--;
			}
		}
		if(code.charAt(x) === "[") {
			if(cell[pointer] == 0) {
				x++;
				while(bPlace > 0 || code.charAt(x) != ']') {
					if(code.charAt(x) === '[') {
						bPlace++;
					}
					if(code.charAt(x) === ']') {
						bPlace--;
					}
					x++;
				}
			}
		}
		if(code.charAt(x) === "]") {
			if(cell[pointer] !== 0) {
				x--;
				while(bPlace > 0 || code.charAt(x) != '[') {
					if(code.charAt(x) === ']') {
						bPlace++;
					}
					if(code.charAt(x) === '[') {
						bPlace--;
					}
					x--;
				}
				x--;
			}
		}
		console.log("Cell Value: " + cell[pointer])
	}
	document.getElementById('output').value = output; 
	console.log("Output: " + output)
}