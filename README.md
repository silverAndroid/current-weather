# GeoWeather

GeoWeather is a [Node.js] web application that uses HTML5 geolocation and the [OpenWeatherMap] API to display the weather at your current location. It uses the [Material Design Lite] library to display the weather in a minimal, yet effective manner, and [jQuery] to do CSS manipulations and AJAX calls.

### Tech

GeoWeather uses a few open-source libraries to function properly:

* [Node.js] - Evented I/O for the backend
* [Express](http://expressjs.com/) - Fast, minimalist web framework for Node.js
* [cssnano](http://cssnano.co/), [UglifyJS](http://lisperator.net/uglifyjs/) - Minifiers for CSS and JavaScript
* [request](https://github.com/request/request) - Simplified HTTP request client for Node.js
* [Pug](https://pugjs.org) - High performance templating engine (formerly known as Jade)
* [Material Design Lite] - Adds a Material Design look and feel to static websites and does not rely on JavaScript frameworks or libraries
* [jQuery] - Makes HTML document traversal and manipulation, event handling, animation, and AJAX much simpler
* [Weather Icons](https://erikflowers.github.io/weather-icons/) - Icon font with weather themed icons that allows for easy usage with the OpenWeatherMap API

### Installation

GeoWeather was built on [Node.js] v4 but has not been used on previous versions to test for backwards-compatibility with them.

To ensure a minimal chance of encountering bugs, please download and extract the [latest pre-built release from here](https://nodejs.org/en/download/)

Next, in order for this application to use the [OpenWeatherMap] API, you will need to get an [API key from here](http://openweathermap.org/appid).

Once you have gotten your API key, download the latest version [as a zip file from here](https://github.com/silverAndroid/current-weather/archive/master.zip) or clone the repository using Git:

    $ git clone https://github.com/silverAndroid/current-weather.git

Then, install the dependencies and start the server:

    $ cd current-weather
    $ npm install
    $ API_KEY=<openweather_api_key> node ./bin/www

You can now access the web app by going to http://localhost:3000. If you want to change the port being used, just add `PORT=<port_number>` before running the `node` command, ie.

    $ API_KEY=<openweather_api_key> PORT=<port_number> node ./bin/www

If you want to access the web app from another device, download and install [ngrok](https://ngrok.com/), a binary that allows you to securely access the web app running locally on your device (it supports 32-bit and 64-bit Mac OS X, Windows, Linux (also supports ARM on Linux), and FreeBSD), run the binary while specifying the port number, and it will show you a URL to access the web app with:

    $ cd /path/to/where/you/installed/ngrok
    $ ./ngrok http <port_app_running_on>

and if it was successful, you should see something similar to this:
![ngrok running](http://i.imgur.com/mBusZWS.png "ngrok running")

NOTE: Please use the HTTPS URL on Google Chrome because it only allows using geolocation on secure origins, such as HTTPS.

[Node.js]: <https://nodejs.org/en>
[OpenWeatherMap]: <http://openweathermap.org/>
[Material Design Lite]: <https://getmdl.io>
[jQuery]: <https://jquery.com/>
