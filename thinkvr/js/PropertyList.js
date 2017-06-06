// Kenfrost Homes - List of Estates with Logos and Office locations
// 1/06/2017

var Start_LatLong = [-16.92412, 145.73986];
var Start_Zoom = 12;

var Def_IconSize = [32, 32];
var Def_IconAnchor = [Def_IconSize[0], Def_IconSize[1]];
var Def_PopupAnchor = [((Def_IconSize[0])/2)*(-1), Def_IconSize[1]*(-1)];
var Def_Class = "estate";

var Icon_Logo = L.icon({
    iconUrl: './img/Matterport-logo-white-stroke.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor,
    className: Def_Class
});

var addressPoints = [
    [-16.9255144,145.77569340000002, "<a href='https://www.thinkvirtualreality.com.au/tour/citi-central-offices-3d-vr-tour/fullscreen/' target='_blank'><button class='btn' data-toggle='modal' data-target='#VRModal'>View Virtual Tour</button></a>", Icon_Logo],
    [-16.9275,145.777778, "<a href='https://www.thinkvirtualreality.com.au/tour/cairns-convention-centre-meeting-rooms-1-7-3d-vr-tour/fullscreen/' target='_blank'><button class='btn' data-toggle='modal' data-target='#VRModal'>View Virtual Tour</button></a>", Icon_Logo],
    [-16.9009497,145.74283779999996, "<a href='https://www.thinkvirtualreality.com.au/tour/137-collins-avenue-edge-hill-qld-4870/fullscreen/' target='_blank'><button class='btn' data-toggle='modal' data-target='#VRModal'>View Virtual Tour</button></a>", Icon_Logo],
    [-16.914489,145.75140250000004, "<a href='https://www.thinkvirtualreality.com.au/tour/39-anderson-street-manunda-qld-4870/fullscreen/' target='_blank'><button class='btn' data-toggle='modal' data-target='#VRModal'>View Virtual Tour</button></a>", Icon_Logo],
    [-16.8987692,145.73216649999995, "<a href='https://www.thinkvirtualreality.com.au/tour/47-49-heavey-cres-whitfield/fullscreen/' target='_blank'><button class='btn' data-toggle='modal' data-target='#VRModal'>View Virtual Tour</button></a>", Icon_Logo],
    [-16.9524038,145.7498428, "<a href='https://www.thinkvirtualreality.com.au/tour/18-spotto-close-woree-qld-4868/fullscreen/' target='_blank'><button class='btn' data-toggle='modal' data-target='#VRModal'>View Virtual Tour</button></a>", Icon_Logo],
    [-16.9407748,145.74167220000004, "<a href='https://www.thinkvirtualreality.com.au/tour/suite-4-466-mulgrave-road-earlville-cairns-corner-thomson-street/fullscreen/' target='_blank'><button class='btn' data-toggle='modal' data-target='#VRModal'>View Virtual Tour</button></a>", Icon_Logo],

];


var kmlList = [
  ["./kml/Placeholder.kml"]
];