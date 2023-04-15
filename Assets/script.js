!DOCTYPE

//fetching the city using openweather api
fetch("http:api.openweathermap.org/geo/1.0/direct?q={dallas},{state code},{country code}&limit={limit}&appid={API key}")
    .then(response => response.json())
    .then(citiesFound => {
//making first city = cities found and console loging the lat and lon of city searched
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);

        return fetch('api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid={API key}')
    })




    .then(response => response.json())
    .then(data => {

        console.log(data);
    })

