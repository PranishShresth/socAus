// Create a function that takes an array of objects and returns sum of people's budget

// getBudgets([{name:"Jenny",budget:5000},{name:"James",budget:10000},{name:"John",budget:4000}])

// 5000 + 10000 +4000
function getBudgets(array) {
  let sum = 0;
  for (let person of array) {
    sum += person.budget;
  }
  return sum;
}

// higher order functions

console.log(
  getBudgets([
    { name: "Jenny", budget: 5000 },
    { name: "James", budget: 10000 },
    { name: "John", budget: 4000 },
  ])
);
