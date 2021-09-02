let form = document.querySelector("form");
let shoppingList = document.querySelector(".shoppingList");
form.addEventListener("submit", function (ev) {
  // prevents page from reloading
  ev.preventDefault();
  //   accessing the input using ev.target
  const shoppingItem = ev.target[0].value;

  if (shoppingItem === "") {
    return alert("The shopping item shouldn't be empty");
  }

  //   creating a div element
  let div = document.createElement("div");
  //   adding a class
  div.classList.add("shopping_item");

  let item = `<p>${shoppingItem}</p><p class="deleteBtn">Delete</p>`;
  div.innerHTML = item;
  shoppingList.appendChild(div);
});
