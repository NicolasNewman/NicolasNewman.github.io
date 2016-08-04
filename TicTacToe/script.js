var turns = 0;
var buttons = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3", "r3c1", "r3c2", "r3c3",];
var edge = ["r1c2", "r2c3", "r3c2", "r2c1"];
var corner = ["r1c1", "r1c3", "r3c3", "r3c1"]

var rowOne = ["r1c1", "r1c2", "r1c3"];
var rowTwo = ["r2c1", "r2c2", "r2c3"];
var rowThree = ["r3c1", "r3c2", "r3c3"];

var columnOne = ["r1c1", "r2c1", "r3c1"];
var columnTwo = ["r1c2", "r2c2", "r3c2"];
var columnThree = ["r1c3", "r2c3", "r3c3"];

var diagonalUtD = ["r1c1", "r2c2", "r3c3"];
var diagonalDtU = ["r3c1", "r2c2", "r1c3"];

var hasBlocked = false;
var noIntelMoves = false;
var tieCount = 0;

function buttonPressed(id) {
	if(document.getElementById(id).value==".") {
			document.getElementById(id).value="X";
			computerCheckWin();
			computerTurn();
			detectWin();
	}
}

function computerTurn() {
	//Detect Blocks

	//Columns
	if(hasBlocked == false) {
		for(var x = 0; x < columnTwo.length; x++) {
			if(document.getElementById(columnOne[x]).value == "X" && document.getElementById(columnTwo[x]).value == "X" && document.getElementById(columnThree[x]).value == ".") {
				document.getElementById(columnThree[x]).value = "O";
				console.log("Attempted to replace: " + columnThree[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
			if(document.getElementById(columnThree[x]).value == "X" && document.getElementById(columnTwo[x]).value == "X" && document.getElementById(columnOne[x]).value == ".") {
				document.getElementById(columnOne[x]).value = "O";
				console.log("Attempted to replace: " + columnOne[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Columns: " + noIntelMoves)
	
	//Middle Rows
	if(hasBlocked == false) {
		for(var x = 0; x < rowTwo.length; x++) {
			if(document.getElementById(rowOne[x]).value == "X" && document.getElementById(rowThree[x]).value == "X" && document.getElementById(rowTwo[x]).value == ".") {
				document.getElementById(rowTwo[x]).value = "O";
				console.log("Attempted to replace: " + rowTwo[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Middle Row: " + noIntelMoves)
	
	//Middle Columns
	if(hasBlocked == false) {
		for(var x = 0; x < columnTwo.length; x++) {
			if(document.getElementById(columnOne[x]).value == "X" && document.getElementById(columnThree[x]).value == "X" && document.getElementById(columnTwo[x]).value == ".") {
				document.getElementById(columnTwo[x]).value = "O";
				console.log("Attempted to replace: " + columnTwo[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Middle Columns: " + noIntelMoves)
	
	//Rows
	if(hasBlocked == false) {
		for(var x = 0; x < rowTwo.length; x++) {
			if(document.getElementById(rowOne[x]).value == "X" && document.getElementById(rowTwo[x]).value == "X" && document.getElementById(rowThree[x]).value == ".") {
				document.getElementById(rowThree[x]).value = "O";
				console.log("Attempted to replace: " + rowThree[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
			if(document.getElementById(rowThree[x]).value == "X" && document.getElementById(rowTwo[x]).value == "X" && document.getElementById(rowOne[x]).value == ".") {
				document.getElementById(rowOne[x]).value = "O";
				console.log("Attempted to replace: " + rowOne[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Rows: " + noIntelMoves)
	
	//Diagonal
	if(hasBlocked == false) {
		if(document.getElementById(diagonalUtD[0]).value == "X" && document.getElementById(diagonalUtD[1]).value == "X" && document.getElementById(diagonalUtD[2]).value == ".") {
				document.getElementById(diagonalUtD[2]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
		if(document.getElementById(diagonalUtD[2]).value == "X" && document.getElementById(diagonalUtD[1]).value == "X" && document.getElementById(diagonalUtD[0]).value == ".") {
				document.getElementById(diagonalUtD[0]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
		if(document.getElementById(diagonalDtU[0]).value == "X" && document.getElementById(diagonalDtU[1]).value == "X" && document.getElementById(diagonalDtU[2]).value == ".") {
				document.getElementById(diagonalDtU[2]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
		if(document.getElementById(diagonalDtU[2]).value == "X" && document.getElementById(diagonalDtU[1]).value == "X" && document.getElementById(diagonalDtU[0]).value == ".") {
				document.getElementById(diagonalDtU[0]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
	}
	console.log("After Diagonal: " + noIntelMoves)
	
	//Detects where to go first
	
	//If the opponent starts in the center
	if(document.getElementById("r2c2").value == "X" && turns == 0 && hasBlocked == false) {
		document.getElementById("r3c1").value="O";
		hasBlocked = true;
		noIntelMoves = true;
	}
	console.log("After Mid Start: " + noIntelMoves)
	
	//If opponent starts in corner
	if(hasBlocked == false && turns == 0) {
		for(var x = 0; x < corner.length; x++) {
			if(document.getElementById(corner[x]).value == "X" & turns == 0) {
				document.getElementById("r2c2").value="O";
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Corner Start: " + noIntelMoves)
	
	//If the opponent starts on a edge
	if(hasBlocked == false && turns == 0) {
		for(var x = 0; x < edge.length; x++) {
			if(document.getElementById(edge[x]).value == "X" & turns == 0) {
				document.getElementById(corner[x]).value="O";
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Edge Start: " + noIntelMoves)
	
	//if there is nothing important to do
	if(noIntelMoves == false) {
		for(var x = 0; x < buttons.length; x++) {
			if(document.getElementById(buttons[x]).value == ".") {
				document.getElementById(buttons[x]).value="O";
				hasBlocked = true;
				break;
			}
		}
	}
	turns++;
	console.log("--------------------------------")
	
}	

function detectWin() {
	//Rows and Columns
	tieCount = 0;
	for(var x = 0; x < rowOne.length; x++) {
		if(document.getElementById(rowOne[x]).value == "O" && document.getElementById(rowTwo[x]).value == "O" && document.getElementById(rowThree[x]).value == "O") {
			alert("O Wins")
			console.log("O Wins")
		}
		if(document.getElementById(columnOne[x]).value == "O" && document.getElementById(columnTwo[x]).value == "O" && document.getElementById(columnThree[x]).value == "O") {
			alert("O Wins")
			console.log("O Wins")
		}
	}
	if(document.getElementById(diagonalUtD[0]).value == "O" && document.getElementById(diagonalUtD[1]).value == "O" && document.getElementById(diagonalUtD[2]).value == "O") {
		alert("O Wins")
		console.log("O Wins")
	}
	if(document.getElementById(diagonalDtU[0]).value == "O" && document.getElementById(diagonalDtU[1]).value == "O" && document.getElementById(diagonalDtU[2]).value == "O") {
		alert("O Wins")
		console.log("O Wins")
	}
	for(var x = 0; x < buttons.length; x++) {
		if(document.getElementById(buttons[x]).value !== ".") {
			tieCount ++;
		}
	}
	console.log("Tie Count: " + tieCount)
	if(tieCount == 9) {
		alert("Game is a draw")
	}
}

function computerCheckWin() {
	hasBlocked = false;
	noIntelMoves = false;
	for(var x = 0; x < columnTwo.length; x++) {
		if(document.getElementById(columnOne[x]).value == "O" && document.getElementById(columnTwo[x]).value == "O" && document.getElementById(columnThree[x]).value == ".") {
			document.getElementById(columnThree[x]).value = "O";
			console.log("Attempted to replace: " + columnThree[x])
			hasBlocked = true;
			noIntelMoves = true;
			break;
		}
		if(document.getElementById(columnThree[x]).value == "O" && document.getElementById(columnTwo[x]).value == "O" && document.getElementById(columnOne[x]).value == ".") {
			document.getElementById(columnOne[x]).value = "O";
			console.log("Attempted to replace: " + columnOne[x])
			hasBlocked = true;
			noIntelMoves = true;
			break;
		}
	}
	console.log("After Columns: " + noIntelMoves)
	
	//Middle Rows
	if(hasBlocked == false) {
		for(var x = 0; x < rowTwo.length; x++) {
			if(document.getElementById(rowOne[x]).value == "O" && document.getElementById(rowThree[x]).value == "O" && document.getElementById(rowTwo[x]).value == ".") {
				document.getElementById(rowTwo[x]).value = "O";
				console.log("Attempted to replace: " + rowTwo[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Middle Row: " + noIntelMoves)
	
	//Middle Columns
	if(hasBlocked == false) {
		for(var x = 0; x < columnTwo.length; x++) {
			if(document.getElementById(columnOne[x]).value == "O" && document.getElementById(columnThree[x]).value == "O" && document.getElementById(columnTwo[x]).value == ".") {
				document.getElementById(columnTwo[x]).value = "O";
				console.log("Attempted to replace: " + columnTwo[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Middle Columns: " + noIntelMoves)
	
	//Rows
	if(hasBlocked == false) {
		for(var x = 0; x < rowTwo.length; x++) {
			if(document.getElementById(rowOne[x]).value == "O" && document.getElementById(rowTwo[x]).value == "O" && document.getElementById(rowThree[x]).value == ".") {
				document.getElementById(rowThree[x]).value = "O";
				console.log("Attempted to replace: " + rowThree[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
			if(document.getElementById(rowThree[x]).value == "O" && document.getElementById(rowTwo[x]).value == "O" && document.getElementById(rowOne[x]).value == ".") {
				document.getElementById(rowOne[x]).value = "O";
				console.log("Attempted to replace: " + rowOne[x])
				hasBlocked = true;
				noIntelMoves = true;
				break;
			}
		}
	}
	console.log("After Rows: " + noIntelMoves)
	
	//Diagonal
	if(hasBlocked == false) {
		if(document.getElementById(diagonalUtD[0]).value == "O" && document.getElementById(diagonalUtD[1]).value == "O" && document.getElementById(diagonalUtD[2]).value == ".") {
				document.getElementById(diagonalUtD[2]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
		if(document.getElementById(diagonalUtD[2]).value == "O" && document.getElementById(diagonalUtD[1]).value == "O" && document.getElementById(diagonalUtD[0]).value == ".") {
				document.getElementById(diagonalUtD[0]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
		if(document.getElementById(diagonalDtU[0]).value == "O" && document.getElementById(diagonalDtU[1]).value == "O" && document.getElementById(diagonalDtU[2]).value == ".") {
				document.getElementById(diagonalDtU[2]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
		if(document.getElementById(diagonalDtU[2]).value == "O" && document.getElementById(diagonalDtU[1]).value == "O" && document.getElementById(diagonalDtU[0]).value == ".") {
				document.getElementById(diagonalDtU[0]).value = "O";
				hasBlocked = true;
				noIntelMoves = true;
		}
	}
	console.log("After Diagonal: " + noIntelMoves)
}

function btnRestart() {
	turns = 0;
	for(var x = 0; x < buttons.length; x++) {
		document.getElementById(buttons[x]).value=".";
	}
}
