// declare global variables
var beer;
var cocktail;
var beerName;
var beerTagline;

// create empty global array to collect previous searches
var searchArr = [];

//Fetch beer API
var beerFunction = function () {
    fetch(
        'https://api.punkapi.com/v2/beers'
    )

        .then(function (randomBeer) {
            return randomBeer.json();
        })
        .then(function (randomBeer) {
            console.log(randomBeer);
            // find random beer from API return
            var randomize = Math.floor(Math.random() * 25);
            //beer = randomBeer[randomize].name
            beer = randomBeer[randomize];
            beerName = beer.name;
            beerTagline = beer.tagline;
            var beerResponse = document.querySelector('#beerName')
            // manipulate html with random beer name
            beerResponse.innerHTML = 'Beer Name: ' + beerName;
            var beerLineTwo = document.querySelector('#beerTagline')
            beerLineTwo.innerHTML = 'Tagline: ' + beerTagline;

            function beerSearchFn() {
                searchArr.push(beerName);
                console.log(beerName);

                // set whole array to local storage
                localStorage.setItem('search-array', searchArr);
            }
            beerSearchFn();
        }
        )
}

//Fetch cocktail API
var cocktailFunction = function () {
    fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'

    )

        .then(function (randomCocktail) {
            return randomCocktail.json();
        })
        .then(function (randomCocktail) {
            console.log(randomCocktail);

            cocktail = JSON.stringify(randomCocktail.drinks[0].strDrink);
            var cocktailGlass = randomCocktail.drinks[0].strGlass

            console.log(cocktailGlass);
            var cocktailIngredients = [
                randomCocktail.drinks[0].strIngredient1
                , randomCocktail.drinks[0].strIngredient2
                , randomCocktail.drinks[0].strIngredient3
                , randomCocktail.drinks[0].strIngredient4
                , randomCocktail.drinks[0].strIngredient5
                , randomCocktail.drinks[0].strIngredient6
                , randomCocktail.drinks[0].strIngredient7
                , randomCocktail.drinks[0].strIngredient8
                , randomCocktail.drinks[0].strIngredient9
                , randomCocktail.drinks[0].strIngredient10
                , randomCocktail.drinks[0].strIngredient11
                , randomCocktail.drinks[0].strIngredient12
                , randomCocktail.drinks[0].strIngredient13
                , randomCocktail.drinks[0].strIngredient14
                , randomCocktail.drinks[0].strIngredient15];
            console.log(cocktailIngredients);
            var ingredientsAppend = [];

            for (let i = 0; i < cocktailIngredients.length; i++) {
                if (cocktailIngredients[i] !== null) {
                    ingredientsAppend.push(cocktailIngredients[i]);
                }
            }
            console.log(ingredientsAppend);

            var cocktailResponse = document.querySelector('#cocktailName')
            cocktailResponse.innerHTML = 'Drink Name: ' + cocktail + '<br>' + 'Usually served in a(n): ' +
                cocktailGlass + '<br>' + 'Ingredients: ' + ingredientsAppend;

            //add cocktail name to local storage array
            function cocktailSearchFn() {
                searchArr.push(cocktail);
                console.log(cocktail);

                // set whole array to local storage
                localStorage.setItem('search-array', searchArr);
            }
            cocktailSearchFn();
        })
}




var prevSearch = document.getElementById('previous-search');
prevSearch.innerHTML = localStorage.getItem('search-array', searchArr);



//Make Cocktail Button
var beerEl = document.querySelector('#cocktailButton');
beerEl.addEventListener('click', cocktailFunction);

//Make Beer Button
var cocktailEl = document.querySelector('#beerButton');
cocktailEl.addEventListener('click', beerFunction);

//Save Previous searches to local storage

