'use strict'
//bookmarks are displayed in left bar to annotate a new function/loop

mapboxgl.accessToken = Mapbox_API_Token;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 8, // starting zoom
});

let oneCallAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${29.4241}&lon=${-98.4936}&appid=${OPEN_WEATHER_APPID}&units=imperial`;

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);


//Start of loop
//run initial 5-day forecast display
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
        currentWeatherDisplay = data.daily[i].weather[0].icon;
        console.log(currentWeatherDisplay);
        if (i === 0) {
            $('#icon-cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
        }
        if (i === 1) {
            $('#icon1cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
        }

        if (i === 2) {
            $('#icon2cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
        }

        if (i === 3) {
            $('#icon3cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
        }

        if (i === 4) {
            $('#icon4cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
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


//Start of new loop
//Run 5-day forecast on location desired with marker drag
function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
    oneCallAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${OPEN_WEATHER_APPID}&units=imperial`;
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
            currentWeatherDisplay = data.daily[i].weather[0].icon;
            console.log(currentWeatherDisplay);
            if (i === 0) {
                $('#icon-cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
            }
            if (i === 1) {
                $('#icon1cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
            }

            if (i === 2) {
                $('#icon2cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
            }

            if (i === 3) {
                $('#icon3cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
            }

            if (i === 4) {
                $('#icon4cloud').attr('src', `http://openweathermap.org/img/w/${currentWeatherDisplay}.png`);
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
}

marker.on('dragend', onDragEnd);


document.getElementById('placeButton').addEventListener('click', function () {
    // Add the control to the map.
    mapboxgl.accessToken = Mapbox_API_Token;
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: [-98.4936, 29.4241], // starting position [lng, lat]
        zoom: 8, // starting zoom

    });

    // Add the control to the map.
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );
})


