function main() {
  let searchForm = document.querySelector(".searchForm");
  searchForm.onsubmit = function (ev) {
    ev.preventDefault();
    console.info("here");
  };
}

function getUserProfile(user) {
  const API_URL = `https://api.github.com/users/${user}`;
  axios.get(API_URL).then((result) => {
    consol.log(result.data);
  });
}

main();
