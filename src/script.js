function changeCityName(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#enter-city");
  let heading = document.querySelector("#heading");
  heading.innerHTML = searchInput.value;
}
let searchCityForm = document.querySelector("#search-city-form");
searchCityForm.addEventListener("submit", changeCityName);
