/**
 * Created by silver_android on 01/11/16.
 */
var request = require('request');
var apiKey = process.env.API_KEY;

var getWeather = function (latitude, longitude, callback) {
    request(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`, {json: true},
        function (error, response, body) {
            var json = {status: response.statusCode};
            json[!error ? 'weatherData' : 'error'] = body;
            callback(json);
        });
};

module.exports = {
    getWeather: getWeather
};