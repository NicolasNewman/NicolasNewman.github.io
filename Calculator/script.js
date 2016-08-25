var equasion = "";
var answer = "";
var buttonsNum = ["btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];
var buttonsNum_value = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var buttonsOpp = ["btnPlus", "btnMinus", "btnMult", "btnDivide", "btnDecimal", "btnNegative", "btnPi", "btnE", "btnLeftB", "btnRightB"];
var buttonsOpp_value = ["+", "-", "*", "/", ".", "-", "3.14", "2.71", "(", ")"];
var trigButtons = ["btnSIN", "btnCOS", "btnTAN"];
var trigButtons_value = ["sin", "cos", "tan"];
var leftRightShow = false;
var simple_complex = false;

function numPressed(id) {
  for(var x = 0; x < buttonsNum.length; x++) {
    if(id == buttonsNum[x]) {
      equasion = equasion + buttonsNum_value[x];
      console.log(equasion);
      document.getElementById("input2").value = equasion;
      break;
    }
  }
}

function operatorPressed(id) {
  for(var x = 0; x < buttonsOpp.length; x++) {
    if(id == buttonsOpp[x]) {
      equasion = equasion + buttonsOpp_value[x];
      console.log(equasion);
      document.getElementById("input2").value = equasion;
      break;
    }
  }
}

function enterPressed() {
  var checkForManual = document.getElementById("input2").value;
  if(checkForManual == equasion) {
    answer = math.eval(equasion);
    document.getElementById("output2").value = answer;
  }else{
    equasion = document.getElementById("input2").value;
    answer = math.eval(equasion);
    document.getElementById("output2").value = answer;
  }
}

function clearPressed() {
  equasion = "";
  document.getElementById("input2").value = equasion;
}

function delPressed() {
  equasion = equasion.slice(0, equasion.length-1);
  document.getElementById("input2").value = equasion;
}

function sqrtPressed() {
  var highlight = getHighlightedText();
  if(highlight[0] == "") {
    document.getElementById("info").value = "Please highlight what you want to be squared before pressing sqrt";
  }else{
    var sqrtStart = "sqrt(";
    var sqrtEnd = ")";
    equasion = equasion.slice(0,highlight[1]) + sqrtStart + highlight[0] + sqrtEnd + equasion.slice(highlight[2], equasion.length);
    document.getElementById("input2").value = equasion;
  }
}

function powPressed() {
    var highlight = getHighlightedText();
  if(highlight[0] == "") {
    document.getElementById("info").value = "Please highlight what you want to be POW before pressing ^";
  }else{
    var power = prompt("Please enter the power", "");
    var powStart = "pow(";
    var powEnd = "," + power + ")";
    equasion = equasion.slice(0,highlight[1]) + powStart + highlight[0] + powEnd + equasion.slice(highlight[2], equasion.length);
    document.getElementById("input2").value = equasion;
  }
}

function trigPressed(id) {
  var highlight = getHighlightedText();
  if(highlight[0] == "") {
    document.getElementById("info").value = "Please highlight what you want to apply a trig function to";
  }else{
    var x;
    for(x = 0; x < trigButtons.length; x++) {
      if(trigButtons[x] == id) {
        break;
      }
    }
    var trigStart = "" + trigButtons_value[x] + "(";
    var trigEnd = ")";
    equasion = equasion.slice(0,highlight[1]) + trigStart + highlight[0]+ trigEnd + equasion.slice(highlight[2], equasion.length);
    document.getElementById("input2").value = equasion;
  }
}

function lnPressed() {
  var highlight = getHighlightedText();
  console.log("Selected text: " + highlight[0]);
  if(highlight[0] == "") {
    document.getElementById("info").value = "Please highlight what you want to apply the ln function to";
  }else{
    var lnStart = "log(";
    var lnEnd = ")";
    equasion = equasion.slice(0,highlight[1]) + lnStart + highlight[0] + lnEnd + equasion.slice(highlight[2], equasion.length);
    document.getElementById("input2").value = equasion;
  }
}

function logPressed() {
  var highlight = getHighlightedText();
  if(highlight[0] == "") {
    document.getElementById("info").value = "Please highlight what you want to apply the log function to";
  }else{
    var base = prompt("Please enter the base", "");
    var logStart = "log(";
    var logEnd = ")";
    equasion = equasion.slice(0,highlight[1]) + logStart + highlight[0] + "," + base + logEnd + equasion.slice(highlight[2], equasion.length);
    document.getElementById("input2").value = equasion;
  }
}

function absPressed() {
  var highlight = getHighlightedText();
  if(highlight[0] == "") {
    document.getElementById("info").value = "Please highlight what you want to apply the abs function to";
  }else{
    var absStart = "abs(";
    var absEnd = ")";
    equasion = equasion.slice(0,highlight[1]) + absStart + highlight[0] + absEnd + equasion.slice(highlight[2], equasion.length);
    document.getElementById("input2").value = equasion;
  }
}

function sigPressed() {
  var start = prompt("Please enter the starting number", "");
  var end = prompt("Please enter the final number", "");
  var sigEquasion = prompt("Please enter the equsion", "");
  sigmaCalc(start, end, sigEquasion);

}

function sigmaCalc(start, end, sigEquasion) {
  var answer = 0;
  for(var x = start; x <= end; x++) {
    sigEquasion = replaceAll(sigEquasion, "x", "0000" + x);
    answer = answer + math.eval(sigEquasion);
    sigEquasion = replaceAll(sigEquasion, "0000" + x, "x");
  }
  equasion = equasion + answer;
  document.getElementById("input2").value = equasion;

}

function intPressed() {
  var lower = prompt("Please enter the lower limit", "");
  var upper = prompt("Please enter the upper limit", "");
  var intEquasion = prompt("Please enter the equsion", "");
  intCalc(lower, upper, intEquasion, 2);
}

function intCalc(lower, upper, intEquasion, run) {
  var intAnswer = 0;
  for(var x = 0; x <= run; x++) {
    var fa = replaceAll(intEquasion, "x", lower);
    var fb = replaceAll(intEquasion, "x", upper);
    console.log("upper-lower: " + upper-lower + " fa+fb: " + fa+fb + " fa+fb/2: " + (fa+fb)/2);
    intAnswer = math.eval((upper-lower)*((fa + fb)/2));
    console.log(fa + " : " + fb + " : " + intAnswer);
  }
}

function showHide() {
  if(leftRightShow == false) {
    document.getElementById("all_button").style.display="flex";
    document.getElementById("all_button_simple").style.display="none";
    leftRightShow = true;
  }else{
    document.getElementById("all_button").style.display="none";
    document.getElementById("all_button_simple").style.display="flex";
    leftRightShow = false;
  }
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function getHighlightedText() {
  var txtarea = document.getElementById("input2");
  var start = txtarea.selectionStart;
  var finish = txtarea.selectionEnd;
  var selection = txtarea.value.substring(start, finish);
  return [selection, start, finish];
}
