const array = [1, 2, 3, 4, 5];

// remove from any index
array.splice(3, 1);

// add element from any index
console.log(array);
array.splice(3, 1, "Jeremy");

// delete count (put 1 if you want to replace it or use 0)

// slice vs splice
console.log(array.slice(1, 3));

console.log(array);
