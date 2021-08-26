// Object is an collection of key value value

let fullName = "Full Name";
let person = {
  name: "Jeremy",
  age: 27,
  bootcamp: "The Hacking School",
  "hello world": 123,
  [fullName]: "Jeremy Moss",
  address: {
    postCode: 4000,
    streetAddress: "Something Street",
    fullAddress: ["dsd"],
  },
  fn: function () {
    console.log("hello world");
  },
};

// Dot notation

console.log(person.name);
console.log(person.age);
console.log(person.bootcamp);
console.log(person.address.postCode);
console.log(person.fn());
// Bracket notation

console.log(person["name"]);
console.log(person["age"]);
console.log(person["bootcamp"]);
console.log(person[fullName]);

// for in

for (let key in person) {
  console.log(key, person[key]);
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log("-----------------------------------");
for (let value of Object.values(person)) {
  console.log(value);
}
console.log("-----------------------------------");

for (let key of Object.keys(person)) {
  console.log(key);
}
console.log("-----------------------------------");

for (let properties of Object.entries(person)) {
  //   console.log(properties);
  const key = properties[0];
  const value = properties[1];
  console.log(key, value);
}
console.log("-------------------------");
let obj = { a: 1 };
console.log("b" in obj);
console.log(typeof obj);
let array = [1, 23, 2, 4];
console.log(typeof array);
console.log(4 in array);
