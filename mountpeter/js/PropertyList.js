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

var Stages = L.layerGroup();

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
], {className: 'StageStyle'}).addLayer(Stages).bindPopup('Stage 1');

var Stage2 = L.polygon([
    [-17.04210460046319, 145.7405432814109],
    [-17.0416064564128, 145.7402962148309],
    [-17.0414941202651, 145.7402163169259],
    [-17.04136051495728, 145.7401239085925],
    [-17.04130733138064, 145.7399784869966],
    [-17.04137330666189, 145.7397101580025],
    [-17.04143242227276, 145.7394628921285],
    [-17.0414649472615, 145.739326260049],
    [-17.04149589714292, 145.7391991098802],
    [-17.0415225211879, 145.739085861302],
    [-17.04169587249487, 145.7383675001801],
    [-17.04172564608287, 145.7382948644595],
    [-17.04201713173587, 145.7384113721906],
    [-17.04215230273622, 145.7380415054675],
    [-17.04340785583872, 145.7383860415528],
    [-17.04333255032637, 145.738681001729],
    [-17.04329140324224, 145.7388112537752],
    [-17.04314838318608, 145.7392031452552],
    [-17.04310359735831, 145.7393258296394],
    [-17.04305864830168, 145.7394490704825],
    [-17.04302861810738, 145.7395326297313],
    [-17.04277420984217, 145.7394335804678],
    [-17.04263604592794, 145.739404737259],
    [-17.04236807176982, 145.7401409752241],
    [-17.04232093132374, 145.7401630416431],
    [-17.04225267253366, 145.7401364954835],
    [-17.04210460046319, 145.7405432814109]
], {className: 'StageStyle'}).addLayer(Stages).bindPopup('Stage 2');

var Stage3 = L.polygon([
    [-17.04433970078141, 145.7400581816467],
    [-17.04440372851536, 145.7398823348051],
    [-17.04444609256062, 145.739898937657],
    [-17.04459145664449, 145.7394991709448],
    [-17.0448535933833, 145.7396022554139],
    [-17.04494957044721, 145.7393387196415],
    [-17.04496586429354, 145.739344876978],
    [-17.04511137215459, 145.738945211259],
    [-17.04462111359858, 145.7387524396399],
    [-17.04448571542703, 145.7386992482653],
    [-17.04433933468328, 145.7386414483255],
    [-17.04414508922842, 145.7385884007523],
    [-17.04386181301783, 145.7385105713031],
    [-17.04372560487014, 145.7384732009219],
    [-17.04354776736338, 145.7384244762018],
    [-17.04340799804449, 145.738385972886],
    [-17.04333262133372, 145.7386812437695],
    [-17.04329148335961, 145.7388108676744],
    [-17.0430586557918, 145.7394490923678],
    [-17.04333157970534, 145.7395567738051],
    [-17.04336283041101, 145.7394709942661],
    [-17.04376594087312, 145.7396301524798],
    [-17.04373241659548, 145.7397222770582],
    [-17.04411717633556, 145.7398732006556],
    [-17.04408655984629, 145.7399583173613],
    [-17.04433970078141, 145.7400581816467]
], {className: 'StageStyle'}).addLayer(Stages).bindPopup('Stage 3');



var LotStage1 = L.layerGroup();

//LotStage1.addLayer( marker );