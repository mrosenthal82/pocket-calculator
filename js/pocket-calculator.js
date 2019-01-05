
let val = 0;
let valOne;
let valTwo;
let pointCount=0;
let operation;
let newDigit;
let notDecimal = true;
let decimalDigits=0;
let keepVal=false;

function setup(){
  operation="";
  resetVal();
  show();
}

function show(){
  let display = document.getElementById("display");
  display.innerHTML = val;
}

function resetVal(){
  val = 0;
  pointCount=0;
  decimalDigits=0;
  notDecimal=true;
}

function combinedValue(newDigit) {
  // if (!keepVal){
  //   resetVal();
  // }
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
  resetVal();
  display.innerHTML=op;
}

function equals() {
  valTwo = valOne;
  valOne = val;
  if (operation == '+'){
    val = valOne + valTwo;
  }
  if (operation == '-'){
    val = valOne - valTwo;
  }
  if (operation == '*'){
    val = valOne * valTwo;
  }
  if (operation == '/'){
    val = valOne / valTwo;
  }
  show();
}
