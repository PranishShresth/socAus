function getCoffee(coffee) {
  const promise = new Promise((resolve, reject) => {
    if (coffee === "mocha") {
      const data = ["mocha"];

      resolve(data);
    } else {
      reject("Bad choice");
    }
  });
  return promise;
}

getCoffee("232")
  .then((option) => {
    console.log(option);
  })
  .catch((err) => console.log(err));
