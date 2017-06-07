<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Mapperty - Easy Property Mapping</title>

        <?php #Leaflet ?>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>

        <?php #Bootstrap 4 ?>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css">

        <?php #FontAwesome ?>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <?php #<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css">?>
        <?php #<link rel="stylesheet" href="css/leaflet.awesome-markers.css">?>

        <?php #<script src="js/leaflet.awesome-markers.js"></script> ?>

        <?php #Google GeoSearch js + css ?>
        <script src="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/js/l.geosearch.provider.google.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/leaflet.geosearch/0.1/css/l.geosearch.css" />
        <script src="js/leafletControl.js"></script>

        <?php #Marker Clustering js + css ?>
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.5/dist/MarkerCluster.Default.css"/>
        <link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.0.5/dist/MarkerCluster.css"/>
        <script src="https://unpkg.com/leaflet.markercluster@1.0.5/dist/leaflet.markercluster.js"></script>
        <script src="http://leaflet.github.io/Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>

        <?php #Code for importing KML files ?>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/leaflet-plugins/3.0.0/layer/vector/KML.js'></script>

        <?php #Custom js containing all Properties & kmls as well as custom icons for markers ?>
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
                bottom:0px;
                z-index:2000;
                height:85px;
                width:256px;
                background-image: url("http://www.mapperty.co/img/mapperty_white_beta.png");
                background-repeat: no-repeat;
                background-position: left bottom;
            }

            .leaflet-marker-icon.estate {
                border-radius: 16px;
            }
            .StageStyle { 
                stroke: #fff;
                fill: #cfcfcf;
                stroke-width: 1;  
            }
            .StageStyle:hover { 
                stroke-width: 2;
            }

        </style>
    </head>
    <body>
        <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r;
                i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments);
                }, i[r].l = 1 * new Date();
                a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0];
                a.async = 1;
                a.src = g;
                m.parentNode.insertBefore(a, m);
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-100281918-1', 'auto');
            ga('send', 'pageview');
        </script>

        <div id='map' class="container-fluid"></div>
        <?php if (filter_input(INPUT_GET, 'logo', FILTER_SANITIZE_STRING) === 'true') {
            echo "<div id='logo'></div>";
        } ?>
        <?php if (filter_input(INPUT_GET, 'search', FILTER_SANITIZE_STRING) === 'true') {
            echo "<script src='js/geoSearch_include.js' type='text/javascript'></script>";
        } ?>

        <?php #Main javascript to load leaflet components and add propery markers from PropertyList.js ?>
        <script> 
            window.onload = function () {
                var map = L.map('map').setView(Start_LatLong, 14);

                
        <?php if (filter_input(INPUT_GET, 'search', FILTER_SANITIZE_STRING) == 'true') {
            echo "var geoSearchController = new L.Control.GeoSearch({";
            echo "provider: new L.GeoSearch.Provider.Google()";
            echo "}).addTo(map);";
        } ?>

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: '<a href="http://mapperty.co">Mapperty</a> | <a href="http://openstreetmap.org">OpenStreetMap</a> | <a href="http://mapbox.com">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox.light',
                    accessToken: 'sk.eyJ1IjoiYXdyYXR0ZW4iLCJhIjoiY2ozYmRhanNoMDFoaTJ3cGg5MWx2MWpkeCJ9.-GFKfnIKHDY83-nD8LLi9g'
                }).addTo(map);
               
               StageList[0].addTo(map);
               

        </script>

        <?php #jQuery first, then Tether, then Bootstrap JS. ?>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>
