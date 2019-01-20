let val = 0;
let valOne;
let valTwo;
let pointCount=0;
let operation;
let notDecimal = true;
let decimalDigits=0;
let prevKeyType = ""; /*d for digit, o for operation, e for equals*/
let isPositive = true;
let isFirstDecimal = 0;

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
  isPositive=true;
  isFirstDecimal = false;
}

function point(){
  pointCount++;
  if (pointCount===1){
    notDecimal=false;
    isFirstDecimal = true;
  }
  show();
}

function negative(){
  val=0-val;
  isPositive = false;
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
  let valLength = valString.length;
  //commas
  var valArray = [];
  var valCopy = val;
  let three = valLength-3;
  let six = valLength-6;
  if (decimalDigits>0){
    valLength -= decimalDigits+1;
    three -= decimalDigits+1;
    six -= decimalDigits+1;
  }
  for (var i = 0; i<valLength; i++){ /*converting to array*/
    let expo = valLength-i;
    valArray[i] = Math.floor(valCopy*10/Math.pow(10, expo));
    valCopy = (valCopy % Math.pow(10, expo-1)).toFixed(decimalDigits);
  }
  if (decimalDigits>0){ /*adding decimals to the array*/
    valArray[i]=".";
    i++;
    for (let j = 0; j<decimalDigits; j++){
      valArray[i] = Math.floor(valCopy*10);
      i++;
      valCopy = ((valCopy*10) % 1).toFixed(decimalDigits);
    }
  }
  if (valLength>=4 && valLength<7){ /*splicing in the commas*/
    valArray.splice(three, 0, ",");
  } else if (valLength>=7){
    valArray.splice(three, 0, ",");
    valArray.splice(six, 0, ",");
  }
  display.innerHTML = valArray.join("");

  //scientific notation
  if (valString.length > 9){
    display.innerHTML = Number.parseFloat(val).toExponential();
  }

  //decimals
  if (pointCount===1 && isFirstDecimal){
    display.innerHTML = valArray.join("") + ".0";
    isFirstDecimal = false;
  }
  else if (pointCount > 1 /*|| !isFirstDecimal*/){
    display.innerHTML = val;
  }

  if (operation === '/' && valTwo === 0){
    display.innerHTML ="ERROR";
  }
}

function combinedValue(newDigit) {
  if (prevKeyType==="e"){
    resetVal();
  }
  if (notDecimal && isPositive){
    val=val*10+newDigit;
  } else if (notDecimal && !isPositive){
    val=val*10-newDigit;
  } else if (!notDecimal && isPositive){
    decimalDigits++;
    val += newDigit/Math.pow(10, decimalDigits);
    val = Number(val.toFixed(decimalDigits + 1));
  } else if (!notDecimal && !isPositive){
    decimalDigits++;
    val -= newDigit/Math.pow(10, decimalDigits);
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
// - sequencing and order of operations
// - commas (with decimals)
// - nice-to-haves
// - CSS
