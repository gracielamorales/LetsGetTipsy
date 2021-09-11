//Search bar function


//Fetch Flight Price API (Adam and Hayden)
function flightPrice() {
    fetch(
        'https://api.punkapi.com/v2/beers'
    )

    .then(function(randomBeer){
        return randomBeer.json();
    })
    .then(function(randomBeer){
        console.log(randomBeer);

        var beer = randomBeer.id[0]

        var beerResponse = document.querySelector('#beerName')
        beerResponse.innerHTML = beer;
    }
    )
    
    
}
flightPrice();
//Fetch Covid Cases API (Adam and Hayden)
function flight() {
    fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        
    )

    .then(function(skyScannerPrices){
        return skyScannerPrices.json();
    })
    .then(function(skyScannerPrices){
        console.log(skyScannerPrices);
    }
    )
    
    
}
flight();

//Save Previous searches to local storage (Tyler)


//Function to display searches to screen (Tyler)

