
let val = 0;
let valOne;
let valTwo;
let pointCount=0;
let operation;
let newDigit;

function setup(){
  let display = document.getElementById("display");
  val = 0;
  pointCount=0;
  operation="";
  display.innerHTML = val;
}

function one(){
  combinedValue(1);
}
function two(){
  combinedValue(2);
}
function three(){
  combinedValue(3);
}
function four(){
  combinedValue(4);
}
function five(){
  combinedValue(5);
}
function six(){
  combinedValue(6);
}
function seven(){
  combinedValue(7);
}
function eight(){
  combinedValue(8);
}
function nine(){
  combinedValue(9);
}
function zero(){
  combinedValue(0);
}

function combinedValue(newDigit) {
  let display = document.getElementById("display");
  val=val*10+newDigit;
  display.innerHTML = val;
}

function point() {
  if (pointCount==0){
    if (digitCount==0){
      val=".";
    } else {
      val +=".";
    }
  } else {
    val="ERROR";
  }
  display.innerHTML = val;
  digitCount++;
  pointCount++;
}

// function add(){
//   valOne = val;
//   operation = "+";
//   val = 0;
//   display.innerHTML=operation;
// }

function add(){
  useOperation("+");
}
function subtract(){
  useOperation("-");
}
function multiply(){
  useOperation("*");
}
function divide(){
  useOperation("/");
}

function useOperation(op){
  operation = op;
  valOne = val;
  val = 0;
  display.innerHTML=operation;
}

function equals() {
  valTwo = val;
  let final;
  if (operation == '+'){
    final = valOne + valTwo;
  }
  if (operation == '-'){
    final = valOne - valTwo;
  }
  if (operation == '*'){
    final = valOne * valTwo;
  }
  if (operation == '/'){
    final = valOne / valTwo;
  }
  display.innerHTML = final;
  val = final;
}
