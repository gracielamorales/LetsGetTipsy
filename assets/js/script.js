//Search bar function


//Fetch Flight Price API (Adam and Hayden)
function flightPrice() {
    fetch(
        'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
    )

    .then(function(skyScannerPrices){
        return skyScannerPrices.json();
    })
    .then(function(skyScannerPrices){
        console.log(skyScannerPrices);
    }
    )
    
    )
}

//Fetch Covid Cases API (Adam and Hayden)


//Save Previous searches to local storage (Tyler)


//Function to display searches to screen (Tyler)

function prevSearch(){
    //take local storage of saved searches
    JSON.parse(window.localStorage.getItem(''));
    //show in prev searches div

}

localStorage.setItem('')

prevBtn.addEventListener('click', 'prevSearch')


var search;
localStorage.setItem('search');

for (let i = 0; i < search.length; i++) {
    
    if {
        search.textValue === 
        
        document.appendChild('#prevSearches')

    }
    
}