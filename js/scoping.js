function abc() {
  var hello = 12;
}
// console.log(hello);

{
  var jeremy = 1002;
  var jeremy = 2001;
}
console.log(jeremy);

//
{
  let number = 20;
  number = 21;
  console.log(number);
}

// var is function scoped;
// let is block scoped, we cannot re declare it

function def() {
  let number = 20;
}

{
  const TAX_RATE = 10.2;
}
