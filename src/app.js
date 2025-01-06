function searchCity(city){
  let apiKey = "36b4fe238810fo977tebf4ca2bcf46b6";
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-form-input");
     let cityElement= document.querySelector(".weather-app-city");
     cityElement.innerHTML = searchInput.value;
     searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

