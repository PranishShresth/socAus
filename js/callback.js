function abc() {
  let x = "abc";
  return function cde() {
    let y = "cde";
    return function fgh() {
      console.log("hello world", x, y);
    };
  };
}

let a = abc();
let b = a();
let c = b();
console.log(c);

// console.log(abc()()());

function hello() {
  let a = 1;
  {
    a = 2;
    {
      let a = 3;
    }
  }
  console.log(a);
}
hello();

function anotherFunction() {
  console.log("another one");
}
function onClick(event, fn) {
  if (event === "click") {
    fn(anotherFunction);
  } else {
    console.log("cannot be executed");
  }
}

function handleHamburger(fn1) {
  console.log("handleburger");
  fn1();
}

onClick("click", handleHamburger);
// console.log(abc());
