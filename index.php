<html>
  <head>
  <title>Mapperty - Easy Property Listing Website</title>
  

  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>

    <style>
      #map { height: 800px;}
    </style>
  </head>
  <body>

    <div id="map"></div>

    
    
    <script>
    var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
    });
    </script>
  </body>
</html>
