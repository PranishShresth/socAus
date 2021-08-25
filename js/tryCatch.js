try {
  //   throw new SyntaxError("error");
  console.log("logic of the application");
} catch (err) {
  console.log("Internal server error");
} finally {
  console.log("always run whether there is error or not");
}
