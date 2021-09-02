let form = document.querySelector("form");

form.addEventListener("submit", function (ev) {
  // prevents page from reloading
  ev.preventDefault();
  const shoppingItem = ev.target[0].value;
  console.log(ev);
  console.log(shoppingItem);
});
