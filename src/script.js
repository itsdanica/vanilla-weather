function changeWeather(response) {
  let heading = document.querySelector("#heading");
  // let tempImg = document.querySelector(".tempImg");
  let tempNumber = document.querySelector(".temp-number");
  let tempScale = document.querySelector(".temp-scale");
  let day = document.querySelector("#day");
  // let hour = document.querySelector("#hour");
  // let minute = document.querySelector("#minute");
  let sky = document.querySelector("#sky");
  let wordHumidity = document.querySelector("#word-humidity");
  let humidity = document.querySelector("#humidity");
  let comma = document.querySelector("#comma");
  let wordWind = document.querySelector("#word-wind");
  let windSpeed = document.querySelector("#wind-speed");
  console.log(response);
  heading.innerHTML = response.data.city;
  day.innerHTML = ``;
  tempNumber.innerHTML = Math.round(response.data.temperature.current);
  tempScale.innerHTML = `°C`;
  sky.innerHTML = response.data.condition.description;
  wordHumidity.innerHTML = `Humidity: `;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  comma.innerHTML = `,`;
  wordWind.innerHTML = `Wind: `;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
}
function searchCity(city) {
  let apiKey = `d804a6ef932oaf3dbf673f68a8ff6cta`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(changeWeather);
}
function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");
  searchCity(searchInput.value);
}
let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", submitCity);
