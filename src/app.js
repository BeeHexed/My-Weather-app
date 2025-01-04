function handleSearchSubmit(event) {
    event.preventDefault();
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);