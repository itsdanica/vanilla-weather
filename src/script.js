function changeWeather(response) {
  let heading = document.querySelector("#heading");
  let temp = document.querySelector(".temp-number");
  // let day = document.querySelector("#day");
  // let hour = document.querySelector("#hour");
  // let minute = document.querySelector("#minute");
  let sky = document.querySelector("#sky");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  console.log(response);
  heading.innerHTML = response.data.city;
  temp.innerHTML = Math.round(response.data.temperature.current);
  sky.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
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
