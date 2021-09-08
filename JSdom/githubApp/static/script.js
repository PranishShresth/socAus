function displayError(error) {
  let hide = document.querySelector(".hide");
  hide.innerText = error;
  hide.classList.add("show");
  setTimeout(() => {
    hide.classList.remove("show");
  }, 5000);
}

function getUserProfile(user) {
  const API_URL = `https://api.github.com/users/${user}`;
  axios
    .get(API_URL)
    .then((result) => {
      console.log(result.data);
    })
    .catch(() => displayError("Something went wrong! Try again"));
}

function main() {
  let searchForm = document.querySelector(".searchForm");
  searchForm.onsubmit = function (ev) {
    ev.preventDefault();
    let userName = ev.target[0].value;
    if (userName === "") {
      displayError("Username shouldn't be empty!");
      return;
    }
    getUserProfile(userName);
  };
}

main();
