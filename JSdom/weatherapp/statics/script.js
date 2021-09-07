// function getPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getPosition().then((pos) => console.log(pos));

function generateWeatherCard(weather) {
  return `
    <div class="weatherCard">
      <div class="city_name">${weather.name}</div>
      <img src="http://openweathermap.org/img/wn/${
        weather.weather[0].icon
      }@2x.png" alt=${
    weather.weather[0].main
  } width="150px" height="150px" style="margin:0 auto"/>
      <div class="temperature">${weather.main.temp}</div>
      <div class="description">${weather.weather[0].main}</div>
      <div class="weather_infos">
        <div class="weather_info">
          <div class="weather_heading">Humidity</div>
          <div class="weather_info_data">${weather.main.humidity}</div>
        </div>
        <div class="weather_info">
          <div class="weather_heading">Pressure</div>
          <div class="weather_info_data">${weather.main.pressure}</div>
        </div>
        <div class="weather_info">
          <div class="weather_heading">Sea Level</div>
          <div class="weather_info_data">${
            weather.main.sea_level || "N/A"
          }</div>
        </div>
      </div>
    </div>`;
}

function getWeatherByCity(city) {
  const API_KEY = "675b4f3777298bb6d7d29c4deee1d463";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  axios.get(API_URL).then((result) => {
    weatherContainer.innerHTML = generateWeatherCard(result.data);
  });
}

function getWeatherByCoords(latitude, longitude) {
  const weatherContainer = document.querySelector("#weatherContainer");
  const API_KEY = "675b4f3777298bb6d7d29c4deee1d463";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  axios.get(API_URL).then((result) => {
    weatherContainer.innerHTML = generateWeatherCard(result.data);
  });
}

function main() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let coords = position.coords;
      const { latitude, longitude } = coords;
      getWeatherByCoords(latitude, longitude);
    });
  }

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let city = event.target[0].value;
    getWeatherByCity(city);
  });
}

main();
