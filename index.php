<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Mapperty - Easy Property Listing Website</title>

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css">
        <link rel="stylesheet" href="css/leaflet.awesome-markers.css">

        <script src="js/leaflet.awesome-markers.js"></script>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/css/l.geosearch.css" />
        <script src="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/js/l.geosearch.provider.google.js"></script>
        
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.5/dist/MarkerCluster.Default.css"/>
        <script src="https://unpkg.com/leaflet.markercluster@1.0.5/dist/leaflet.markercluster.js"></script>
        
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.5/dist/MarkerCluster.css"/>
        <script src="http://leaflet.github.io/Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>
        
        <script src='https://cdnjs.cloudflare.com/ajax/libs/leaflet-plugins/3.0.0/layer/vector/KML.js'></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier-Leaflet/0.2.6/oms.min.js"></script>
        
        <script src="js/PropertyList.js" type="text/javascript"></script>


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
            #logo{
                position:fixed;
                left:5px;
                bottom:5px;
                z-index:2000;
                height:85px;
                width:256px;
                background-image: url("http://www.mapperty.co/img/mapperty_white_beta.png");
                background-repeat: no-repeat;
                background-position: left top;
            }
            
        </style>
    </head>
    <body>
        <div id='map' class="container-fluid"></div>
        <div id="logo"></div>
                
        <script src="js/geoSearch_include.js" type="text/javascript"></script>
        
        <script>

//SRC CODE ABOVE HERE
//16.9186° S, 145.7781° E
    window.onload = function() {

            var map = L.map('map').setView([-16.98720, 145.74003] , 8);
            



            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.light',
                accessToken: 'sk.eyJ1IjoiYXdyYXR0ZW4iLCJhIjoiY2ozYmRhanNoMDFoaTJ3cGg5MWx2MWpkeCJ9.-GFKfnIKHDY83-nD8LLi9g'
            }).addTo(map);

            var geoSearchController = new L.Control.GeoSearch({
                provider: new L.GeoSearch.Provider.Google()
            }).addTo(map);
            
              // Creates a red marker with the coffee icon
            var defaultMarker = L.AwesomeMarkers.icon({
                markerColor: 'blue'
            });

		var markers = L.markerClusterGroup({ chunkedLoading: true });
		
		for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
                        var icon = a[3];
			var marker = L.marker(L.latLng(a[0], a[1]), { icon: icon }, { title: title });
			marker.bindPopup(title);
			markers.addLayer(marker);
		}

		map.addLayer(markers);
                


                var kmls = L.layerGroup();

                for (var i = 0; i < kmlList.length; i++) {
                    var a = kmlList[i];
                    var kml = L.KML( a[0] , {async: true});
                    kmls.addLayer(kml);
                }

                map.addLayer(kmls);

/* 
            var kml_SA = new L.KML("/kml/SheldonAvenue.kml", {async: true});
            var kml_MP = new L.KML("/kml/MountPeterEstate.kml", {async: true});
            var kml_AP = new L.KML("/kml/AP.kml", {async: true});
            var kml_HMB = new L.KML("/kml/HMB.kml", {async: true});
            map.addLayer(kml_SA);
            map.addLayer(kml_MP);
            map.addLayer(kml_AP);
            map.addLayer(kml_HMB);
*/
    };
        </script>

        <!-- jQuery first, then Tether, then Bootstrap JS. -->
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>
