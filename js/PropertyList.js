//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/

var Def_IconSize = [128, 64];
var Def_IconAnchor = [64, 64];
var Def_PopupAnchor = [0, -64];

var AP_Logo = L.icon({
    iconUrl: '/img/estate_AinsliePlace_icon.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor

});
var HMB_Logo = L.icon({
    iconUrl: '/img/estate_HalfMoonBay_icon.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor
});
var MP_Logo = L.icon({
    iconUrl: '/img/estate_MountPeter_icon.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor
});
var RE_Logo = L.icon({
    iconUrl: '/img/estate_RainforestEdge_icon.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor
});
var SA_Logo = L.icon({
    iconUrl: '/img/estate_SheldonAve_icon.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor
});


var addressPoints = [
    [-16.83142, 145.69413, "<a href='http://kenfrosthomes.com.au/ainslie-place-north-point/' target='_blank'><button class='btn'>Visit Website</button></a>", AP_Logo],
    [-17.04103, 145.73976, "<a href='http://mtpeterestate.com.au' target='_blank'><button class='btn'>Visit Website</button></a>", MP_Logo],
    [-16.7963, 145.7083, "<a href='http://kenfrosthomes.com.au/half-moon-bay/' target='_blank'><button class='btn'>Visit Website</button></a>", HMB_Logo],
    [-16.98674, 145.73359, "<a href='http://rainforest-edge.com.au' target='_blank'><button class='btn'>Visit Website</button></a>", RE_Logo],
    [-16.98908, 145.74497, "<a href='http://sheldonavenue.com.au' target='_blank'><button class='btn'>Visit Website</button></a>", SA_Logo]
];


var kmlList = [
  ["/kml/HMB.kml"],  
  ["/kml/AP.kml"],
  ["/kml/MountPeterEstate.kml"],
  ["/kml/SheldonAvenue.kml"]
];