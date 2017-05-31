<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Mapperty - Easy Property Listing Website</title>

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/css/l.geosearch.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">

        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
        <script src="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/js/l.geosearch.provider.google.js"></script>

        <style>
            html, body {
                height: 100%;
                width: 100%;
            }

            #map {
                height: 100%;
                width: 100%;
                left: 0;
                position: relative;
                top: 0;
            }
        </style>
    </head>
    <body>


        <div class="container-fluid">
            <button id="myButton">Button</button>

        </div>

        <div id='map' class="container-fluid">


        </div>


        <script>
            
            L.GeoSearch = {};
            L.GeoSearch.Provider = {};

            L.GeoSearch.Result = function (x, y, label, bounds) {
                this.X = x;
                this.Y = y;
                this.Label = label;
                this.bounds = bounds;
            };
            
            
L.Control.GeoSearch = L.Control.extend({
    options: {
        position: 'topcenter',
        showMarker: true,
        retainZoomLevel: false,
        draggable: false
    },

    _config: {
        country: '',
        searchLabel: 'search for address ...',
        notFoundMessage: 'Sorry, that address could not be found.',
        messageHideDelay: 3000,
        zoomLevel: 18
    },

    initialize: function (options) {
        L.Util.extend(this.options, options);
        L.Util.extend(this._config, options);
    },

    onAdd: function (map) {
        var $controlContainer = map._controlContainer,
            nodes = $controlContainer.childNodes,
            topCenter = false;

        for (var i = 0, len = nodes.length; i < len; i++) {
            var klass = nodes[i].className;
            if (/leaflet-top/.test(klass) && /leaflet-center/.test(klass)) {
                topCenter = true;
                break;
            }
        }

        if (!topCenter) {
            var tc = document.createElement('div');
            tc.className += 'leaflet-top leaflet-center';
            $controlContainer.appendChild(tc);
            map._controlCorners.topcenter = tc;
        }

        this._map = map;
        this._container = L.DomUtil.create('div', 'leaflet-control-geosearch');

        var searchbox = document.createElement('input');
        searchbox.id = 'leaflet-control-geosearch-qry';
        searchbox.type = 'text';
        searchbox.placeholder = this._config.searchLabel;
        this._searchbox = searchbox;

        var msgbox = document.createElement('div');
        msgbox.id = 'leaflet-control-geosearch-msg';
        msgbox.className = 'leaflet-control-geosearch-msg';
        this._msgbox = msgbox;

        var resultslist = document.createElement('ul');
        resultslist.id = 'leaflet-control-geosearch-results';
        this._resultslist = resultslist;

        this._msgbox.appendChild(this._resultslist);
        this._container.appendChild(this._searchbox);
        this._container.appendChild(this._msgbox);

        L.DomEvent
          .addListener(this._container, 'click', L.DomEvent.stop)
          .addListener(this._searchbox, 'keypress', this._onKeyUp, this);

        L.DomEvent.disableClickPropagation(this._container);

        return this._container;
    },

    geosearch: function (qry) {
        var that = this;
        try {
            var provider = this._config.provider;

            if(typeof provider.GetLocations === 'function') {
                var results = provider.GetLocations(qry, function(results) {
                    that._processResults(results);
                });
            }
            else {
                var url = provider.GetServiceUrl(qry);
                this.sendRequest(provider, url);
            }
        }
        catch (error) {
            this._printError(error);
        }
    },

    sendRequest: function (provider, url) {
        var that = this;

        window.parseLocation = function (response) {
            var results = provider.ParseJSON(response);
            that._processResults(results);

            document.body.removeChild(document.getElementById('getJsonP'));
            delete window.parseLocation;
        };

        function getJsonP (url) {
            url = url + '&callback=parseLocation';
            var script = document.createElement('script');
            script.id = 'getJsonP';
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
        }

        if (XMLHttpRequest) {
            var xhr = new XMLHttpRequest();

            if ('withCredentials' in xhr) {
                var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            var response = JSON.parse(xhr.responseText),
                                results = provider.ParseJSON(response);

                            that._processResults(results);
                        } else if (xhr.status === 0 || xhr.status === 400) {
                            getJsonP(url);
                        } else {
                            that._printError(xhr.responseText);
                        }
                    }
                };

                xhr.open('GET', url, true);
                xhr.send();
            } else if (XDomainRequest) {
                var xdr = new XDomainRequest();

                xdr.onerror = function (err) {
                    that._printError(err);
                };

                xdr.onload = function () {
                    var response = JSON.parse(xdr.responseText),
                        results = provider.ParseJSON(response);

                    that._processResults(results);
                };

                xdr.open('GET', url);
                xdr.send();
            } else {
                getJsonP(url);
            }
        }
    },

    _processResults: function(results) {
        if (results.length > 0) {
            this._map.fireEvent('geosearch_foundlocations', {Locations: results});
            this._showLocation(results[0]);
        } else {
            this._printError(this._config.notFoundMessage);
        }
    },

    _showLocation: function (location) {
        if (this.options.showMarker === true) {
            if (typeof this._positionMarker === 'undefined') {
                this._positionMarker = L.marker(
                    [location.Y, location.X],
                    {draggable: this.options.draggable}
                ).addTo(this._map);
            }
            else {
                this._positionMarker.setLatLng([location.Y, location.X]);
            }
        }
        if (!this.options.retainZoomLevel && location.bounds && location.bounds.isValid()) {
            this._map.fitBounds(location.bounds);
        }
        else {
            this._map.setView([location.Y, location.X], this._getZoomLevel(), false);
        }

        this._map.fireEvent('geosearch_showlocation', {
          Location: location,
          Marker : this._positionMarker
        });
    },

    _printError: function(message) {
        var elem = this._resultslist;
        elem.innerHTML = '<li>' + message + '</li>';
        elem.style.display = 'block';

        this._map.fireEvent('geosearch_error', {message: message});

        setTimeout(function () {
            elem.style.display = 'none';
        }, 3000);
    },

    _onKeyUp: function (e) {
        var esc = 27,
            enter = 13;

        if (e.keyCode === esc) { // escape key detection is unreliable
            this._searchbox.value = '';
            this._map._container.focus();
        } else if (e.keyCode === enter) {
            e.preventDefault();
            e.stopPropagation();

            this.geosearch(this._searchbox.value);
        }
    },

    _getZoomLevel: function() {
        if (! this.options.retainZoomLevel) {
            return this._config.zoomLevel;
        }
        return this._map.zoom;
    }

});


/**
 * L.Control.GeoSearch - search for an address and zoom to it's location
 * L.GeoSearch.Provider.Google uses google geocoding service
 * https://github.com/smeijer/L.GeoSearch
 */

onLoadGoogleApiCallback = function() {
    L.GeoSearch.Provider.Google.Geocoder = new google.maps.Geocoder();
    document.body.removeChild(document.getElementById('load_google_api'));
};

L.GeoSearch.Provider.Google = L.Class.extend({
    options: {

    },

    initialize: function(options) {
        options = L.Util.setOptions(this, options);
        if (!window.google || !window.google.maps)
          this.loadMapsApi();
    },

    loadMapsApi: function () {
        var url = "https://maps.googleapis.com/maps/api/js?v=3&callback=onLoadGoogleApiCallback&sensor=false";
        var script = document.createElement('script');
        script.id = 'load_google_api';
        script.type = "text/javascript";
        script.src = url;
        document.body.appendChild(script);
    },

    GetLocations: function(qry, callback) {
        var geocoder = L.GeoSearch.Provider.Google.Geocoder;

        var parameters = L.Util.extend({
            address: qry
        }, this.options);

        var results = geocoder.geocode(parameters, function(data){
            data = {results: data};

            var results = [],
                northEastLatLng,
                southWestLatLng,
                bounds;
            for (var i = 0; i < data.results.length; i++) {

                if( data.results[i].geometry.bounds ) {
                    var northEastGoogle = data.results[i].geometry.bounds.getNorthEast(),
                        southWestGoogle = data.results[i].geometry.bounds.getSouthWest();

                    northEastLatLng = new L.LatLng( northEastGoogle.lat(), northEastGoogle.lng() );
                    southWestLatLng = new L.LatLng( southWestGoogle.lat(), southWestGoogle.lng() );
                    bounds = new L.LatLngBounds([ northEastLatLng, southWestLatLng ]);
                }
                else {
                    bounds = undefined;
                }
                results.push(new L.GeoSearch.Result(
                    data.results[i].geometry.location.lng(),
                    data.results[i].geometry.location.lat(),
                    data.results[i].formatted_address,
                    bounds
                ));
            }

            if(typeof callback === 'function')
                callback(results);
        });
    }
});

            
            var map = L.map('map').setView([51.505, -0.09], 13);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.light',
                accessToken: 'sk.eyJ1IjoiYXdyYXR0ZW4iLCJhIjoiY2ozYmRhanNoMDFoaTJ3cGg5MWx2MWpkeCJ9.-GFKfnIKHDY83-nD8LLi9g'
            }).addTo(map);



            var geoSearchController = new L.Control.GeoSearch({
                provider: new L.GeoSearch.Provider.Google()
            }).addTo(map);

            document.getElementById("myButton").addEventListener("click", function(){
                geoSearchController.geosearch('New York');
            });

        </script>

        <!-- jQuery first, then Tether, then Bootstrap JS. -->
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>
