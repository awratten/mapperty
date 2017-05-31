<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Mapperty - Easy Property Listing Website</title>

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/css/l.geosearch.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css">
        <link rel="stylesheet" href="css/leaflet.awesome-markers.css">

        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
        <script src="js/leaflet.awesome-markers.js"></script>
        <script src="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/js/l.geosearch.provider.google.js"></script>
        
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.5/dist/MarkerCluster.Default.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.5/dist/MarkerCluster.css"/>
        <script src="https://unpkg.com/leaflet.markercluster@1.0.5/dist/leaflet.markercluster.js"></script>
        
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

        </div>

        <div id='map' class="container-fluid">


        </div>


        <script src="js/geoSearch_include.js" type="text/javascript"></script>
        
        <script>

//SRC CODE ABOVE HERE
//16.9186° S, 145.7781° E
            var map = L.map('map').setView([-16.9186,145.7781] , 13);

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

            var AP_Logo = L.icon({
                iconUrl: '/img/kf_ap_icon.png',
                iconSize: [128, 44],
                iconAnchor: [64, 44]
            });    
            var HMB_Logo = L.icon({
                iconUrl: '/img/kf_hmb_icon.png',
                iconSize: [128, 79],
                iconAnchor: [64, 79]
            });    
            var MP_Logo = L.icon({
                iconUrl: '/img/kf_mp_icon.png',
                iconSize: [128, 79],
                iconAnchor: [64, 79]
            });
            var RE_Logo = L.icon({
                iconUrl: '/img/kf_re_icon.png',
                iconSize: [128, 79],
                iconAnchor: [64, 79]
            });
            var SA_Logo = L.icon({
                iconUrl: '/img/kf_sa_icon.png',
                iconSize: [128, 79],
                iconAnchor: [64, 79]
            });     
    
//L.marker([51.941196,4.512291], {icon: redMarker}).addTo(map);
//L.marker([-16.8186,145.7781], {icon: defaultMarker}).addTo(map).bindPopup("I am a green leaf.")  

//document.getElementById("myButton").addEventListener("click", function(){
//    geoSearchController.geosearch('New York');
//});

            var m_cluster = L.markerClusterGroup();
                m_cluster.addLayer(L.marker([-16.83142, 145.69413], {icon: defaultMarker}).addTo(map).bindPopup("Ainslie Place")); //Ainslie Place
                m_cluster.addLayer(L.marker([-17.04103, 145.73976], {icon: defaultMarker}).addTo(map).bindPopup("Mount Peter")); //Mount Peter
                m_cluster.addLayer(L.marker([-16.7963, 145.7083], {icon: defaultMarker}).addTo(map).bindPopup("Half Moon Bay")); //Half Moon Bay
                m_cluster.addLayer(L.marker([-16.98674, 145.73359], {icon: defaultMarker}).addTo(map).bindPopup("Rainforest Edge")); //Rainforest Edge
                m_cluster.addLayer(L.marker([-16.98912, 145.74466], {icon: defaultMarker}).addTo(map).bindPopup("Sheldon Avenue")); //Sheldon Avenue
                //m_cluster.addLayer(L.marker([-16.8186,145.7781], {icon: defaultMarker}).addTo(map).bindPopup("I am a green leaf."));
            map.addLayer(m_cluster);


/*
            var m_cluster = L.markerClusterGroup();
                m_cluster.addLayer(L.marker([-16.83142, 145.69413], {icon: AP_Logo}).addTo(map)); //Ainslie Place
                m_cluster.addLayer(L.marker([-17.04103, 145.73976], {icon: MP_Logo}).addTo(map)); //Mount Peter
                m_cluster.addLayer(L.marker([-16.7963, 145.7083], {icon: HMB_Logo}).addTo(map)); //Half Moon Bay
                m_cluster.addLayer(L.marker([-16.98674, 145.73359], {icon: RE_Logo}).addTo(map)); //Rainforest Edge
                m_cluster.addLayer(L.marker([-16.98912, 145.74466], {icon: SA_Logo}).addTo(map)); //Sheldon Avenue
                //m_cluster.addLayer(L.marker([-16.8186,145.7781], {icon: defaultMarker}).addTo(map).bindPopup("I am a green leaf."));
            map.addLayer(m_cluster);

            m_cluster.on("loaded", function(e) { 
            	map.fitBounds(e.target.getBounds());
            });

            m_cluster.on('click', function(e){
                map.setView(e.latlng, 17);
            });

            // Dirty hack; otherwise the cluster won't appear on the map.
            map.zoomIn(0);
            map.zoomOut(0);
*/
        </script>

        <!-- jQuery first, then Tether, then Bootstrap JS. -->
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>
