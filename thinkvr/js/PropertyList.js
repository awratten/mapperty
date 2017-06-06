// Kenfrost Homes - List of Estates with Logos and Office locations
// 1/06/2017

var Start_LatLong = [-16.92412, 145.73986];
var Start_Zoom = 12;

var Def_IconSize = [32, 32];
var Def_IconAnchor = [32, 32];
var Def_PopupAnchor = [0, -32];
var Def_Class = "estate";

var Icon_Logo = L.icon({
    iconUrl: './img/Matterport-logo-white-stroke.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor,
    className: Def_Class
});


var addressPoints = [
    [-17.0082434, 145.73571570000001, "<a href='#/' target='_blank'><button class='btn'>Visit Website</button></a>", Icon_Logo]
    

];


var kmlList = [
  ["./kml/Placeholder.kml"]
];