let val = 0;
let valOne;
let valTwo;
let pointCount=0;
let operation;
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
    alert(val);
    alert(newDigit/Math.pow(10, decimalDigits));
    alert(val+newDigit/Math.pow(10, decimalDigits));
    val+=newDigit/Math.pow(10, decimalDigits);
  }
  show();
}

function point() {
  if (pointCount==0){
    notDecimal=false;
    show();
    display.innerHTML+=".0";
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
  valTwo = val;
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
  resetVal();
}

function negative(){
  val=0-val;
  show();
}
function percent(){
  val=val/100;
  show();
}

// What Do I Need to Fix?
//
// - whatever's happening with the decimals
// - getting keepVal to be applicable
// - formatting digits on the display
// - error messages for things like equals
// - sequencing operations
// - nice-to-haves
// - CSS
