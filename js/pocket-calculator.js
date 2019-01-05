
let val = 0;
let valOne;
let valTwo;
let pointCount=0;
let operation;
let newDigit;
let notDecimal = true;
let decimalDigits=0;

function setup(){
  val=0;
  pointCount=0;
  operation="";
  show();
  notDecimal=true;
  decimalDigits=0;
}

function show(){
  let display = document.getElementById("display");
  display.innerHTML = val;
}

function combinedValue(newDigit) {
  // let decimalDigits = 0;
  if (notDecimal){
    val=val*10+newDigit;
  } else {
    decimalDigits++;
    val+=newDigit/Math.pow(10, decimalDigits);
  }
  show();
}

function point() {
  if (pointCount==0){
    notDecimal=false;
    show();
    display.innerHTML+=".";
  } else {
    val="ERROR";
    show();
  }
  pointCount++;
}

function useOperation(op){
  operation = op;
  valOne = val;
  val = 0;
  pointCount=0;
  display.innerHTML=op;
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
