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
            
            .leaflet-popup-content { 
                width:auto !important; 
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
        
        <div id="feature_infos"> <span id="heading">Clickresult: </span>
        <span id="info"></span>

        
        <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Virtual Tour</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe name='VRFrame' style="width:100%; height:80vh; display:block;" frameBorder="0"></iframe>
                    </div>

                </div>
            </div>
        </div>
        
        <?php #Main javascript to load leaflet components and add propery markers from PropertyList.js ?>
        <script>
            window.onload = function () {
//                var map = L.map('map').setView(Start_LatLong, Start_Zoom);


                
// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html
// Marker Pin: https://codepen.io/zachdunn/pen/wapEam
// create the slippy map

                var default_marker = L.icon({
                    iconUrl: './img/marker.svg',
                    iconSize: [24, 24],
                    iconAnchor: [12, 12],
                    popupAnchor: [0, -12],
                    className: 'marker'
                });

                var map = L.map('map', {
                    minZoom: 1,
                    maxZoom: 4,
                    center: [0, 0],
                    zoom: 1,
                    crs: L.CRS.Simple,
                    attributionControl: false
                });

                L.control.attribution({
                    prefix: false
                }).addAttribution('<a href="http://mapperty.co">Mapperty</a>').addTo(map);

                // dimensions of the image
                var w = 986 * 2, h = 1393 * 2, url = 'img/OPAL_Floorplan.svg';

                // calculate the edges of the image, in coordinate space
                var southWest = map.unproject([0, h], map.getMaxZoom() - 1);
                var northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
                var bounds = new L.LatLngBounds(southWest, northEast);

                // add the image overlay, 
                // so that it covers the entire map
                // L.imageOverlay('img/OPAL_Floorplan_ZONES.svg', bounds).addTo(map);

                L.imageOverlay('img/OPAL_Floorplan.png', bounds).addTo(map);
                L.imageOverlay('img/Background.svg', bounds).addTo(map);
                
                Marker_Group = L.layerGroup();
                
                var garage_marker = L.marker([-276.5, 164.75], { icon: default_marker });
                garage_marker.bindPopup("Double Garage", { maxWidth: 1024 });
                Marker_Group.addLayer(garage_marker);
                
                var bed4_marker = L.marker([-227.5, 76.75], { icon: default_marker });
                bed4_marker.bindPopup("<img src='img/bed4.jpg'>", { maxWidth: 1024 });
                Marker_Group.addLayer(bed4_marker);
                
                var bed3_marker = L.marker([-166, 169.25], { icon: default_marker });
                bed3_marker.bindPopup("<img src='img/bed4.jpg'>", { maxWidth: 1024 });
                Marker_Group.addLayer(bed3_marker);
                
                var bed2_marker = L.marker([-95.5, 169.25], { icon: default_marker });
                bed2_marker.bindPopup("<img src='img/bed4.jpg'>", { maxWidth: 1024 });
                Marker_Group.addLayer(bed2_marker);
                
                var bed1_marker = L.marker([-83, 141], { icon: default_marker });
                bed1_marker.bindPopup("<img src='img/bed4.jpg'>", { maxWidth: 1024 });
                Marker_Group.addLayer(bed1_marker);
                
                var kitchen_marker = L.marker([-179.75, 103.25], { icon: default_marker });
                
                var patio_marker = L.marker([-145, 80], { icon: default_marker });
                
               

//                L.imageOverlay(url, bounds).addTo(map);
//                var marker = L.marker(L.latLng(a[0], a[1]), { icon: icon }, { title: title });
//                map.on('zoomend', function () {
//                    if (map.getZoom() > map.getMinZoom() + 1 ) {
//                        map.addLayer(Marker_Group);
//                    }
//                    if (map.getZoom() === map.getMinZoom()) {
//                    map.addLayer(Stages);
//                    //map.addLayer(Stage_Markers);
//                    map.removeLayer(Marker_Group);
//                    }
//                });


                map.addLayer(Marker_Group);

                // tell leaflet that the map is exactly as big as the image
                map.setMaxBounds(bounds);


                // pixel coords
//                var m = {
//                    x: 1250,
//                    y: 850
//                };

//            map.on('click', function(e) {
//                alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng);
//            });




            };
        </script>

        <?php #jQuery first, then Tether, then Bootstrap JS. ?>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>
