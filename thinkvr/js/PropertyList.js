// Kenfrost Homes - List of Estates with Logos and Office locations
// 1/06/2017

var Start_LatLong = [-16.92412, 145.73986];
var Start_Zoom = 12;

var Def_IconSize = [128, 64];
var Def_IconAnchor = [64, 64];
var Def_PopupAnchor = [0, -64];
var Def_Class = "estate";

var Icon_Logo = L.icon({
    iconUrl: './img/estate_AinsliePlace_icon.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor,
    className: Def_Class
});


var addressPoints = [
    [-16.83142, 145.69413, "<a href='http://kenfrosthomes.com.au/ainslie-place-north-point/' target='_blank'><button class='btn'>Visit Website</button></a>"]
    
];


var kmlList = [
  ["./kml/HMB.kml"],  
  ["./kml/AP.kml"],
  ["./kml/MountPeterEstate.kml"],
  ["./kml/SheldonAvenue.kml"],
  ["./kml/RainforestEdge.kml"]
];