console.log("hello");
let body = document.querySelector("body");

function displayPokemon(response) {
  let div = document.createElement("div");
  div.innerText = response.data.name;
  let img = document.createElement("img");
  img.src = response.data.sprites.front_shiny;
  body.appendChild(img);
  body.appendChild(div);
}
axios
  .get("https://pokeapi.co/api/v2/pokemon/99")
  .then((response) => {
    data = response.data;
    displayPokemon(response);
    return response.data;
  })
  .catch((err) => console.log("something wrong happened"));
console.log("hi");

function displayJokes(response) {
  response.data.forEach((e) => {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    p.innerText = e.punchline;
    h1.innerText = e.setup;
    div.appendChild(h1);
    setTimeout(() => {
      div.appendChild(p);
    }, 5000);
    body.appendChild(div);
  });
}
axios
  .get("https://official-joke-api.appspot.com/random_ten")
  .then((response) => {
    data = response.data;

    displayJokes(response);
  })
  .catch((err) => console.log("something wrong happened"));
