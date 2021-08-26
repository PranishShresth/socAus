const fruits = [
  "mandarins",
  "mangos",
  "apple",
  "pears",
  "watermelon",
  "grapes",
];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Write an algoright that takes two arguments array and fruits to find,
// if there is fruit,return the index

function findFruitPosition(fruitsArray, fruitToFind) {
  for (let i = 0; i < fruitsArray.length; i++) {
    if (fruitsArray[i] === fruitToFind) {
      return i;
    }
  }
  return -1;
}

console.log(findFruitPosition(fruits, "grapes"));

//

const cars = ["BMW", "Toyota", "Lamborghini", "Ferrrari"];

// for of loop

for (let car of cars) {
  console.log(car);
}

// Write a algorithm to find sum of all elements in an array
const array1 = [132, 232, 54, 34, 232];
// 132 + 232 + 54+ 34+232
const sumArray = function (numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumArray(array1));

//

const twodimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(twodimensionalArray[0][0]);
console.log(twodimensionalArray[0][1]);
// Write an algorithm to find of sum of all even number in 2D array
let sum = 0;
for (let i = 0; i < twodimensionalArray.length; i++) {
  for (let j = 0; j < twodimensionalArray[i].length; j++) {
    if (twodimensionalArray[i][j] % 2 === 0) {
      sum += twodimensionalArray[i][j];
    }
  }
}
console.log(sum);

// Create a function which return number of true value in an array
// countTrue([true,false,true,true,true]) - > 4
// countTrue([true,true,true,false,false]) -> 3

function countTrue(array) {
  let count = 0;
  for (let element of array) {
    if (element) {
      count++;
    }
  }
  return count;
}
console.log(countTrue([true, false, true, true, true]));
