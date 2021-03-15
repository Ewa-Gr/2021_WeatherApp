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

}

function showForecast (response) {
  let forecastElement =document.querySelector("#forecast");
  let forecastdayone = response.data.list[8];
  let forecastdaytwo = response.data.list[16];
  let forecastdaythree = response.data.list[24];
  let forecastdayfour = response.data.list[32];
  let forecastfirst = days[now.getDay() +1];
  let forecastsecond = days[now.getDay() +2];
  let forecastthird = days[now.getDay() +3];
  let forecastfourth = days[now.getDay() +4];
  let iconfirst = response.data.list[8].weather[0].icon;
    if (iconfirst === "01d"  || iconfirst === "01n") {
    let iconclassdayone = "fas fa-sun";
  } else if (iconfirst === "02d"  || iconfirst === "02n") {
    iconclassdayone = "fas fa-cloud-sun";
  } else if (iconfirst === "03d"  || iconfirst === "03n") {
    iconclassdayone = "fas fa-cloud";
  } else if (iconfirst === "04d"  || iconfirst === "04n") {
    iconclassdayone = "fas fa-cloud";
  } else if (iconfirst === "09d"  || iconfirst === "09n") {
    iconclassdayone = "fas fa-cloud-showers-heavy";
  } else if (iconfirst === "10d"  || iconfirst === "10n") {
    iconclassdayone = "fas fa-cloud-rain";
  } else if (iconfirst === "11d"  || iconfirst === "11n") {
    iconclassdayone = "fas fa-bolt";
  } else if (iconfirst === "13d"  || iconfirst === "13n") {
    iconclassdayone = "fas fa-snowflake";
  } else if (iconfirst === "50d"  || iconfirst === "50n") {
    iconclassdayone = "fas fa-water";
  } else {
  iconclassdayone = "fas fa-exclamation-triangle";
}

  let iconsecond = response.data.list[16].weather[0].icon;
  let iconclassdaytwo = "fas fa-exclamation-triangle";
  if (iconsecond === "01d"  || iconsecond === "01n") {
    iconclassdaytwo = "fas fa-sun";
  } else if (iconsecond === "02d"  || iconsecond === "02n") {
    iconclassdaytwo = "fas fa-cloud-sun";
  } else if (iconsecond === "03d"  || iconsecond === "03n") {
    iconclassdaytwo = "fas fa-cloud";
  } else if (iconsecond === "04d"  || iconsecond === "04n") {
    iconclassdaytwo = "fas fa-cloud";
  } else if (iconsecond === "09d"  || iconsecond === "09n") {
    iconclassdaytwo = "fas fa-cloud-showers-heavy";
  } else if (iconsecond === "10d"  || iconsecond === "10n") {
    iconclassdaytwo = "fas fa-cloud-rain";
  } else if (iconsecond === "11d"  || iconsecond=== "11n") {
    iconclassdaytwo = "fas fa-bolt";
  } else if (iconsecond === "13d"  || iconsecond === "13n") {
    iconclassdaytwo = "fas fa-snowflake";
  } else if (iconsecond === "50d"  || iconsecond === "50n") {
    iconclassdaytwo = "fas fa-water";
  } else {
    iconclassdaytwo = "fas fa-exclamation-triangle"
  }

  let iconthird = response.data.list[24].weather[0].icon;
  let iconclassdaythree = "fas fa-exclamation-triangle";
  if (iconthird === "01d"  || iconthird === "01n") {
    iconclassdaythree = "fas fa-sun";
  } else if (iconthird === "02d"  || iconthird === "02n") {
    iconclassdaythree = "fas fa-cloud-sun";
  } else if (iconthird === "03d"  || iconthird === "03n") {
    iconclassdaythree = "fas fa-cloud";
  } else if (iconthird === "04d"  || iconthird === "04n") {
    iconclassdaythree = "fas fa-cloud";
  } else if (iconthird === "09d"  || iconthird === "09n") {
    iconclassdaythree = "fas fa-cloud-showers-heavy";
  } else if (iconthird === "10d"  || iconthird === "10n") {
    iconclassdaythree = "fas fa-cloud-rain";
  } else if (iconthird === "11d"  || iconthird === "11n") {
    iconclassdaythree = "fas fa-bolt";
  } else if (iconthird === "13d"  || iconthird === "13n") {
    iconclassdaythree = "fas fa-snowflake";
  } else if (iconthird === "50d"  || iconthird === "50n") {
    iconclassdaythree = "fas fa-water";
  } else {
    iconclassdaythree = "fas fa-exclamation-triangle"
  }

  let iconfourth = response.data.list[32].weather[0].icon;
    let iconclassdayfour = "fas fa-exclamation-triangle";
  if (iconfourth === "01d"  || iconfourth === "01n") {
    iconclassdayfour = "fas fa-sun";
  } else if (iconfourth === "02d"  || iconfourth === "02n") {
    iconclassdayfour = "fas fa-cloud-sun";
  } else if (iconfourth === "03d"  || iconfourth === "03n") {
    iconclassdayfour = "fas fa-cloud";
  } else if (iconfourth === "04d"  || iconfourth === "04n") {
    iconclassdayfour = "fas fa-cloud";
  } else if (iconfourth === "09d"  || iconfourth === "09n") {
    iconclassdayfour = "fas fa-cloud-showers-heavy";
  } else if (iconfourth === "10d"  || iconfourth === "10n") {
    iconclassdayfour = "fas fa-cloud-rain";
  } else if (iconfourth === "11d"  || iconfourth === "11n") {
    iconclassdayfour = "fas fa-bolt";
  } else if (iconfourth === "13d"  || iconfourth === "13n") {
    iconclassdayfour = "fas fa-snowflake";
  } else if (iconfourth === "50d"  || iconfourth === "50n") {
    iconclassdayfour = "fas fa-water";
  } else {
    iconclassdayfour = "fas fa-exclamation-triangle"
  }
  forecastElement.innerHTML =`
            <div class="row text-center">
              <div class="col">${forecastfirst}</div>
              <div class="col">${forecastsecond}</div>
              <div class="col">${forecastthird}</div>
              <div class="col">${forecastfourth}</div>
            </div>
            <div class="row weatherother text-center">
              <div class="col"><i class="${iconclassdayone}"></i></div>
              <div class="col"><i class="${iconclassdaytwo}"></i></div>
              <div class="col"><i class="${iconclassdaythree}"></i></div>
              <div class="col"><i class="${iconclassdayfour}"></i></div>
            </div>
            <div class="row text-center">
              <div class="col"><strong>${Math.round(forecastdayone.main.temp)}°</strong> ${Math.round(forecastdayone.main.feels_like)}°</div>
              <div class="col"><strong>${Math.round(forecastdaytwo.main.temp)}°</strong> ${Math.round(forecastdaytwo.main.feels_like)}°</div>
              <div class="col"><strong>${Math.round(forecastdaythree.main.temp)}°</strong> ${Math.round(forecastdaythree.main.feels_like)}°</div>
              <div class="col"><strong>${Math.round(forecastdayfour.main.temp)}°</strong> ${Math.round(forecastdayfour.main.feels_like)}°</div>
            </div>
`;

}

function search(city) {
  let apiKey = "ad5ef6d6835e2df059ef5e09fca59c37";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTempAndCity);

  apiUrl =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecast);
}

function searchLocation(position) {
  let apiKey = "ad5ef6d6835e2df059ef5e09fca59c37";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTempAndCity);

  apiUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecast);

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