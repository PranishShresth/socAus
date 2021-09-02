window.addEventListener("DOMContentLoaded", function () {
  // getElementById
  // getElementByTagName
  //getElementByClassName
  //querySelector()
  let h1 = document.getElementsByTagName("h1");

  let heading = document.getElementById("heading");
  let names = document.getElementsByClassName("name");
  console.log(h1[0].innerText);
  console.log(heading.innerText);
  console.log(names);
  console.log(window);
  for (let i = 0; i < names.length; i++) {
    if (names[i].innerText === "Jeremy") {
      names[i].innerText = "Aqua man";
    }
    console.log(names[i].innerText);
  }

  //   checking the parent

  //   let doesParentNode = h1[0].parentNode;
  //   while (doesParentNode) {
  //     console.log(doesParentNode);
  //     doesParentNode = doesParentNode.parentNode;
  //   }
  //   console.log(h1[0].parentNode.parentNode.parentNode.parentNode);

  //   removing from the dom

  heading.parentNode.removeChild(heading);
  heading.remove();

  let body = document.querySelector("body");
  let jeremy = document.createElement("img");
  jeremy.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1536254408564-66ca88dc652d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8MTAwMnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  jeremy.style.width = "200px";
  jeremy.style.height = "200px";

  //   var obj = {
  //       background-color:"sds"
  //   }
  body.style.backgroundColor = "#f7f7f7";
  body.appendChild(jeremy);

  //   Javascript

  const fruits = [
    "apples",
    "mangos",
    "pears",
    "grapes",
    "plum",
    "banana",
    "cherry",
  ];
  fruits
    .sort()
    // .filter((f) => f.startsWith("p"))
    .forEach((fruit) => {
      let div = document.createElement("div");
      div.innerHTML = fruit;
      div.style.backgroundColor = "cyan";
      div.style.margin = "20px";
      div.style.padding = "30px";
      body.appendChild(div);
    });
});
