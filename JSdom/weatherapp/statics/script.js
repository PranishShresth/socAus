// function getPosition() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// getPosition().then((pos) => console.log(pos));

function getWeatherByCoords(latitude, longitude) {}

function main() {
  navigator.geolocation.getCurrentPosition(function (position) {
    let coords = position.coords;
    const { latitude, longitude } = coords;
    getWeatherByCoords(latitude, longitude);
  });
}

main();
