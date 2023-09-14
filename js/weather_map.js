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
        let ts = new Date(data.daily[i].dt * 1000)
        console.log(ts);
        console.log(data.daily[i].dt);
        // let date = ts.toDateString()
        currentWeatherDisplay = `<p>${ts.toDateString()}</p> <br>`;
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

//For temperature display across containers
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

//For weather icons
        currentWeatherDisplay = `${data.daily[i].weather[0].icon}<br>`;
        if (i === 0) {
            //update the src attribute to be `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`
            $('#icon-cloud').html(currentWeatherDisplay);
        }
        if (i === 1) {
            $('#icon1cloud').html(currentWeatherDisplay);
        }

        if (i === 2) {
            $('#icon2cloud').html(currentWeatherDisplay);
        }

        if (i === 3) {
            $('#icon3cloud').html(currentWeatherDisplay);
        }

        if (i === 4) {
            $('#icon4cloud').html(currentWeatherDisplay);
        }

//For description display across containers
        currentWeatherDisplay = `<p>Description: <b>${data.daily[i].weather[0].description}</b></p><br>`;
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

//For humidity display across containers
        currentWeatherDisplay = `<p>Humidity: <b>${data.daily[i].humidity}</b></p><br>`;
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

//For wind-speed display across containers
        currentWeatherDisplay = `<p>Winds: <b>${data.daily[i].wind_speed}</b></p><br>`;
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

//For pressure display across containers
        currentWeatherDisplay = `<p>Pressure: <b>${data.daily[i].pressure}</b></p><br>`;
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
