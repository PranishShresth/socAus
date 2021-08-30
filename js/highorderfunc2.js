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
