let val = 0;
let valStorage = [];
let pointCount = 0;
let operation = [];
let notDecimal = true;
let decimalDigits = 0;
let prevKeyType = "d"; /*d for digit, o for operation, e for equals, p for point*/
let isPositive = true;
let isFirstDecimal = 0;
let lastIsZero = 0;
let index = 0;
let opIndex = 0;
let error;

function setup(){
  resetVal();
  resetArrays();
  error = false;
  show();
}

function resetVal(){
  val = 0;
  pointCount = 0;
  decimalDigits = 0;
  notDecimal = true;
  isPositive = true;
  isFirstDecimal = false;
}

function resetArrays(){
  valStorage = [];
  index = 0;
  operation = [];
  opIndex = 0;
}

function point(){
  pointCount++;
  if (pointCount === 1){
    notDecimal = false;
    isFirstDecimal = true;
  }
  show();
  prevKeyType = "p";
}

function negative(){
  val = 0 - val;
  isPositive = !isPositive;
  show();
}

function percent(){
  val = val / 100;
  decimalDigits += 2;
  show();
}

function show(){
  let display = document.getElementById("display");
  display.innerHTML = val;
  let valCopy = val;
  if (!isPositive){
    valCopy = 0 - val;
  }
  let valLength = valCopy.toString().length;
  //commas
  var valArray = [];
  let three = valLength - 3;
  let six = valLength - 6;
  let change = 0;
  if (decimalDigits > 0){
    change -= decimalDigits + 1;
    if (lastIsZero > 0){
      change += lastIsZero;
      if (val % 1 == 0){
        change++;
      }
    }
  }
  valLength += change;
  three += change;
  six += change;
  for (var i = 0; i < valLength; i++){ /*converting to array*/
    let expo = valLength - i;
    valArray[i] = Math.floor(valCopy*10 / Math.pow(10, expo));
    valCopy = (valCopy % Math.pow(10, expo-1)).toFixed(decimalDigits);
  }
  if (decimalDigits > 0){ /*adding decimals to the array*/
    valArray[i] = ".";
    i++;
    for (let j = 0; j < decimalDigits; j++){
      valArray[i] = Math.floor(valCopy*10);
      i++;
      valCopy = ((valCopy*10) % 1).toFixed(decimalDigits);
    }
  }
  if (valLength >= 4 && valLength < 7){ /*splicing in the commas*/
    valArray.splice(three, 0, ",");
  } else if (valLength >= 7){
    valArray.splice(three, 0, ",");
    valArray.splice(six, 0, ",");
  }
  display.innerHTML = valArray.join("");
  if (!isPositive){
    display.innerHTML = "-" + valArray.join("");
  }
  //scientific notation
  if (valLength + decimalDigits > 9){
    display.innerHTML = Number.parseFloat(val).toExponential();
  }
  //decimals
  if (pointCount === 1 && isFirstDecimal){
    display.innerHTML = valArray.join("") + ".0";
    isFirstDecimal = false;
  }
}

function combinedValue(newDigit) {
  if (prevKeyType === "e"){
    resetVal();
    resetArrays();
    error = false;
  }
  if (notDecimal && isPositive){
    val = val*10 + newDigit;
  } else if (notDecimal && !isPositive){
    val = val*10 - newDigit;
  } else if (!notDecimal && isPositive){
    decimalDigits++;
    val += newDigit / Math.pow(10, decimalDigits);
    val = Number(val.toFixed(decimalDigits + 1));
  } else if (!notDecimal && !isPositive){
    decimalDigits++;
    val -= newDigit / Math.pow(10, decimalDigits);
    val = Number(val.toFixed(decimalDigits + 1));
  }
  if (newDigit == 0 && !notDecimal){
    lastIsZero++;
  } else {
    lastIsZero = 0;
  }
  show();
  prevKeyType = "d";
}

function useOperation(op){
  if (prevKeyType === "d"){
    valStorage[index] = Number(val);
    index++;
  } else if (prevKeyType === "e"){
    resetArrays();
    valStorage[index] = Number(val);
    index++;
  } else if (prevKeyType === "o"){
    opIndex--;
  }
  operation[opIndex] = op;
  resetVal();
  display.innerHTML = op;
  prevKeyType = "o";
  opIndex++;
}

function equals() {
  valStorage[index] = val;
  while (operation.indexOf("*") != -1){
    let z = operation.indexOf("*");
    valStorage[z] = Number(valStorage[z]) * Number(valStorage[z+1]);
    valStorage.splice(z+1, 1);
    operation.splice(z, 1);
  }
  while (operation.indexOf("/") != -1){
    let z = operation.indexOf("/");
    valStorage[z] = Number(valStorage[z]) / Number(valStorage[z+1]);
    if (valStorage[z+1] == 0){
      error = true;
    }
    valStorage.splice(z+1, 1);
    operation.splice(z, 1);
  }
  while (operation.indexOf("+") != -1){
    let z = operation.indexOf("+");
    valStorage[z] = Number(valStorage[z]) + Number(valStorage[z+1]);
    valStorage.splice(z+1, 1);
    operation.splice(z, 1);
  }
  while (operation.indexOf("-") != -1){
    let z = operation.indexOf("-");
    valStorage[z] = Number(valStorage[z]) - Number(valStorage[z+1]);
    valStorage.splice(z+1, 1);
    operation.splice(z, 1);
  }
  val = Number(valStorage[0]);
  decimalDigits = 8;
  for (let i = decimalDigits; i >= 0; i--){
    if (Number(val.toFixed(i)) == Number(val.toFixed(decimalDigits))) {
      decimalDigits = i;
    }
  }
  val = val.toFixed(decimalDigits);
  if (val < 0){
    isPositive = false;
  } else if (val >= 0){
    isPositive = true;
  }
  show();
  if (error){
    display.innerHTML = "ERROR";
  }
  prevKeyType = "e";
  index--;
  opIndex--;
}
