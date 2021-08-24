console.log("Hello world");

// Data types
// String, Number, Boolean, null, undefined , symbol, arrays, object
// Primitive type
// String, Number, Boolean, null, undefined , symbol,
// Compositive type
// arrays, object

// String
var string = "This is a string";
console.log(string);

// Number
var number = 1000;
var number1 = 1000.2323;
console.log(number, number1);

// Boolean
var sayYes = true;
var sayNo = false;
console.log(sayYes, sayNo);

// Undefined
var jeremy;

// Null
var lucian = null;

// Symbol
let sym = Symbol();

console.log(jeremy);

console.log(lucian);
console.log(sym);

// Compositive
var arrays = [
  "Lucian",
  "Jeremy",
  23,
  1002,
  null,
  undefined,
  Symbol(),
  ["Hello world"],
];
console.log(arrays);

// Objects
var object = {
  key: "value",
  lucian: "gold",
  jeremy: 1002,
};
console.log(object);

var x = "S";
var y = "👾";
// var function = "sds"
console.log(x.length);
console.log(y.length);

// Conditionals
// if else
var mails = 2;
if (mails > 3) {
  console.log("Mails more than 3 has been received");
} else {
  console.log("Less than 3");
}

var mangos = 5;
var apples = 3;
// && ||

if (mangos < 6 && apples > 5) {
  console.log("If condition are met?");
}

if (mangos < 6 || apples > 5) {
  console.log("If condition are met using OR ?");
}
if (mangos < 10 && apples > 2) {
  console.log("Both of the condition are met. ");
}
if (mangos < 10) {
  if (apples > 2) {
    console.log("condition are met");
  }
}

if (mangos < 5) {
  console.log("mangos less than 5");
} else if (mangos > 5) {
  console.log("mangos are more than 5");
} else if (mangos === 5) {
  console.log("mangos equal to 5");
} else {
  console.log("This will execute if both of the conditon are not met");
}

// Switch statements
var color = "";

switch (color) {
  case "blue":
    console.log("This is code blue");
    break;
  case "red":
    console.log("This is code red");
    break;
  default:
    console.log("if all the cases are not met");
}
mangos = 5;
switch (true) {
  case mangos < 5:
    console.log("true");
    break;
  case mangos === 5:
    console.log("5");
    break;
  default:
    console.log("default case");
}

// 0 = sunday, 1 = monday , 2=tuesday ......6 = saturday
console.log(new Date().getDay());
