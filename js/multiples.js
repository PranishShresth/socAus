// 2 4 5 8 10
// 7 14 21 28 ... 70

for (var i = 7; i <= 70; i += 7) {
  console.log(i);
}

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i, j);
  }
}

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    for (var k = 1; k <= 10; k++) {
      console.log(i, j, k);
    }
  }
}

// 1 * 1 =1

// 1 * 10 = 10

// 2 * 1 =2
// 2 * 2 =4
// 2 * 3 = 6
//

// 2 *10 = 20

// 3 * 1 = 3

// 3

for (var i = 1; i <= 10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
