/**
 * Created by silver_android on 01/11/16.
 */
var express = require('express');
var router = express.Router();
var weatherController = require('../api/weather');

router.get('/weather', function (req, res) {
    if (req.query.lat != null && req.query.lon != null) {
        weatherController.getWeather(req.query.lat, req.query.lon, function (result) {
            res.status(result.status).json(result);
        });
    }
});

module.exports = router;