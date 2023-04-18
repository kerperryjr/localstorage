// examples 
// let color1 = "red"
// let color2 = "blue"

// let test = `${color1} and ${color2}` // template literal
// let test1 = color1 + " and " + color2 // string concatenation
// console.log(test)



const apiKey = "03895c9d067b601e1d50a80890791f89";
let city = "dallas";
let state = "tx";
let country = "usa";
let limit = 5;
let searchButton = document.getElementById("city-search-btn")
const cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${apiKey}`;
console.log(cityUrl) // logs http://api.openweathermap.org/geo/1.0/direct?q=dallas,tx,usa&limit=5&appid=asdkfmh


searchButton.addEventListener('click', function() {
    console.log(citySearchInput)
    // TODO: Use document.getElementById to reference the <input> element and assign it to the variable below
let citySearchInput = document.getElementById(city.coord(lat, lon))
    // TODO: Afterwards, use the variable above to assign the value of the input element into the variable below
let inputValue = //????????
    console.log(inputValue)
})



//fetching the city using openweather api
fetch(cityUrl)
    .then(response => response.json())
    .then(citiesFound => {
        //making first city = cities found and console loging the lat and lon of city searched
        console.log(citiesFound)
        let firstCity = citiesFound[0];
        const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=${apiKey}`;
        console.log(firstCity.lat);
        console.log(firstCity.lon);

        return fetch(weatherUrl)
    })
    .then(response => response.json())
    .then(data => {

        console.log(data);
    })

