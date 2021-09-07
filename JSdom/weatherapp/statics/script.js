// function getPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getPosition().then((pos) => console.log(pos));

function getWeatherByCoords(latitude, longitude) {
  const API_KEY = "675b4f3777298bb6d7d29c4deee1d463";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  axios.get(API_URL).then((result) => console.log(result.data));
}

function main() {
  navigator.geolocation.getCurrentPosition(function (position) {
    let coords = position.coords;
    const { latitude, longitude } = coords;
    getWeatherByCoords(latitude, longitude);
  });
}

main();
