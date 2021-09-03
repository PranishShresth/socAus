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

  addShoppingItem(shoppingItem);
  //   making it empty value
  ev.target[0].value = "";
});

function addShoppingItem(item) {
  //   creating a div element
  let div = document.createElement("div");
  //   adding a class
  div.classList.add("shopping_item");

  let p = document.createElement("p");
  p.innerText = item;

  let input = document.createElement("input");
  input.classList.add("editInput", "hide");
  input.value = item;

  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("editBtn");
  editBtn.addEventListener("click", function () {
    input.classList.toggle("show");
    p.classList.toggle("hide");
  });

  input.addEventListener("keydown", function (ev) {
    if (ev.key === "Enter") {
      p.innerText = ev.target.value;
      input.classList.toggle("show");
      p.classList.toggle("hide");
    }
  });
  //   delete Btn
  let deleleBtn = document.createElement("button");
  deleleBtn.classList.add("deleteBtn");
  deleleBtn.innerText = "Delete";
  deleleBtn.addEventListener("click", function (ev) {
    ev.target.parentNode.remove();
  });

  div.appendChild(p);
  div.appendChild(input);
  div.appendChild(editBtn);
  div.appendChild(deleleBtn);
  shoppingList.appendChild(div);
}
