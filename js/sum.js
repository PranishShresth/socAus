// 1+2+3+4 .... +100
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

var sum = 0;
var i = 1;
while (i <= 100) {
  sum += i;
  i++;
}
console.log(sum);

var sum = 0;
for (var i = 0; i <= 100; i += 2) {
  sum += i;
}
console.log(sum);

var num = 100;
do {
  console.log("hey, im here");
} while (num > 100);
