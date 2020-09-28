const baseURL = " https://pokeapi.co/api/v2/pokemon/";

let url;

// search field
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');



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
    console.log("DisplayResults", json);
    document.getElementById('pokeName').innerHTML = json.name;
    document.getElementById('pokeName').style.textTransform = "capitalize";
    document.getElementById('pokeNumber').innerHTML = `Pokedex #` + json.id;
    document.getElementById('pokeImage').src = json.sprites.front_default;
    document.getElementById('pokeShiny').src = json.sprites.front_shiny;
    document.getElementById('pokeHealth').innerHTML = `HP: ` + json.stats[0].base_stat;
    document.getElementById('pokeAttack').innerHTML = `Attack: ` + json.stats[1].base_stat;
    document.getElementById('pokeDefense').innerHTML = `Defense: ` + json.stats[2].base_stat;
    document.getElementById('pokeSpAttack').innerHTML = `Sp. Attack: ` + json.stats[3].base_stat;
    document.getElementById('pokeSpDefense').innerHTML = `Sp. Defense: ` + json.stats[4].base_stat;
    document.getElementById('pokeSpeed').innerHTML = `Speed: ` + json.stats[5].base_stat;
};
