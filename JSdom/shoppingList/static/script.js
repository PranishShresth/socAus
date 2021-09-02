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

  let item = `<p>${shoppingItem}</p>`;

  //   delete Btn
  let deleleBtn = document.createElement("button");
  deleleBtn.classList.add("deleteBtn");
  deleleBtn.innerText = "Delete";
  deleleBtn.addEventListener("click", function (ev) {
    ev.target.parentNode.remove();
  });

  div.innerHTML = item;

  div.appendChild(deleleBtn);
  shoppingList.appendChild(div);
});
