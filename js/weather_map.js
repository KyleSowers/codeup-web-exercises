'use strict'

mapboxgl.accessToken = Mapbox_API_Token;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
});


//This is the request for San Antonio weather
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US",
//     units: "imperial"
// }).done(function (data) {
//     console.log('current weather', data);
//     console.log(data.base);
// });

//This is the request for 5 day/ 3 hour
let oneCallAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${29.4241}&lon=${-98.4936}&appid=${OPEN_WEATHER_APPID}&units=imperial`;



$.get(oneCallAPI).done((data) => {
    console.log(data);
    let currentWeatherDisplay = '';
    for (let i = 0; i < data.daily.length; i++) {

        currentWeatherDisplay = `<h2>${data.daily[i].dt}</h2> <br>`;
        if (i === 0) {
            $('.day0Date').html(currentWeatherDisplay);
        }
        if (i === 1) {
            $('.day1Date').html(currentWeatherDisplay);
        }

        if (i === 2) {
            $('.day2Date').html(currentWeatherDisplay);
        }

        if (i === 3) {
            $('.day3Date').html(currentWeatherDisplay);
        }

        if (i === 4) {
            $('.day4Date').html(currentWeatherDisplay);
        }

        currentWeatherDisplay = `<p>Current Temperature: ${data.daily[i].temp.day}</p><br>`;
        if (i === 0) {
            $('.day0Temp').html(currentWeatherDisplay);
        }
        if (i === 1) {
            $('.day1Temp').html(currentWeatherDisplay);
        }

        if (i === 2) {
            $('.day2Temp').html(currentWeatherDisplay);
        }

        if (i === 3) {
            $('.day3Temp').html(currentWeatherDisplay);
        }

        if (i === 4) {
            $('.day4Temp').html(currentWeatherDisplay);
        }

        currentWeatherDisplay = `<p>Description: ${data.daily[i].weather[0].description}</p><br>`;
        if (i === 0) {
            $('.day0Desc').html(currentWeatherDisplay);
        }
        if (i === 1) {
            $('.day1Desc').html(currentWeatherDisplay);
        }

        if (i === 2) {
            $('.day2Desc').html(currentWeatherDisplay);
        }

        if (i === 3) {
            $('.day3Desc').html(currentWeatherDisplay);
        }

        if (i === 4) {
            $('.day4Desc').html(currentWeatherDisplay);
        }

        currentWeatherDisplay = `<p>Humidity: ${data.daily[i].humidity}</p><br>`;
        if (i === 0) {
            $('.day0Humi').html(currentWeatherDisplay);
        }
        if (i === 1) {
            $('.day1Humi').html(currentWeatherDisplay);
        }

        if (i === 2) {
            $('.day2Humi').html(currentWeatherDisplay);
        }

        if (i === 3) {
            $('.day3Humi').html(currentWeatherDisplay);
        }

        if (i === 4) {
            $('.day4Humi').html(currentWeatherDisplay);
        }
        currentWeatherDisplay = `<p>Winds: ${data.daily[i].wind_speed}</p><br>`;
        if (i === 0) {
            $('.day0Wind').html(currentWeatherDisplay);
        }
        if (i === 1) {
            $('.day1Wind').html(currentWeatherDisplay);
        }

        if (i === 2) {
            $('.day2Wind').html(currentWeatherDisplay);
        }

        if (i === 3) {
            $('.day3Wind').html(currentWeatherDisplay);
        }

        if (i === 4) {
            $('.day4Wind').html(currentWeatherDisplay);
        }
        currentWeatherDisplay = `<p>Pressure: ${data.daily[i].pressure}<p></p><br>`;
        if (i === 0) {
            $('.day0Pres').html(currentWeatherDisplay);
        }
        if (i === 1) {
            $('.day1Pres').html(currentWeatherDisplay);
        }

        if (i === 2) {
            $('.day2Pres').html(currentWeatherDisplay);
        }

        if (i === 3) {
            $('.day3Pres').html(currentWeatherDisplay);
        }

        if (i === 4) {
            $('.day4Pres').html(currentWeatherDisplay);
        }
        // console.log(currentWeatherDisplay);
        // if (i === 0) {
        //     $('#insert-weather:').html(currentWeatherDisplay);
        // }
        //
        // if (i === 1) {
        //     $('#insert-weather1').html(currentWeatherDisplay);
        // }
        //
        // if (i === 2) {
        //     $('#insert-weather2').html(currentWeatherDisplay);
        // }
        //
        // if (i === 3) {
        //     $('#insert-weather3').html(currentWeatherDisplay);
        // }
        //
        // if (i === 4) {
        //     $('#insert-weather4').html(currentWeatherDisplay);
        // }
        //
        // if (i > 4 ) {
        //     break;
        // }
    }
});


    // let currentWeatherDisplay = '';
    // currentWeatherDisplay += `<h1>${data.name}</h1> <br>`;
    // currentWeatherDisplay += `Current Temperature: ${data.main.temp} <br>`;
    // currentWeatherDisplay += `Feels Like: ${data.main.feels_like} <br>`;
    // currentWeatherDisplay += `Humidity: ${data.main.humidity} <br>`;
    // currentWeatherDisplay += `Wind Speed: ${data.wind.speed} <br>`;
    // console.log(currentWeatherDisplay);
    // $('#insert-weather').html(currentWeatherDisplay);
    //
    // console.log(data.coord)
// //This is the request for 5 day/ 3 hour forcast
// let oneCallAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${29.4241}&lon=${-98.4936}&appid=${OPEN_WEATHER_APPID}`;

    // function fiveDayWeather() {
    //     for (let i = 0; i < data.length; i++) {
    //         fiveDayWeather += `<h1>${data.name}</h1> <br> 'Current Temperature: ' ${data.main.temp} <br>
    //     }
    // }


    // let currentWeatherDisplay = '';
    // currentWeatherDisplay += `<h1>${data.name}</h1> <br>`;
    // currentWeatherDisplay += `Current Temperature: ${data.main.temp} <br>`;
    // currentWeatherDisplay += `Feels Like: ${data.main.feels_like} <br>`;
    // currentWeatherDisplay += `Humidity: ${data.main.humidity} <br>`;
    // currentWeatherDisplay += `Wind Speed: ${data.wind.speed} <br>`;
    // console.log(currentWeatherDisplay);
    // document.getElementById('#insert-weather').innerHTML = currentWeatherDisplay;
    // $('#insert-weather').html(currentWeatherDisplay);
    // $('#insert-weather').html(data.name);
    // $('#insert-weather').html('Current Temperature: ' + data.main.temp);
    // $('#insert-weather').html('Feels Like: ' + data.main.feels_like);
    // $('#insert-weather').html('Humidity: ' + data.main.humidity);
    // $('#insert-weather').html('Wind Speed: ' + data.wind.speed);


    // document.querySelector("#insert-weather").innerHTML = data.base;
