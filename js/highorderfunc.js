// function doSomething(callback, a, b) {
//   return callback(a, b);
// }
// function addTwoNumbers(a, b) {
//   console.log("here is the callback");
//   return a + b;
// }

// console.log(doSomething(addTwoNumbers, 12, 12));

// Imperative programming

let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 2;
// }
// console.log(array);

// declarative programming
// map

const add = (a, b) => a + b;

const a = array.map((elem) => {
  if (elem % 2 === 0) {
    return elem * 2;
  }
  return elem - 1;
});
console.log(a);

const fruits = [
  "mandarins",
  "mangos",
  "apple",
  "pears",
  "watermelon",
  "grapes",
];

let index1 = -1;
const b = fruits.forEach(function (fruit, index) {
  console.log(fruit);
  //   return fruit;
  //   if (fruit === "mangos") {
  //     index1 = index;
  //   }
});
console.log(b);
console.log(index1);

const person = [
  { name: "jeremy", age: 27 },
  { name: "jeremy", age: 20 },
  { name: "viqaas", age: 20 },
  { name: "pranish", age: 22 },
];
const c = person.filter(function (human) {
  return human.age > 23;
});
console.log(c);
