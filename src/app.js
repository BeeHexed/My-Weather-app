function searchCity(city){
    //make API call and update interface
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

