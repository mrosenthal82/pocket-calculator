let val = 0;
let valOne;
let valTwo;
let pointCount=0;
let operation;
let notDecimal = true;
let decimalDigits=0;
let prevKeyType = ""; /*d for digit, o for operation, e for equals*/

function setup(){
  operation="";
  resetVal();
  show();
}

function resetVal(){
  val = 0;
  pointCount=0;
  decimalDigits=0;
  notDecimal=true;
}

function point(){
  if (pointCount==0){
    notDecimal=false;
    show();
    display.innerHTML+=".0";
  }
  pointCount++;
}

function negative(){
  val=0-val;
  show();
}

function percent(){
  val=val/100;
  show();
}

function show(){
  let display = document.getElementById("display");
  display.innerHTML = val;
  let valString = val.toString();

  //commas
  // var valArray = [];
  // var valCopy = val;
  // for (let i = 0; i<valString.length; i++){
  //   let expo = valString.length-i;
  //   valArray[i] = Math.floor(valCopy*10/Math.pow(10, expo));
  //   valCopy = Math.floor(valCopy % Math.pow(10, expo-1));
  // }
  // if (valString.length>=4 && valString.length<7){
  //   valArray.splice(valString.length-3, 0, ",");
  // } else if (valString.length>=7){
  //   valArray.splice(valString.length-3, 0, ",");
  //   valArray.splice(valString.length-6, 0, ",");
  // }
  // display.innerHTML = valArray.join("");

  //scientific notation
  if (valString.length > 9){
    display.innerHTML = Number.parseFloat(val).toExponential();
  }

  if (pointCount > 1){
    display.innerHTML ="ERROR";
  } else if (operation === '/' && valTwo === 0){
    display.innerHTML ="ERROR";
  }
}

function combinedValue(newDigit) {
  if (prevKeyType==="e"){
    resetVal();
  }
  if (notDecimal){
    val=val*10+newDigit;
  } else {
    decimalDigits++;
    console.log("1", val);
    let temp = newDigit/Math.pow(10, decimalDigits);
    console.log("temp", temp);
    val += temp;
    val = Number(val.toFixed(decimalDigits + 1));
  }
  show();
  prevKeyType="d";
}

function useOperation(op){
  operation = op;
  if (prevKeyType==="d" || prevKeyType==="e"){
    valOne = val;
    resetVal();
  }
  display.innerHTML=op;
  prevKeyType="o";
}

function equals() {
  valTwo = val;
  if (operation === '+'){
    val = valOne + valTwo;
  }
  if (operation === '-'){
    val = valOne - valTwo;
  }
  if (operation === '*'){
    val = valOne * valTwo;
  }
  if (operation === '/'){
    val = valOne / valTwo;
  }
  show();
  prevKeyType="e";
}

// What Do I Need to Fix?
// - sequencing operations and order of operations
// - commas (with decimals)
// - nice-to-haves
// - CSS
