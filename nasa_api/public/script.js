const baseURL = 'https://api.nasa.gov/planetary/earth/assets';
const key = 'FMgw6baYfiNbmCa5prGwoNG0c1wcWR84qXSygfIr';
let url;

// search form field
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const latitude = document.querySelector('.latitude');
const longitude = document.querySelector('.longitude');
const enterDate = document.querySelector('.enter-date');
searchForm.addEventListener('submit', fetchResults);

//dropdown




//fetching from the api
function fetchResults(e) {
    e.preventDefault();
    url = baseURL + '?lon=' + longitude.value + '&lat=' + latitude.value + '&date=' + enterDate.value + '&&dim=0.4&api_key=' + key;
    fetch(url)
        .then(function(result) {
            return result.json();
        }).then(function(json) {
            displayResults(json);
            console.log(json);
        });
}

function displayResults(json) {
    console.log("DisplayResults", json);
}

function displayResults(json) {
    document.getElementById('result').src = json.url;

}
