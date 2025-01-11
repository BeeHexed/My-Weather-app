function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement= document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");

    let windElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let iconElement = document.querySelector("#icon");
    let date = new Date(response.data.time * 1000);

     iconElement.innerHTML =`<img
                src="${response.data.condition.icon_url}"
                id="icon" class="weather-icon"
              />`;
    
    timeElement.innerHTML = formatDate(date);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}% `;
    windElement.innerHTML = `${response.data.wind.speed} km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
}
 

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let day = days[date.getDay()];
    

if (minutes < 10) {
    minutes = `0${minutes}`;
}

    return `${day}, ${hours}:${minutes},`;
   
    
}

function searchCity(city){
  let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(city.trim())}&key=${apiKey}&units=metric`
  axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
     
     searchCity(searchInput.value);
}

function displayForecast () {
    let forecastElement = document.querySelector("#forecast");

    let days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let forecastHtml = "";

 days.forEach(function(day){
forecastHtml = 
forecastHtml + 
`
    <div class="firstHalf">
            <div class="day-of-week">
              ${day}
              <div class="icon">🌤️</div>
              <br />
              <span><strong>20° C</strong></span>
              <span class="low">20° C</span>
            </div>
          </div>
`;
 });
 forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
displayForecast();


