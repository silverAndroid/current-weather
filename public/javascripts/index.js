/**
 * Created by silver_android on 02/11/16.
 */

var api = new API();
var card1 = $('#card1');
var card2 = $('#card2');
var card2Text = $('#card2Text');
var card2Title = $('#card2Title');
var card3 = $('#card3');

var btnYesClicked = function () {
    card1.css({display: 'none'});
    card2.css({display: 'block'});
    getLocation(loadWeather);
};

var btnRefreshClicked = function () {
    card3.css({display: 'none'});
    card2.css({display: 'block'});
    getLocation(loadWeather);
};

var getLocation = function (callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback, showError);
    } else {
        card2Title.text('Error');
        card2Text.text('Geolocation is not supported on this browser.');
    }
};

var loadWeather = function (position) {
    api.getWeather(position.coords.latitude, position.coords.longitude, function (result) {
        if (result['status'] == 200) {
            displayWeather(result['weatherData']);
            card3.css({'display': 'block'});
            card2.css({display: 'none'});
        } else {
            card2Text.text('An unknown error occurred!');
        }
    });
};

var showError = function (error) {
    card2Title.text('Error');
    switch (error.code) {
        case error.PERMISSION_DENIED:
            card2Text.text('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            card2Text.text('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            card2Text.text('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            card2Text.text('An unknown error occurred.');
            break;
    }
};

var displayWeather = function (weather) {
    var now = new Date();
    var isDay = now > convertTimestamp(weather['sys']['sunrise']) && now < convertTimestamp(weather['sys']['sunset']);
    var weatherIconClass = 'wi-owm-' + (isDay ? 'day-' : 'night-') + weather['weather'][0]['id'];
    $('#weatherIcon').addClass(weatherIconClass);
    $('#windIcon').addClass('towards-' + weather['wind']['deg'] + '-deg');
    $('#wind').text((weather['wind']['speed'] * 1000 / 3600).toFixed(2) + 'km/h');
    $('#weather').text(weather['weather'][0]['main']);
    $('#temperature').html(weather['main']['temp'].toFixed(2) + '&#8451;');
    $('#cityName').text(weather['name']);
};

//Converts Unix timestamp to Date
var convertTimestamp = function (milliseconds) {
    return new Date(milliseconds * 1000);
};

$('#btnYes').on('click', btnYesClicked);
$('#btnRefresh').on('click', btnRefreshClicked);