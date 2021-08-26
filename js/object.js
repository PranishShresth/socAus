const numbers = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3];
// {1:4,2:4,3:2}

let result = {};
// result.name = "value";
// console.log(result);
for (let num of numbers) {
  if (num in result) {
    result[num] += 1;
  } else {
    result[num] = 1;
  }
}

console.log(result);
