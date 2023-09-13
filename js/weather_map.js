'use strict'

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US",
    units: "imperial"
}).done(function (data) {
    console.log('current weather', data);
    console.log(data.base);


    let currentWeatherDisplay = '';
    currentWeatherDisplay += `<h1>${data.name}</h1> <br>`;
    currentWeatherDisplay += `Current Temperature: ${data.main.temp} <br>`;
    currentWeatherDisplay += `Feels Like: ${data.main.feels_like} <br>`;
    currentWeatherDisplay += `Humidity: ${data.main.humidity} <br>`;
    currentWeatherDisplay += `Wind Speed: ${data.wind.speed} <br>`;
    console.log(currentWeatherDisplay);
    // document.getElementById('#insert-weather').innerHTML = currentWeatherDisplay;
    $('#insert-weather').html(currentWeatherDisplay);
    // $('#insert-weather').html(data.name);
    // $('#insert-weather').html('Current Temperature: ' + data.main.temp);
    // $('#insert-weather').html('Feels Like: ' + data.main.feels_like);
    // $('#insert-weather').html('Humidity: ' + data.main.humidity);
    // $('#insert-weather').html('Wind Speed: ' + data.wind.speed);


    // document.querySelector("#insert-weather").innerHTML = data.base;
});