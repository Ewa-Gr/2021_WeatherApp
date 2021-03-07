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
  tempChange.innerHTML = `${temperature}`;
  let wind = Math.round(response.data.wind.speed) * 3.6;
  let humidity = Math.round(response.data.main.humidity);
  let desription = (response.data.weather[0].main);
  let windChange = document.querySelector("#otherweather");
  let descriptionChange = document.querySelector ("#maindescription");
  windChange.innerHTML = `Humidity: ${humidity} % <br /> Wind: ${wind} km/h`;
  descriptionChange.innerHTML = `${desription}`;

  celsiusTemp = response.data.main.temp;

  let iconChange = document.querySelector ("#icon-today");
      if(response.data.weather[0].icon === "01d" || response.data.weather[0].icon === "01n") {
      iconChange.setAttribute("class", "col-6 fas fa-sun weathermain");
    } else if(response.data.weather[0].icon === "02d" || response.data.weather[0].icon === "02n") {
      iconChange.setAttribute("class", "col-6 fas fa-cloud-sun weathermain");
    } else if(response.data.weather[0].icon === "03d" || response.data.weather[0].icon === "03n") {
      iconChange.setAttribute("class", "col-6 fas fa-cloud weathermain");
    } else if(response.data.weather[0].icon === "04d" || response.data.weather[0].icon === "04n") {
      iconChange.setAttribute("class", "col-6 fas fa-cloud weathermain");
    } else if(response.data.weather[0].icon === "09d" || response.data.weather[0].icon === "09n") {
      iconChange.setAttribute("class", "col-6 fas fa-cloud-showers-heavy weathermain");
    } else if(response.data.weather[0].icon === "10d" || response.data.weather[0].icon === "10n") {
      iconChange.setAttribute("class", "col-6 fas fa-cloud-rain weathermain");
    } else if(response.data.weather[0].icon === "11d" || response.data.weather[0].icon === "11n") {
      iconChange.setAttribute("class", "col-6 fas fa-bolt weathermain");
    } else if(response.data.weather[0].icon === "13d" || response.data.weather[0].icon === "13n") {
      iconChange.setAttribute("class", "col-6 fas fa-snowflake weathermain");
    } else if(response.data.weather[0].icon === "50d" || response.data.weather[0].icon === "50n") {
      iconChange.setAttribute("class", "col-6 fas fa-water weathermain");
    };
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
      celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  search ("Los Angeles");
}
function searchBarcelona(event) {
  event.preventDefault();
      celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  search ("Barcelona");
}
function searchHongKong(event) {
  event.preventDefault();
    celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  search ("Hong Kong");
}

function showYourCity(event) {
  event.preventDefault();
  let city = document.querySelector("#input-yourcity").value;
  search(city);
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

//Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit.
//When clicking on it, it should convert the temperature to Fahrenheit.
//When clicking on Celsius, it should convert it back to Celsius.


function showFahrenheitTemp(event){
  event.preventDefault;
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let tempElement = document.querySelector("#maindaytemp");
  let fTemp = (celsiusTemp * 9) / 5 + 32;
  tempElement.innerHTML = Math.round (fTemp);
}

function showCelsiusTemp(event) {
  event.preventDefault;
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
    let tempElement = document.querySelector("#maindaytemp");
    tempElement.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp =null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

search("Berlin");