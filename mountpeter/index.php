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
               
    //var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
    
                var Stage1 = L.polygon([
                    [-17.04210460046319, 145.7405432814109],
                    [-17.04202782650531, 145.7407450527677],
                    [-17.04232793901254, 145.7408939775661],
                    [-17.04253346910466, 145.7409992597714],
                    [-17.04267787093948, 145.7410738032938],
                    [-17.04286214863049, 145.7412000769798],
                    [-17.04295646589733, 145.7412839365174],
                    [-17.04313899479184, 145.7414086920796],
                    [-17.04322458786218, 145.7414611662423],
                    [-17.04326842193094, 145.741484954427],
                    [-17.04329798923852, 145.7415223939886],
                    [-17.04331445863673, 145.741566847724],
                    [-17.04331681985466, 145.7416153192195],
                    [-17.04330342917784, 145.7416720989787],
                    [-17.04329474383168, 145.7416960706237],
                    [-17.04343400246279, 145.7417509462226],
                    [-17.0434427060974, 145.7417267849399],
                    [-17.04346601583566, 145.7416798225924],
                    [-17.04350050921262, 145.741643492188],
                    [-17.04354571591922, 145.7416222444353],
                    [-17.04359412932935, 145.7416195652824],
                    [-17.04364326517734, 145.7416323206728],
                    [-17.0437526065716, 145.7416751471208],
                    [-17.04382530169219, 145.7414726959697],
                    [-17.04433976111958, 145.7400580532705],
                    [-17.04408651866972, 145.7399583715696],
                    [-17.04411729090473, 145.7398732991957],
                    [-17.04373248123324, 145.7397223746247],
                    [-17.04376619288572, 145.7396300242393],
                    [-17.04336301049073, 145.7394710613881],
                    [-17.04333148265135, 145.739556903989],
                    [-17.04305866924226, 145.7394491003902],
                    [-17.04302868254463, 145.739532628547],
                    [-17.04277420984217, 145.7394335804678],
                    [-17.04263604592794, 145.739404737259],
                    [-17.04236807176982, 145.7401409752241],
                    [-17.04232093132374, 145.7401630416431],
                    [-17.04225267253366, 145.7401364954835],
                    [-17.04210460046319, 145.7405432814109]
                ], {color: 'red'}).addTo(map);
              

        </script>

        <?php #jQuery first, then Tether, then Bootstrap JS. ?>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>
