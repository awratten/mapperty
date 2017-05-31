//An extract of address points from the LINZ bulk extract: http://www.linz.govt.nz/survey-titles/landonline-data/landonline-bde
//Should be this data set: http://data.linz.govt.nz/#/layer/779-nz-street-address-electoral/

var Def_IconSize = [128,64];
var Def_IconAnchor = [64,64];
var Def_PopupAnchor = [0,-64];

var SA_Logo = L.icon({
    iconUrl: 'http://mapperty.co/img/estate_SheldonAve_icon.png',
    iconSize: Def_IconSize,
    iconAnchor: Def_IconAnchor,
    popupAnchor: Def_PopupAnchor
});

var addressPoints = [
[-37.8839, 175.3745188667, "<a href='http://kenfrosthomes.com.au/ainslie-place-north-point/' target='_blank'><button class='btn'>Visit Website</button></a>", SA_Logo],
[-37.8869090667, 175.3657417333, "486", SA_Logo],
[-37.8894207167, 175.4015351167, "807", SA_Logo],
[-37.8927369333, 175.4087452333, "899", SA_Logo],
[-37.90585105, 175.4453463833, "1273", SA_Logo],
[-37.9064188833, 175.4441556833, "1258", SA_Logo],
[-37.90584715, 175.4463564333, "1279", SA_Logo],
[-37.9033391333, 175.4244005667, "1078", SA_Logo],
[-37.9061991333, 175.4492620333, "1309", SA_Logo],
[-37.9058955167, 175.4445613167, "1261", SA_Logo],
[-37.88888045, 175.39146475, "734", SA_Logo],
[-37.8950811333, 175.41079175, "928", SA_Logo]
];
