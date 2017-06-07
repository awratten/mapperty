// Kenfrost Homes - List of Estates with Logos and Office locations
// 1/06/2017

var Start_LatLong = [-17.04210460046319, 145.7405432814109];
var Start_Zoom = 12;

var Def_IconSize = [128, 64];
var Def_IconAnchor = [64, 64];
var Def_PopupAnchor = [0, -64];
var Def_Class = "estate";

var Icon_Logo = L.icon({
    //iconUrl: './img/logo_icon.png',
    //iconSize: Def_IconSize,
    //iconAnchor: Def_IconAnchor,
    //popupAnchor: Def_PopupAnchor,
    //className: Def_Class
});

/*
 var addressPoints = [
 [-16.83142, 145.69413, "<a href='#/' target='_blank'><button class='btn'>Visit Website</button></a>", Icon_Logo]
 
 ];
 */

/*
 var kmlList = [
 ["./kml/Placeholder.kml"]
 ];
 */






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
], {className: 'StageStyle'}).bindPopup("<strong>Stage 1</strong>");



var StageList = [
    [Stage1]
    //[Stage2],
    //[Stage3]
];