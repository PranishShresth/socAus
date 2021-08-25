for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log("fizz", num);
  }
  if (num % 5 === 0) {
    console.log("buzz", num);
  }
  if (num % 15 === 0) {
    console.log("fizzbuzz", num);
  }
}
