const baseURL = " https://pokeapi.co/api/v2/pokemon/";

let url;

// search field
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

// result display
const section = document.querySelector('section');

searchForm.addEventListener('submit', fetchResults);

//fetching from the api
function fetchResults(e) {
    e.preventDefault();
    url = baseURL + searchTerm.value;
    fetch(url)
        .then(function(result) {
            return result.json();
        }).then(function(json) {
            displayResults(json);
        });

}

function displayResults(json) {
    console.log("DisplayResults", json);
}

function displayResults(json) {
    console.log(json.response.docs);
};


function displayResults(json) {
    console.log("DisplayResults", json);

    document.getElementById('pokeName').innerHTML = json.name;
    document.getElementById('pokeImage').src = json.sprites.front_default;
    document.getElementById('pokeShiny').src = json.sprites.front_shiny;
};





/*

  missing a value somewhere else, check the NY Times line 34-41
  checkout NYT line 70 for articles - using . notation to access the fetched api
fetchResults = (e) => {
    (e).preventDefault();
    let pokeNumber = document.getElementById('.pokeNumber').value;
    url = baseURL + pokeNumber, (pokemon) => {
        document.getElementById(".pokeName").innerHTML = pokemon.name;
        document.getElementById(".pokeImage").src = pokemon.sprites.front_default;
    }
};

document.getElementById("pokeForm").addEventListener('submit', fetchResults);









function search = (e) => {
    (e).preventDefault();    
}
*/