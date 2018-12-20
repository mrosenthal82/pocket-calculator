let val;
let digitCount=0;

function setup(){
  let display = document.getElementById("display");
  val = "0";
  digitCount=0;
  display.innerHTML = val;
}

function one() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="1";
  } else {
    val +="1";
  }
  display.innerHTML = val;
  digitCount++;
}

function two() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="2";
  } else {
    val +="2";
  }
  display.innerHTML = val;
  digitCount++;
}

function three() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="3";
  } else {
    val+="3";
  }
  display.innerHTML = val;
  digitCount++;
}

function four() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="4";
  } else {
    val +="4";
  }
  display.innerHTML = val;
  digitCount++;
}

function five() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="5";
  } else {
    val +="5";
  }
  display.innerHTML = val;
  digitCount++;
}

function six() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="6";
  } else {
    val +="6";
  }
  display.innerHTML = val;
  digitCount++;
}

function seven() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="7";
  } else {
    val +="7";
  }
  display.innerHTML = val;
  digitCount++;
}

function eight() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="8";
  } else {
    val +="8";
  }
  display.innerHTML = val;
  digitCount++;
}

function nine() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="9";
  } else {
    val +="9";
  }
  display.innerHTML = val;
  digitCount++;
}

function zero() {
  let display = document.getElementById("display");
  if (digitCount==0){
    val="0";
  } else {
    val +="0";
  }
  display.innerHTML = val;
  digitCount++;
}
