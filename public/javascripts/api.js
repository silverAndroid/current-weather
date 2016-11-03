/**
 * Created by silver_android on 02/11/16.
 */

function API() {
    this.getWeather = function (latitude, longitude, callback) {
        $.get('./api/weather', {lat: latitude, lon: longitude}, function (result) {
            callback(result);
        }).fail(function (error) {
            callback(error.responseJSON);
        });
    };
}