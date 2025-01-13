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
    
   getForecast(response.data.city);
              
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
function formatDay (timestamp) {
    let date = new Date(timestamp * 1000)

    let days= [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`]

    return days[date.getDay()];
}

function getForecast(city) {
let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${encodeURIComponent(city.trim())}&key=${apiKey}&units=metric`;
axios(apiUrl).then(displayForecast);
}

function displayForecast (response) {
console.log(response.data);

    let forecastElement = document.querySelector("#forecast");

    
    let forecastHtml = "";

response.data.daily.forEach(function(day, index){
    if (index < 6) 
forecastHtml +=  
`
    <div class="firstHalf">
            <div class="day-of-week">
             ${formatDay(day.time)};
              <div>
             <img src="${day.condition.icon_url}" class="icon"/>
              </div>
              <br />
              <span><strong>${Math.round(day.temperature.maximum)}° C</strong></span>
              <span class="low">${Math.round(day.temperature.minimum)}° C</span>
            </div>
          </div>
`;
 });
 forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");



