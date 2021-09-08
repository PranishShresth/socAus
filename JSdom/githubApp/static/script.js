function generateReposCard(reposData) {
  const reposCards = reposData
    .map((repo) => {
      return `<div class="col-12 py-2">
    <div class="card">
      <div class="card-body">
        <a href="${repo.html_url}"><h5 class="card-title">${repo.full_name}</h5></a>
        <p class="card-text">
          ${repo.description}
        </p>
      </div>
    </div>
  </div>`;
    })
    .join("");

  return reposCards;
}

function generateProfileCard(profileData) {
  return `
  <div class="card" style="width: 100%; max-width: 400px">
    <img
      src="${profileData.avatar_url}"
      class="card-img-top"
      alt="${profileData.name}"
    />
    <div class="card-body">
      <h5 class="card-title ">${profileData.name}</h5>
      <p class="card-text">${profileData.login}</p>
      <p class="card-text">${profileData.location}</p>
      <p class="card-text"><a href="#">${profileData.html_url}</a></p>
      <p class="card-text"><a href="#">${profileData.blog}</a></p>
      <p class="card-text">${profileData.email}</p>
      <p class="card-text">${profileData.bio}</p>
      <hr />
      <p class="card-text">Following : ${profileData.followers}</p>
      <p class="card-text">Followers : ${profileData.following}</p>
      <a href="#" class="btn btn-primary">View Github Profile</a>
    </div>
  </div>`;
}
function displayError(error) {
  let hide = document.querySelector(".hide");
  hide.innerText = error;
  hide.classList.add("show");
  setTimeout(() => {
    hide.classList.remove("show");
  }, 5000);
}

function getUserRepos(user) {
  let reposContainer = document.querySelector(".reposContainer");
  const API_URL = `https://api.github.com/users/${user}/repos?per_page=5&sort=created:asc`;
  axios
    .get(API_URL)
    .then((result) => {
      reposContainer.innerHTML = generateReposCard(result.data);
    })
    .catch(() => displayError("Something went wrong! Try again"));
}

function getUserProfile(user) {
  let profileData = document.querySelector(".profileData");

  const API_URL = `https://api.github.com/users/${user}`;
  axios
    .get(API_URL)
    .then((result) => {
      profileData.innerHTML = generateProfileCard(result.data);
    })
    .catch(() => displayError("Something went wrong! Try again"));
}

function main() {
  let searchForm = document.querySelector(".searchForm");

  // initial Load
  getUserProfile("PranishShresth");
  getUserRepos("PranishShresth");

  //submit

  searchForm.onsubmit = function (ev) {
    ev.preventDefault();
    let userName = ev.target[0].value;
    if (userName === "") {
      displayError("Username shouldn't be empty!");
      return;
    }
    getUserProfile(userName);
    getUserRepos(userName);
  };
}

main();
