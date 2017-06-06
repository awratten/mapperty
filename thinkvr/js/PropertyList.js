// Kenfrost Homes - List of Estates with Logos and Office locations
// 1/06/2017

var Start_LatLong = [-16.92412, 145.73986];
var Start_Zoom = 12;

var Def_IconSize = [32, 32];
var Def_IconAnchor = [32, 32];
var Def_PopupAnchor = [0, 0];
var Def_Class = "estate";

var Icon_Logo = L.icon({
    iconUrl: './img/Matterport-logo-white-stroke.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor,
    className: Def_Class
});


var addressPoints = [
    [-16.9255144,145.77569340000002, "<a href='https://www.thinkvirtualreality.com.au/tour/citi-central-offices-3d-vr-tour/fullscreen/' target='_blank'><button class='btn'>Visit Website</button></a>", Icon_Logo],
    

];


var kmlList = [
  ["./kml/Placeholder.kml"]
];