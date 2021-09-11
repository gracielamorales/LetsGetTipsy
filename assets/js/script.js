//Search bar function


//Fetch Flight Price API (Adam and Hayden)
var beerFunction = function () {
    fetch(
        'https://api.punkapi.com/v2/beers'
    )

    .then(function(randomBeer){
        return randomBeer.json();
    })
    .then(function(randomBeer){
        console.log(randomBeer);

        var beer = randomBeer[0].name

        var beerResponse = document.querySelector('#beerName')
        beerResponse.innerHTML = beer;
    }
    )
    
    
}
flightPrice();
//Fetch Covid Cases API (Adam and Hayden)
var cocktailFunction = function(){
    fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        
    )

    .then(function(randomCocktail){
        return randomCocktail.json();
    })
    .then(function(randomCocktail){
        console.log(randomCocktail);

        var cocktail = JSON.stringify(randomCocktail.drinks[0].strDrink);

        var cocktailResponse = document.querySelector('#cocktailName')
        cocktailResponse.innerHTML = 'Drink Name: ' + cocktail;

    }
    )
    
    
}

//Make Cocktail Button
var beerEl = document.querySelector('#cocktialButton');
beerEl.addEventListener('click', cocktailFunction);

//Make Beer Button
var cocktailEl =document.querySelector('#beerButton');
cocktailEl.addEventListener('click', beerFunction );

//Save Previous searches to local storage (Tyler)


//Function to display searches to screen (Tyler)

