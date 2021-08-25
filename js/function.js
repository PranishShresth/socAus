function doSomething() {
  console.log("does something");
}

doSomething();

// Input ---- function ----- Output

function sum(a, b) {
  return a + b;
}
console.log(sum(100, 200));
console.log(sum(123, " Jeremy"));

function sumUntil(num) {
  var sum = 0;
  for (let i = 1; i <= num; i++) {
    // console.log(i);
    sum += i;
  }
  return sum;
}

console.log(sumUntil(20));
console.log(sumUntil(100));
console.log(sumUntil(1000));
console.log(sumUntil(500));

let fn = function () {
  console.log("Hello world");
};

fn();

let fn1 = (function fn2() {
  console.log("hellow");
})(
  // IIFE (Imediately invoked function expression)

  function () {
    console.log("hi from IIFE");
  }
)();
