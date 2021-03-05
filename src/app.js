// Feature 1
//In your project, display the current date and
//time using JavaScript: Tuesday 16:00
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let mins = now.getMinutes();
if (mins < 10) {
  mins = `0${mins}`;
}

let nowday = document.querySelector("#nowday");
nowday.innerHTML = `${day} ${hours}:${mins}`;
// Feature 2
//Add a search engine, when searching for a city (i.e. Paris),
//display the city name on the page after the user submits the form.
function showTempAndCity(response) {
  document.querySelector("#your-city").innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let tempChange = document.querySelector("#maindaytemp");
  tempChange.innerHTML = `${temperature}°C`;
  let wind = Math.round(response.data.wind.speed) * 3.6;
  let humidity = Math.round(response.data.main.humidity);
  let desription = (response.data.weather[0].main);
  let windChange = document.querySelector("#otherweather");
  let descriptionChange = document.querySelector ("#maindescription");
  windChange.innerHTML = `Humidity: ${humidity} % <br /> Wind: ${wind} km/h`;
  descriptionChange.innerHTML = `${desription}`
  console.log(response);
}
function search(city) {
  let apiKey = "ad5ef6d6835e2df059ef5e09fca59c37";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTempAndCity);
}
function searchLocation(position) {
  let apiKey = "ad5ef6d6835e2df059ef5e09fca59c37";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTempAndCity);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLa(event) {
  event.preventDefault();
  search ("Los Angeles");
}
function searchBarcelona(event) {
  event.preventDefault();
  search ("Barcelona");
}
function searchHongKong(event) {
  event.preventDefault();
  search ("Hong Kong");
}

function showYourCity(event) {
  event.preventDefault();
  let cityla = document.querySelector("#current-loc").value;
  search(cityla);
}

let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", showYourCity);

let currentLocButton = document.querySelector("#current-loc");
let laLocButton = document.querySelector("#input-lacity");
let BLocButton = document.querySelector("#input-bcity");
let HKLocButton = document.querySelector("#input-hkcity");

currentLocButton.addEventListener("click", getCurrentLocation);
laLocButton.addEventListener("click", searchLa);
BLocButton.addEventListener("click", searchBarcelona);
HKLocButton.addEventListener("click", searchHongKong);
search("London");

//Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
//When clicking on it, it should convert the temperature to Fahrenheit.
//When clicking on Celsius, it should convert it back to Celsius.
