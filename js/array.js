let number = 10;

number = number + 5;
console.log(number);
// console.log(string);
let number2 = number;

console.log(++number2);
console.log(number);

let array = [1, 2, 3, 4]; // 0x232EF
// let array1 = array;
// console.log(array[3]);
// array[1] = 5;
// console.log(array);

let array1 = array; // 0x232EF

array1[1] = 5;
console.log(array);

// Primitive data types(string,number,null,undefined) are immutatble data types and is passed by value
// Compositive data types (objects,arrays) are mutable data types and is passed by reference

// const FINAL_VALUE = ""
const array2 = [1, 2, 3, 4, 5];
array2[0] = 23;
console.log(array2);

// push for adding elem from the end

array2.push("soc");
array2.push("soc2", "soc3");
console.log(array2);

// pop for removing from the end
console.log(array2.pop());
console.log(array2);

// unshift for adding elem from the start

array2.unshift("jeremy");
array2.unshift("others", "luke", "viqaas", "lucian", "pranish");
console.log(array2);

// shift for removing elem from the start
console.log(array2.shift());

console.log(array2);

// splice,slice,for of, object,for in
