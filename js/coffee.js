"use strict"

function renderCoffee(coffee) {

    var coffeeName = document.getElementsByTagName('h2');
    coffeeName.innerHTML = coffee.name;

    var coffeeRoast = document.getElementsByTagName('p');
    coffeeRoast.innnerHTML = coffee.roast;

    // console.log(coffeeName.innerHTML);
    var html = [coffeeName.innerHTML, coffeeRoast.innerHTML];
return html;

}

function renderCoffees(coffees) {
    var html ="" ;
    for(var i = coffees.length - 1; i >= 0; i--) {
      html += (renderCoffee(coffees[i]));

    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    console.log(filteredCoffees);
    divChange.innerHTML = renderCoffees(filteredCoffees);
}

function searchEntry(input){
    var coffeeType = submitSearch.value
    coffees.forEach(function(coffee) {
        if (coffee.name === coffeeType){
            // console.log(coffee.name);
            return coffee.name;
        }

})
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var divChange = document.getElementById("cafe");

var divChange = document.querySelector('#cafe');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var submitSearch = document.querySelector("#submit-search");
var userNameInput = document.forms[1].login.username;
// console.log(userNameInput.value);
divChange.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitSearch.addEventListener('input', searchEntry);