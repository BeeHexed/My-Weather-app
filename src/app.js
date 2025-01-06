function refreshWeather(response) {
    let temperatureElement = document.querySelector(".weather-app-temp");
    let temperature = response.data.temperature.current;
    let cityElement= document.querySelector(".weather-app-city");
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city){
  let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
     
     searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

