function refreshWeather(response) {
    let temperatureElement = document.querySelector(".weather-app-temp");
    let temperature = response.data.temperature.current;
    let cityElement= document.querySelector(".weather-app-city");
    let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
    console.log(response.data);
    
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}% `;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city){
  let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(city.trim())}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
     
     searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
