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
  let valString = val.toString();

  //commas
    var valArray = [];
    var valCopy = val;
    for (let i = 0; i<valString.length; i++){
      let expo = valString.length-i;
      valArray[i] = Math.floor(valCopy*10/Math.pow(10, expo));
      valCopy = Math.floor(valCopy % Math.pow(10, expo-1));
      // valCopy -= valArray[i]*Math.pow(10,expo)*10;
    }
    if (valString.length>=4 && valString.length<7){
      valArray.splice(valString.length-3, 0, ",");
    } else if (valString.length>=7){
      valArray.splice(valString.length-3, 0, ",");
      valArray.splice(valString.length-6, 0, ",");
    }
    display.innerHTML = valArray.join("");

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
    console.log("1", val);
    let temp = newDigit/Math.pow(10, decimalDigits);
    console.log("temp", temp);
    val += temp;
    val = Number(val.toFixed(decimalDigits + 1));
  }
  show();
}

function point() {
  if (pointCount==0){
    notDecimal=false;
    show();
    display.innerHTML+=".0";
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
// - sequencing operations and order of operations
// - getting keepVal to be applicable
// - commas (with decimals)
// - nice-to-haves
// - CSS
