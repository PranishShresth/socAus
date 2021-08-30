// reduce,some,every,find

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, curr) => {
  //  1 + 2 = 3
  //   acc = 3, curr =3 = 3+3 =6
  // acc =6,curr=4 6+4 = 10
  //acc = 10 ,curr =5 = 15
  //   console.log(acc);
  return acc + curr;
}, 0);

const person = [
  { name: "jeremy", age: 27 },
  { name: "jeremy", age: 20 },
  { name: "viqaas", age: 20 },
  { name: "pranish", age: 22 },
];

const age = person.reduce((ages, human) => {
  return ages + human.age;
}, 0);
console.log(age);

// every

const strings = ["Jeremy", "Viqaas", "Pranish", "Luke", "Lucian", 23];

const isString1 = strings.every((personName) => {
  return typeof personName === "string";
});

const isString2 = strings.some((personName) => {
  return typeof personName === "number";
});
console.log(isString1, "every");
console.log(isString2, "some");

function isString(strings) {
  for (let i = 0; i < strings.length; i++) {
    if (typeof strings[i] !== "string") {
      return false;
    }
  }
  return true;
}

console.log(isString(strings));

const movie = ["dory", "nemo", "marlan", "nemo", "bruce"];

const findingNemo = movie.find((character) => {
  return character === "nemo";
});

const findingNemoPosition = movie.findIndex((character) => {
  return character === "nemo";
});
console.log(findingNemo);
console.log(findingNemoPosition);

function map(cb, arr) {
  const arry = [];
  for (let i = 0; i < arr.length; i++) {
    arry.push(cb(arr[i], i, arr));
    console.log("hello");
  }
  return arry;
}
const hi = map((ele) => {
  return "hi" + ele;
}, movie);
console.log(hi);
