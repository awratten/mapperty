// Kenfrost Homes - List of Estates with Logos and Office locations
// 1/06/2017

var Start_LatLong = [-17.04210460046319, 145.7405432814109];

var Def_IconSize = [140, 50];
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

var Stage1_icon = L.icon({
    iconUrl: './img/stage1.png',
    iconSize: Def_IconSize
});
var Stage2_icon = L.icon({
    iconUrl: './img/stage2.png',
    iconSize: Def_IconSize
});
var Stage3_icon = L.icon({
    iconUrl: './img/stage3.png',
    iconSize: Def_IconSize
});

var C_Radius = 0.5;

/*
 var addressPoints = [
 [-16.83142, 145.69413, "<a href='#/' target='_blank'><button class='btn btn-success'>Visit Website</button></a>", Icon_Logo]
 
 ];
 */

/*
 var kmlList = [
 ["./kml/Placeholder.kml"]
 ];
 */

var Stage_Markers = L.layerGroup();

var Estate_Border = L.polyline([
    [-17.04386385450891, 145.7385106313772],
    [-17.04414657921998, 145.7385883846923],
    [-17.0443350620993, 145.7386398550811],
    [-17.04784722952777, 145.7400210089253],
    [-17.04814185884229, 145.7400263149377],
    [-17.04792116465379, 145.7412954366004],
    [-17.04776673353354, 145.7421865126492],
    [-17.04777738736895, 145.7437575004039],
    [-17.05043250399463, 145.7460098434475],
    [-17.05151396492658, 145.7491096613625],
    [-17.05151130066974, 145.7491924985409],
    [-17.05148068560845, 145.7492495787672],
    [-17.05142744389958, 145.7492788138614],
    [-17.05135490319759, 145.7492767233734],
    [-17.04806443504554, 145.7470302062303],
    [-17.04784680222, 145.7468062231717],
    [-17.04777272553541, 145.7465368282984],
    [-17.04786121435609, 145.7462641372106],
    [-17.04793895101346, 145.7461496664319],
    [-17.04787104523456, 145.7460752257488],
    [-17.04779141565741, 145.7460664341976],
    [-17.04773577977094, 145.7460802207928],
    [-17.04665298768448, 145.7462148046179],
    [-17.04656539470784, 145.746170767276],
    [-17.04603222356489, 145.7470608409602],
    [-17.0455883891396, 145.7473437321017],
    [-17.04499006801926, 145.7474518451495],
    [-17.04484077290228, 145.7473475389053],
    [-17.04454447441531, 145.7475834318766],
    [-17.04438864585853, 145.7473745797192],
    [-17.04422252955046, 145.7474860314934],
    [-17.04344019403657, 145.7478999944501],
    [-17.04351462762194, 145.7481645023557],
    [-17.04287145948347, 145.748376934648],
    [-17.04289226422343, 145.7484237643488],
    [-17.04348914185194, 145.7487582041406],
    [-17.04318300333696, 145.7493687562066],
    [-17.04242859171697, 145.7489741317114],
    [-17.04237448292469, 145.7489955544932],
    [-17.04228824529858, 145.7487237524915],
    [-17.0421774324204, 145.748744800511],
    [-17.04178779923145, 145.7485368490564],
    [-17.04147202172247, 145.7474777596993],
    [-17.04192130249107, 145.7472009616792],
    [-17.04177816921275, 145.7468087068301],
    [-17.04127944334855, 145.7465258544768],
    [-17.04099566325693, 145.7455423582975],
    [-17.04139019316193, 145.7454162732905],
    [-17.04128663149125, 145.7450714689015],
    [-17.04150183159128, 145.7448455727649],
    [-17.04156840031086, 145.7448215880442],
    [-17.04168870454219, 145.7445882996946],
    [-17.04167280137699, 145.744530183875],
    [-17.04209722117484, 145.7437744598769],
    [-17.04202942779276, 145.7434509583761],
    [-17.04117012928623, 145.7429675699725],
    [-17.0408794348114, 145.7428241174765],
    [-17.04048244930037, 145.7426709146048],
    [-17.04014574567759, 145.7424967340591],
    [-17.03991740812262, 145.7426373023072],
    [-17.03960528690686, 145.7425280065868],
    [-17.04003203280465, 145.7422096750771],
    [-17.04011761473647, 145.742145811928],
    [-17.04038876803502, 145.7419552724041],
    [-17.04041929723524, 145.741926481579],
    [-17.04061248153707, 145.741751119497],
    [-17.04087722789494, 145.741478095896],
    [-17.04093862386491, 145.7413642924136],
    [-17.0409996810723, 145.7412376134338],
    [-17.04104772561167, 145.7411025591382],
    [-17.04107074673424, 145.7410208983825],
    [-17.04113294601322, 145.740765755175],
    [-17.04130677961332, 145.7399765121326],
    [-17.04149562963309, 145.7392006811839],
    [-17.04169444534691, 145.7383709319466],
    [-17.04174753073938, 145.7382407709027],
    [-17.04205979946414, 145.7380164575471],
    [-17.04386385450891, 145.7385106313772]
], {color: '#005587'});


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
], {className: 'StageStyle'}).bindPopup('Stage 1');
Stage_Markers.addLayer(new L.marker(Stage1.getBounds().getCenter(), {icon: Stage1_icon}));

//var marker = L.marker(L.latLng(a[0], a[1]), { icon: icon }, { title: title });


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
], {className: 'StageStyle'}).bindPopup('Stage 2');

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
], {className: 'StageStyle'}).bindPopup('Stage 3');

var Stages = L.layerGroup([Stage1, Stage2, Stage3]);
var LotStage_Circles = L.layerGroup();
var LotStage1 = L.layerGroup();

//LotStage1.addLayer( marker );

//Display Village //////////////////////////////////////////////////////////////

var imageUrl = 'http://mtpeterestate.com.au/app/uploads/2017/06/MP_Display.png',
    imageBounds = [[-17.04325927401808, 145.7411967302513], [-17.04404625430469, 145.7399683290048]];
//L.imageOverlay(imageUrl, imageBounds).addTo(map);
var Display_Overlay = L.imageOverlay(imageUrl, imageBounds);

LotStage1.addLayer(Display_Overlay);

//Stage 1 Lots /////////////////////////////////////////////////////////////////

var L101 = L.polygon([
    [-17.04234637826514, 145.7403295298242],
    [-17.04224391616437, 145.7406109360917],
    [-17.04210506230904, 145.7405430522335],
    [-17.04220290009643, 145.740272855363],
    [-17.04234637826514, 145.7403295298242]
], {className: 'LotStyle'}).bindPopup("<center><strong>Lot 101 Bulleringa Loop</strong></center>");
LotStage1.addLayer(L101);
LotStage_Circles.addLayer(new L.circle(L101.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L102 = L.polygon([
    [-17.04247362272434, 145.7403788555922],
    [-17.04236669998549, 145.7406723866413],
    [-17.04224399194547, 145.7406112572559],
    [-17.04234635035691, 145.7403295768615],
    [-17.04247362272434, 145.7403788555922]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 102 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=102" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L102);
LotStage_Circles.addLayer(new L.circle(L102.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L103 = L.polygon([
    [-17.0425920929727, 145.7404261828037],
    [-17.04248101214428, 145.740730814276],
    [-17.04236702280388, 145.7406723866063],
    [-17.04247357898039, 145.7403788848985],
    [-17.0425920929727, 145.7404261828037]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 103 Bulleringa Loop</strong></center>');
LotStage1.addLayer(L103);
LotStage_Circles.addLayer(new L.circle(L103.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L104 = L.polygon([
    [-17.04271030310246, 145.7404721021273],
    [-17.04259500143691, 145.7407902317397],
    [-17.04248101209783, 145.7407311284898],
    [-17.04259208893678, 145.7404261432249],
    [-17.04271030310246, 145.7404721021273]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 104 Bulleringa Loop</strong></center>');
LotStage1.addLayer(L104);
LotStage_Circles.addLayer(new L.circle(L104.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L105 = L.polygon([
    [-17.04283714390092, 145.7405225968581],
    [-17.04271674062195, 145.7408520367372],
    [-17.04259500134834, 145.7407902316413],
    [-17.04271027590104, 145.7404720740786],
    [-17.04283714390092, 145.7405225968581]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 105 Bulleringa Loop</strong></center>');
LotStage1.addLayer(L105);
LotStage_Circles.addLayer(new L.circle(L105.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L106 = L.polygon([
    [-17.04296376020508, 145.7405721211752],
    [-17.04283880276533, 145.740915530605],
    [-17.04271706350589, 145.7408520366895],
    [-17.04283718162646, 145.7405227332839],
    [-17.04296376020508, 145.7405721211752]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 106 Bulleringa Loop</strong></center>');
LotStage1.addLayer(L106);
LotStage_Circles.addLayer(new L.circle(L106.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L107 = L.polygon([
    [-17.0430286167906, 145.7395327368086],
    [-17.04298535800289, 145.7396514668575],
    [-17.04273187238666, 145.7395518137656],
    [-17.04277495428417, 145.7394339631446],
    [-17.0430286167906, 145.7395327368086]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 107 Annan Bend</strong></center>');
LotStage1.addLayer(L107);
LotStage_Circles.addLayer(new L.circle(L107.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L108 = L.polygon([
    [-17.04298528710298, 145.7396514702811],
    [-17.04293421077012, 145.739791878901],
    [-17.04268072311264, 145.7396923286507],
    [-17.04273183241441, 145.7395517020204],
    [-17.04298528710298, 145.7396514702811]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 108 Annan Bend</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=108" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L108);
LotStage_Circles.addLayer(new L.circle(L108.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L109 = L.polygon([
    [-17.04293420674973, 145.7397919649612],
    [-17.04288957078567, 145.739915047306],
    [-17.04263569657049, 145.7398152283697],
    [-17.0426807654963, 145.7396920287141],
    [-17.04293420674973, 145.7397919649612]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 109 Annan Bend</strong></center>');
LotStage1.addLayer(L109);
LotStage_Circles.addLayer(new L.circle(L109.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L110 = L.polygon([
    [-17.0428895591715, 145.7399151062629],
    [-17.04283832264821, 145.7400560098888],
    [-17.04258470541759, 145.7399559649641],
    [-17.04263593090166, 145.7398153509087],
    [-17.0428895591715, 145.7399151062629]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 110 Annan Bend</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=110" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L110);
LotStage_Circles.addLayer(new L.circle(L110.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));



var L111 = L.polygon([
    [-17.0428382543555, 145.7400559689761],
    [-17.04279344648912, 145.7401788206434],
    [-17.04254009264235, 145.7400787390113],
    [-17.04258477451201, 145.739956164426],
    [-17.0428382543555, 145.7400559689761]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 111 Annan Bend</strong></center>');
LotStage1.addLayer(L111);
LotStage_Circles.addLayer(new L.circle(L111.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));

var L112 = L.polygon([
    [-17.04279349656123, 145.740178808341],
    [-17.04273922569247, 145.7403280656494],
    [-17.04251986143174, 145.7402414360062],
    [-17.04249878294426, 145.7401929361225],
    [-17.04254009262681, 145.7400787389694],
    [-17.04279349656123, 145.740178808341]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 112 Annan Bend</strong></center>');
LotStage1.addLayer(L112);
LotStage_Circles.addLayer(new L.circle(L112.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));

var L113 = L.polygon([
    [-17.04306609198562, 145.7402859564975],
    [-17.04302457354527, 145.7404002461279],
    [-17.04297791016173, 145.7404219244495],
    [-17.04273924253905, 145.7403281143145],
    [-17.04279349656237, 145.7401788083387],
    [-17.04306609198562, 145.7402859564975]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 113 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=113" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L113);
LotStage_Circles.addLayer(new L.circle(L113.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L114 = L.polygon([
    [-17.04279341254516, 145.7401787068786],
    [-17.04284169547716, 145.7400467140576],
    [-17.04311404081468, 145.7401543074473],
    [-17.04306609198342, 145.7402858435126],
    [-17.04279341254516, 145.7401787068786]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 114 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=114" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L114);
LotStage_Circles.addLayer(new L.circle(L114.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L115 = L.polygon([
    [-17.04315887098351, 145.7400310774763],
    [-17.04311409897408, 145.7401542499543],
    [-17.04284169547716, 145.7400467140576],
    [-17.04288638619399, 145.7399238470239],
    [-17.04315887098351, 145.7400310774763]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 115 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=115" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L115);
LotStage_Circles.addLayer(new L.circle(L115.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L116 = L.polygon([
    [-17.04288639837804, 145.7399237995992],
    [-17.0429310337777, 145.7398006589857],
    [-17.04320347104028, 145.7399081603476],
    [-17.04315889153296, 145.7400309565152],
    [-17.04288639837804, 145.7399237995992]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 116 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=116" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L116);
LotStage_Circles.addLayer(new L.circle(L116.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L117 = L.polygon([
    [-17.04293115053246, 145.7398007209279],
    [-17.04297901206969, 145.7396690418818],
    [-17.04325162130208, 145.7397763499191],
    [-17.0432035633671, 145.7399080861814],
    [-17.04293115053246, 145.7398007209279]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 117 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=117" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L117);
LotStage_Circles.addLayer(new L.circle(L117.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L118 = L.polygon([
    [-17.04297890848859, 145.7396690646113],
    [-17.04301889566879, 145.7395592536197],
    [-17.04329159025066, 145.7396664528609],
    [-17.04325143586491, 145.7397763465905],
    [-17.04297890848859, 145.7396690646113]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 118 Bulleringa Loop</strong></center>');
LotStage1.addLayer(L118);
LotStage_Circles.addLayer(new L.circle(L118.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L119 = L.polygon([
    [-17.04301898490251, 145.7395592248034],
    [-17.04305866924229, 145.7394490536482],
    [-17.04333150756126, 145.739556702592],
    [-17.04329142310358, 145.7396664091028],
    [-17.04301898490251, 145.7395592248034]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 119 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=119" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L119);
LotStage_Circles.addLayer(new L.circle(L119.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L120 = L.polygon([
    [-17.04376597504557, 145.7396302103769],
    [-17.04371216510227, 145.739779059557],
    [-17.04343925401026, 145.7396720243708],
    [-17.04349376299549, 145.7395226217811],
    [-17.04376597504557, 145.7396302103769]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 120 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=120" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L120);
LotStage_Circles.addLayer(new L.circle(L120.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));

var L121 = L.polygon([
    [-17.04371214103294, 145.7397789365353],
    [-17.04366096984188, 145.7399200945817],
    [-17.04338819972265, 145.7398126793967],
    [-17.04343938287834, 145.7396720243675],
    [-17.04371214103294, 145.7397789365353]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 121 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=121" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L121);
LotStage_Circles.addLayer(new L.circle(L121.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L122 = L.polygon([
    [-17.04366096984188, 145.7399200945817],
    [-17.04360801441435, 145.7400647604291],
    [-17.04333536966324, 145.7399575848105],
    [-17.04338819972265, 145.7398126793967],
    [-17.04366096984188, 145.7399200945817]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 122 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=122" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L122);
LotStage_Circles.addLayer(new L.circle(L122.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L123 = L.polygon([
    [-17.04348105679335, 145.7400148272253],
    [-17.04338513256098, 145.7402785050322],
    [-17.0432732828755, 145.7402344556197],
    [-17.04325221551944, 145.7401863909348],
    [-17.04333535972393, 145.7399577481705],
    [-17.04348105679335, 145.7400148272253]
], {className: 'DisplayStyle'}).bindPopup('<center><strong>Lot 123 Mamu Link (Display)</strong></center>');
LotStage1.addLayer(L123);
//LotStage_Circles.addLayer(new L.circle(L123.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));

var L124 = L.polygon([
    [-17.04348113873402, 145.7400150149605],
    [-17.04360794790046, 145.740064787882],
    [-17.04351199354464, 145.7403283928809],
    [-17.04338526772471, 145.7402787109909],
    [-17.04348113873402, 145.7400150149605]
], {className: 'DisplayStyle'}).bindPopup('<center><strong>Lot 124 Mamu Link (Display)</strong></center>');
LotStage1.addLayer(L124);
//LotStage_Circles.addLayer(new L.circle(L124.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));

var L125 = L.polygon([
    [-17.04371783269743, 145.7401079583173],
    [-17.04362191404908, 145.7403715613796],
    [-17.04351198782112, 145.7403282534623],
    [-17.04360820433791, 145.7400649621297],
    [-17.04371783269743, 145.7401079583173]
], {className: 'DisplayStyle'}).bindPopup('<center><strong>Lot 125 Mamu Link - Keystart Homes Display</strong></center>');
LotStage1.addLayer(L125);
//LotStage_Circles.addLayer(new L.circle(L125.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L126 = L.polygon([
    [-17.04386140502665, 145.7401645928698],
    [-17.04377832055469, 145.7403935188677],
    [-17.04373206236159, 145.7404147407202],
    [-17.04362191875774, 145.7403716081471],
    [-17.04371792542803, 145.7401079554388],
    [-17.04386140502665, 145.7401645928698]
], {className: 'DisplayStyle'}).bindPopup('<center><strong>Lot 126 Mamu Link - David McCoy Homes Display</strong></center>');
LotStage1.addLayer(L126);
//LotStage_Circles.addLayer(new L.circle(L126.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L127 = L.polygon([
    [-17.04390634463569, 145.7400418135243],
    [-17.04386154068997, 145.7401645793009],
    [-17.04360811008006, 145.7400645742117],
    [-17.04365262583918, 145.7399420376484],
    [-17.04390634463569, 145.7400418135243]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 127 Homevale Entrance</strong></center>');
LotStage1.addLayer(L127);
LotStage_Circles.addLayer(new L.circle(L127.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L128 = L.polygon([
    [-17.04394651326553, 145.7399317957084],
    [-17.04390640854668, 145.740041799162],
    [-17.04365272813446, 145.7399417973215],
    [-17.04369277765462, 145.7398320217809],
    [-17.04394651326553, 145.7399317957084]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 128 Homevale Entrance</strong></center>');
LotStage1.addLayer(L128);
LotStage_Circles.addLayer(new L.circle(L128.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L129 = L.polygon([
    [-17.04398610576695, 145.7398217780805],
    [-17.04394646443082, 145.7399318049626],
    [-17.04369287716157, 145.7398319218998],
    [-17.04373241659548, 145.7397222770582],
    [-17.04398610576695, 145.7398217780805]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 129 Homevale Entrance</strong></center>');
LotStage1.addLayer(L129);
LotStage_Circles.addLayer(new L.circle(L129.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L130 = L.polygon([
    [-17.04403550520423, 145.7400988437586],
    [-17.04408643028238, 145.7399586280903],
    [-17.04433943056174, 145.740057940684],
    [-17.04428883390645, 145.7401985000864],
    [-17.04403550520423, 145.7400988437586]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 130 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=130" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L130);
LotStage_Circles.addLayer(new L.circle(L130.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L131 = L.polygon([
    [-17.04398771016849, 145.7402308113726],
    [-17.04403534983639, 145.7400991874517],
    [-17.0442885053762, 145.7401985001847],
    [-17.04424020846417, 145.7403304678655],
    [-17.04398771016849, 145.7402308113726]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 131 Homevale Entrance</strong></center>');
LotStage1.addLayer(L131);
//LotStage_Circles.addLayer(new L.circle(L131.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L132 = L.polygon([
    [-17.0439397417763, 145.7403624351792],
    [-17.04398738151496, 145.7402308112495],
    [-17.04424071027864, 145.7403308115149],
    [-17.04419307037523, 145.7404624354877],
    [-17.0439397417763, 145.7403624351792]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 132 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=132" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L132);
LotStage_Circles.addLayer(new L.circle(L132.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L133 = L.polygon([
    [-17.04419307039642, 145.7404624355674],
    [-17.04413979551202, 145.740607118734],
    [-17.0438867955769, 145.7405074619247],
    [-17.04393936367931, 145.7403624351646],
    [-17.04419307039642, 145.7404624355674]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 133 Homevale Entrance</strong></center>');
LotStage1.addLayer(L133);
//LotStage_Circles.addLayer(new L.circle(L133.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L134 = L.polygon([
    [-17.04414012404059, 145.7406074624375],
    [-17.04408554872137, 145.7407562473994],
    [-17.0438319332542, 145.7406569558103],
    [-17.04388651836874, 145.740508009676],
    [-17.04414012404059, 145.7406074624375]
], {className: 'CarStyle'}).bindPopup('<center>Car Park</center>');
LotStage1.addLayer(L134);


var L135 = L.polygon([
    [-17.04378271613257, 145.7407930060016],
    [-17.0438321519657, 145.7406568879272],
    [-17.04408594404427, 145.740756702186],
    [-17.0440359457219, 145.7408928203267],
    [-17.04378271613257, 145.7407930060016]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 135 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=135" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage1.addLayer(L135);
LotStage_Circles.addLayer(new L.circle(L135.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L136 = L.polygon([
    [-17.04373788011666, 145.7409161608915],
    [-17.04378285577849, 145.7407934159044],
    [-17.04403617011425, 145.7408932302795],
    [-17.04399142269005, 145.7410157365464],
    [-17.04373788011666, 145.7409161608915]
], {className: 'DisplayStyle'}).bindPopup('<center><strong>Lot 136 Homevale Ent. (Display)</strong></center>');
LotStage1.addLayer(L136);
//LotStage_Circles.addLayer(new L.circle(L136.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L137 = L.polygon([
    [-17.04399140327451, 145.7410162998654],
    [-17.04394671835918, 145.7411389358437],
    [-17.04369293558401, 145.7410392713175],
    [-17.04373781239059, 145.7409158979403],
    [-17.04399140327451, 145.7410162998654]
], {className: 'DisplayStyle'}).bindPopup('<center><strong>Lot 137 Homevale Entrance (Display)</strong></center>');
LotStage1.addLayer(L137);
//LotStage_Circles.addLayer( new L.circle( L137.getBounds().getCenter() , { className: 'LotCircle_SOLD' , radius: C_Radius}));


var Park_main = L.polygon([
    [-17.04299172574408, 145.7405830444646],
    [-17.04313181009445, 145.7405174971052],
    [-17.04317394217652, 145.7404013433168],
    [-17.0432203441313, 145.7403794830591],
    [-17.04338970468697, 145.7404462640172],
    [-17.04337061626052, 145.7404989531324],
    [-17.04340423505976, 145.7405121523719],
    [-17.04342345388217, 145.7404595392429],
    [-17.04367055701066, 145.7405564896368],
    [-17.04369176832785, 145.7406049629299],
    [-17.0434916835941, 145.7411547702153],
    [-17.0434660895876, 145.7412028265273],
    [-17.04342843510219, 145.741241121721],
    [-17.04337905835438, 145.7412601981148],
    [-17.04332655998854, 145.7412568002954],
    [-17.04327719844414, 145.7412356603761],
    [-17.04320498586356, 145.7411915078548],
    [-17.04311661895112, 145.7410907969957],
    [-17.04301369307014, 145.7410058205864],
    [-17.04302557051661, 145.7409807516798],
    [-17.04300057468651, 145.7409677740801],
    [-17.04298844787609, 145.740992780689],
    [-17.04283895351602, 145.7409154252356],
    [-17.04296374447517, 145.7405720420751],
    [-17.04299172574408, 145.7405830444646]
], {className: 'ParkStyle'}).bindPopup('Park');
LotStage1.addLayer(Park_main);


var CarPark = L.polygon([
    [-17.04394672839542, 145.7411388546272],
    [-17.04389392859769, 145.7412839108467],
    [-17.04364049035744, 145.7411841171605],
    [-17.04369311818859, 145.7410391804318],
    [-17.04394672839542, 145.7411388546272]
], {className: 'CarStyle'}).bindPopup('Car Park');
LotStage1.addLayer(CarPark);


var InfoCentre = L.polygon([
    [-17.04389374580918, 145.7412839101732],
    [-17.04382533935279, 145.7414727830665],
    [-17.04374199136405, 145.7414400695531],
    [-17.04368667724199, 145.7414081861207],
    [-17.04364932171369, 145.7413674272231],
    [-17.04362724489736, 145.7413161824844],
    [-17.04362232729767, 145.7412607707682],
    [-17.04363658491706, 145.7411949449491],
    [-17.04364051816256, 145.7411840168031],
    [-17.04389374580918, 145.7412839101732]
], {className: 'LotStyle'}).bindPopup('Information Centre');
LotStage1.addLayer(InfoCentre);


var Stage1_Border = L.polyline([
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
], {color: 'red'});
LotStage1.addLayer(Stage1_Border);


//Stage 2 Lots /////////////////////////////////////////////////////////////////

var LotStage2 = L.layerGroup();

var Park_Stage2 = L.polygon([
    [-17.04215199235708, 145.7380415940785],
    [-17.0420168947144, 145.7384111884329],
    [-17.04172588841131, 145.7382952483352],
    [-17.04174667275661, 145.7382430704062],
    [-17.04206053340776, 145.7380169579379],
    [-17.04215199235708, 145.7380415940785]
], {className: 'ParkStyle'}).bindPopup('Park');
LotStage2.addLayer(Park_Stage2);


var L201 = L.polygon([
    [-17.0422031666243, 145.7402729695083],
    [-17.04210458075431, 145.7405429358463],
    [-17.04198259324415, 145.7404817742162],
    [-17.04207613676561, 145.7402233882541],
    [-17.0422031666243, 145.7402729695083]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 201 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=201" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L201);
LotStage_Circles.addLayer(new L.circle(L201.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L202 = L.polygon([
    [-17.04207626208723, 145.740223397929],
    [-17.0419823547949, 145.7404816316995],
    [-17.04183932997474, 145.7404105159035],
    [-17.04192822399043, 145.7401652129358],
    [-17.04207626208723, 145.740223397929]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 202 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L202);
LotStage_Circles.addLayer(new L.circle(L202.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L203 = L.polygon([
    [-17.04192840329099, 145.7401651364958],
    [-17.04183905946136, 145.7404110914599],
    [-17.04169538593867, 145.7403398154249],
    [-17.04178040314869, 145.7401069850325],
    [-17.04192840329099, 145.7401651364958]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 203 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=203" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L203);
LotStage_Circles.addLayer(new L.circle(L203.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L204 = L.polygon([
    [-17.04167336890606, 145.7400391175766],
    [-17.04168794986077, 145.7400708694853],
    [-17.04178038596083, 145.7401068806165],
    [-17.04169533744473, 145.7403397459745],
    [-17.04160676657945, 145.740296068611],
    [-17.04149409762958, 145.7402160797386],
    [-17.04167336890606, 145.7400391175766]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 204 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=204" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L204);
LotStage_Circles.addLayer(new L.circle(L204.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L205 = L.polygon([
    [-17.04149424209544, 145.7402160793625],
    [-17.04136051071055, 145.7401238023448],
    [-17.04130744172947, 145.7399785363562],
    [-17.0416258558003, 145.7399389888014],
    [-17.04167334805413, 145.7400391309137],
    [-17.04149424209544, 145.7402160793625]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 205 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L205);
LotStage_Circles.addLayer(new L.circle(L205.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L206 = L.polygon([
    [-17.04166283094263, 145.7397852415041],
    [-17.04162581056257, 145.7399390118409],
    [-17.04130750588457, 145.7399785363566],
    [-17.04137329124038, 145.7397100763942],
    [-17.04166283094263, 145.7397852415041]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 206 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L206);
LotStage_Circles.addLayer(new L.circle(L206.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L207 = L.polygon([
    [-17.04169321034597, 145.7396579896044],
    [-17.04166283508311, 145.7397852128143],
    [-17.04137334532167, 145.7397100832938],
    [-17.04140417913105, 145.7395821291671],
    [-17.04169321034597, 145.7396579896044]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 207 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=207" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L207);
LotStage_Circles.addLayer(new L.circle(L207.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L208 = L.polygon([
    [-17.0417216787211, 145.7395393899557],
    [-17.04169306960619, 145.7396579901072],
    [-17.04140414326341, 145.7395820909673],
    [-17.04143215837842, 145.7394630792046],
    [-17.0417216787211, 145.7395393899557]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 208 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=208" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L208);
LotStage_Circles.addLayer(new L.circle(L208.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L209 = L.polygon([
    [-17.04175458220924, 145.7394020667581],
    [-17.04172167903028, 145.7395392443184],
    [-17.04143226238524, 145.7394629952492],
    [-17.04146499206742, 145.7393261556699],
    [-17.04175458220924, 145.7394020667581]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 209 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=209" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L209);
LotStage_Circles.addLayer(new L.circle(L209.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L210 = L.polygon([
    [-17.04178511835907, 145.7392749341514],
    [-17.04175470553003, 145.7394020808419],
    [-17.04146504269783, 145.7393261596232],
    [-17.04149589732366, 145.7391993224394],
    [-17.04178511835907, 145.7392749341514]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 210 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=210" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L210);
LotStage_Circles.addLayer(new L.circle(L210.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L211 = L.polygon([
    [-17.04181273701187, 145.7391607029942],
    [-17.04178514099272, 145.7392749452702],
    [-17.0414958164636, 145.739199218011],
    [-17.0415225105833, 145.7390855145125],
    [-17.04181273701187, 145.7391607029942]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 211 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L211);
//LotStage_Circles.addLayer(new L.circle(L211.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L212 = L.polygon([
    [-17.04184029129437, 145.7390465878773],
    [-17.04181273701187, 145.7391607029942],
    [-17.04152256436083, 145.7390855429496],
    [-17.04154999510098, 145.7389711733156],
    [-17.04184029129437, 145.7390465878773]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 212 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=212" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L212);
LotStage_Circles.addLayer(new L.circle(L212.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L213 = L.polygon([
    [-17.04187075107713, 145.7389192506028],
    [-17.04184029129437, 145.7390465878773],
    [-17.04155014752524, 145.7389712641498],
    [-17.04158098965751, 145.738844118488],
    [-17.04187075107713, 145.7389192506028]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 213 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L213);
//LotStage_Circles.addLayer(new L.circle(L213.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L214 = L.polygon([
    [-17.04190552691742, 145.7387733972068],
    [-17.04187075107713, 145.7389192506028],
    [-17.04158091020319, 145.738844118488],
    [-17.0416161969382, 145.7386975781516],
    [-17.04190552691742, 145.7387733972068]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 214 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L214);
//LotStage_Circles.addLayer(new L.circle(L214.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L215 = L.polygon([
    [-17.0416161969382, 145.7386975781516],
    [-17.04164694704257, 145.7385701757648],
    [-17.0419365602729, 145.7386458098881],
    [-17.04190544648672, 145.7387733996185],
    [-17.0416161969382, 145.7386975781516]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 215 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L215);
//LotStage_Circles.addLayer(new L.circle(L215.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L216 = L.polygon([
    [-17.04197240829843, 145.7385343828015],
    [-17.04194544347839, 145.7386086525887],
    [-17.04193663271551, 145.7386458004812],
    [-17.04164694704257, 145.7385701757648],
    [-17.04168350006127, 145.738418990133],
    [-17.04197240829843, 145.7385343828015]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 216 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L216);
//LotStage_Circles.addLayer(new L.circle(L216.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L217 = L.polygon([
    [-17.04168350006127, 145.738418990133],
    [-17.0416958569327, 145.7383673972514],
    [-17.04172574695383, 145.7382950754663],
    [-17.04201701357833, 145.7384114957746],
    [-17.04197250891837, 145.7385342951587],
    [-17.04168350006127, 145.738418990133]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 217 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L217);
//LotStage_Circles.addLayer(new L.circle(L217.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L240 = L.polygon([
    [-17.04280438042663, 145.7389687404852],
    [-17.04272015724214, 145.7391984771955],
    [-17.04267264746229, 145.7392241378776],
    [-17.04255114684817, 145.7391911458996],
    [-17.04262052246117, 145.7389184024572],
    [-17.04280438042663, 145.7389687404852]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 240 Annan Bend</strong></center>');
LotStage2.addLayer(L240);
LotStage_Circles.addLayer(new L.circle(L240.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L241 = L.polygon([
    [-17.04319481933515, 145.7390753629393],
    [-17.04312528074475, 145.7392663352934],
    [-17.04287178893739, 145.739167244634],
    [-17.04274955818005, 145.7391188795839],
    [-17.04280422206731, 145.7389687468271],
    [-17.04319481933515, 145.7390753629393]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 241 Annan Bend</strong></center>');
LotStage2.addLayer(L241);
LotStage_Circles.addLayer(new L.circle(L241.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L242 = L.polygon([
    [-17.04312528072769, 145.7392663353049],
    [-17.04307462340225, 145.7394056769572],
    [-17.04282126898381, 145.7393061504733],
    [-17.04287177624767, 145.7391669484657],
    [-17.04312528072769, 145.7392663353049]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 242 Annan Bend</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=242" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L242);
LotStage_Circles.addLayer(new L.circle(L242.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L243 = L.polygon([
    [-17.04307453402401, 145.7394056769519],
    [-17.04305862455287, 145.7394491471327],
    [-17.04302874536231, 145.7395325160963],
    [-17.04277504366294, 145.7394338696597],
    [-17.04282126898352, 145.7393057648771],
    [-17.04307453402401, 145.7394056769519]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 243 Annan Bend</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=243" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L243);
LotStage_Circles.addLayer(new L.circle(L243.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L244 = L.polygon([
    [-17.04261270867548, 145.7393594014663],
    [-17.04263594299252, 145.7394049769923],
    [-17.04255307486734, 145.7396328849829],
    [-17.04240326527468, 145.7395921129976],
    [-17.0424723358508, 145.7393198915284],
    [-17.04261270867548, 145.7393594014663]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 244 Annan Bend</strong></center>');
LotStage2.addLayer(L244);
LotStage_Circles.addLayer(new L.circle(L244.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L245 = L.polygon([
    [-17.04247237978949, 145.7393197994499],
    [-17.04240328613178, 145.7395920314525],
    [-17.04228088894265, 145.7395583021818],
    [-17.04234998175628, 145.7392860501608],
    [-17.04247237978949, 145.7393197994499]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 245 Annan Bend</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=245" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L245);
LotStage_Circles.addLayer(new L.circle(L245.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L246 = L.polygon([
    [-17.04234994741284, 145.7392858333601],
    [-17.04228089094235, 145.7395584080687],
    [-17.04215863372116, 145.7395248122459],
    [-17.04222767552155, 145.7392526173895],
    [-17.04234994741284, 145.7392858333601]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 246 Annan Bend</strong></center>');
LotStage2.addLayer(L246);
//LotStage_Circles.addLayer(new L.circle(L246.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L247 = L.polygon([
    [-17.04222753059313, 145.7392527210361],
    [-17.04215853227466, 145.7395247061422],
    [-17.04203566168058, 145.7394911723498],
    [-17.04210536629629, 145.7392188692244],
    [-17.04222753059313, 145.7392527210361]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 247 Annan Bend</strong></center>');
LotStage2.addLayer(L247);
//LotStage_Circles.addLayer(new L.circle(L247.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L248 = L.polygon([
    [-17.04188732745551, 145.7394500968369],
    [-17.04194437601612, 145.7392132384838],
    [-17.04198789335806, 145.7391874703118],
    [-17.04210514428052, 145.7392189783411],
    [-17.04203566168027, 145.7394912784563],
    [-17.04188732745551, 145.7394500968369]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 248 Annan Bend</strong></center>');
LotStage2.addLayer(L248);
//LotStage_Circles.addLayer(new L.circle(L248.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L249 = L.polygon([
    [-17.04185715837692, 145.7395753734185],
    [-17.04188723671834, 145.7394501445129],
    [-17.04203563498514, 145.7394911779836],
    [-17.04215895278153, 145.7395249851137],
    [-17.0422442765946, 145.7395484799067],
    [-17.04220232217142, 145.7396656073899],
    [-17.04185715837692, 145.7395753734185]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 249 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L249);
LotStage_Circles.addLayer(new L.circle(L249.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L250 = L.polygon([
    [-17.04182671861163, 145.7397016482642],
    [-17.04185704946552, 145.7395754219814],
    [-17.04220211927563, 145.739665713497],
    [-17.0421578378589, 145.7397884245342],
    [-17.04182671861163, 145.7397016482642]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 250 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L250);
LotStage_Circles.addLayer(new L.circle(L250.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L251 = L.polygon([
    [-17.04179578570212, 145.7398293934238],
    [-17.04182667335115, 145.7397016708514],
    [-17.04215798900243, 145.7397884790681],
    [-17.04211301227692, 145.7399125547426],
    [-17.04179578570212, 145.7398293934238]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 251 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L251);
LotStage_Circles.addLayer(new L.circle(L251.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L252 = L.polygon([
    [-17.04211285254205, 145.7399125561717],
    [-17.04205886473094, 145.7400612998424],
    [-17.04180195980511, 145.7399598289577],
    [-17.04177664980336, 145.7399090955083],
    [-17.0417957637974, 145.7398293160371],
    [-17.04211285254205, 145.7399125561717]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 252 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=252" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L252);
LotStage_Circles.addLayer(new L.circle(L252.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L253 = L.polygon([
    [-17.04240945192066, 145.7400276551661],
    [-17.04236802785525, 145.7401409627711],
    [-17.04232094669418, 145.7401630343369],
    [-17.0420587956863, 145.7400612599264],
    [-17.04211328206497, 145.7399118475057],
    [-17.04240945192066, 145.7400276551661]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 253 Annan Bend</strong></center>');
LotStage2.addLayer(L253);
LotStage_Circles.addLayer(new L.circle(L253.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L254 = L.polygon([
    [-17.04245425975794, 145.7399040260838],
    [-17.04240931775925, 145.7400276406094],
    [-17.04211328944206, 145.7399117184767],
    [-17.04215795993649, 145.739788630539],
    [-17.04245425975794, 145.7399040260838]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 254 Annan Bend</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=254" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L254);
LotStage_Circles.addLayer(new L.circle(L254.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L255 = L.polygon([
    [-17.04249889733828, 145.7397814725692],
    [-17.04245426539546, 145.7399039474805],
    [-17.04215788755427, 145.7397885851754],
    [-17.04220211927563, 145.739665713497],
    [-17.04249889733828, 145.7397814725692]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 255 Annan Bend</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=255" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L255);
LotStage_Circles.addLayer(new L.circle(L255.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L256 = L.polygon([
    [-17.04224437804323, 145.7395485860176],
    [-17.04255297341353, 145.73963299111],
    [-17.04249890117185, 145.7397813286899],
    [-17.04220242361849, 145.7396658196048],
    [-17.04224437804323, 145.7395485860176]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 256 Annan Bend</strong></center>');
LotStage2.addLayer(L256);
LotStage_Circles.addLayer(new L.circle(L256.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L218 = L.polygon([
    [-17.04228088298516, 145.7380766769583],
    [-17.04220517062587, 145.7383720019105],
    [-17.0420471988008, 145.7383288345644],
    [-17.04215222837926, 145.7380415478501],
    [-17.04228088298516, 145.7380766769583]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 218 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=218" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L218);
LotStage_Circles.addLayer(new L.circle(L218.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L219 = L.polygon([
    [-17.04241551479168, 145.7381141877563],
    [-17.04234094092875, 145.7384092151848],
    [-17.04220573981946, 145.7383720018997],
    [-17.04228088288378, 145.7380769746288],
    [-17.04241551479168, 145.7381141877563]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 219 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L219);


var L220 = L.polygon([
    [-17.04255127750943, 145.7381511612919],
    [-17.04247636382232, 145.7384463548305],
    [-17.04234142281394, 145.7384100038211],
    [-17.0424159579038, 145.738113853598],
    [-17.04255127750943, 145.7381511612919]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 220 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L220);


var L221 = L.polygon([
    [-17.04269109899816, 145.7381893812501],
    [-17.04261640322113, 145.7384850088673],
    [-17.04247631168231, 145.7384466609856],
    [-17.04255128101374, 145.7381516059012],
    [-17.04269109899816, 145.7381893812501]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 221 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L221);


var L222 = L.polygon([
    [-17.04284870198397, 145.738232593996],
    [-17.04277373251789, 145.7385279356797],
    [-17.04261612954086, 145.7384847226804],
    [-17.04269109893248, 145.7381899535799],
    [-17.04284870198397, 145.738232593996]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 222 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L222);


var L223 = L.polygon([
    [-17.04298824630275, 145.7382715141916],
    [-17.04291382400901, 145.7385662837067],
    [-17.04277345887222, 145.73852764951],
    [-17.04284870193262, 145.7382325939843],
    [-17.04298824630275, 145.7382715141916]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 223 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=223" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L223);
LotStage_Circles.addLayer(new L.circle(L223.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L224 = L.polygon([
    [-17.04313244206861, 145.7383107205771],
    [-17.04305747248453, 145.7386057764728],
    [-17.0429138239607, 145.7385662836867],
    [-17.04298851984198, 145.7382709417721],
    [-17.04313244206861, 145.7383107205771]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 224 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L224);


var L225 = L.polygon([
    [-17.04326760846834, 145.7383484962283],
    [-17.0431931860929, 145.7386432661382],
    [-17.04305774602802, 145.7386057765468],
    [-17.04313289023585, 145.7383106857352],
    [-17.04326760846834, 145.7383484962283]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 225 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L225);


var L226 = L.polygon([
    [-17.04340781099491, 145.7383859721574],
    [-17.04333246792204, 145.7386812575703],
    [-17.04319314268026, 145.7386429787022],
    [-17.04326786156093, 145.7383479668274],
    [-17.04340781099491, 145.7383859721574]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 226 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L226);
//LotStage_Circles.addLayer(new L.circle(L223.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L227 = L.polygon([
    [-17.04329134278724, 145.7388112492455],
    [-17.04319491928586, 145.7390755116864],
    [-17.04308374133426, 145.7390450746483],
    [-17.04315302248643, 145.7387728503797],
    [-17.04329134278724, 145.7388112492455]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 227 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L227);


//Value Homes ??
var L228 = L.polygon([
    [-17.04315301734058, 145.7387729608956],
    [-17.0430837283862, 145.7390449601274],
    [-17.04296146291025, 145.7390116768931],
    [-17.04303103638177, 145.7387394954359],
    [-17.04315301734058, 145.7387729608956]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 228 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L228);
LotStage_Circles.addLayer(new L.circle(L228.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


//Value Homes
var L229 = L.polygon([
    [-17.04303065543969, 145.7387392765872],
    [-17.04296146291016, 145.7390116079826],
    [-17.04283916168189, 145.7389781817126],
    [-17.04290842119232, 145.7387057430354],
    [-17.04303065543969, 145.7387392765872]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 229 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=229" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L229);
LotStage_Circles.addLayer(new L.circle(L229.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L230 = L.polygon([
    [-17.04290836672098, 145.7387055975749],
    [-17.04283914231895, 145.7389782007342],
    [-17.0427080462471, 145.738942473732],
    [-17.04277728842645, 145.7386698557156],
    [-17.04290836672098, 145.7387055975749]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 230 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=230" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L230);
LotStage_Circles.addLayer(new L.circle(L230.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L231 = L.polygon([
    [-17.04277688118281, 145.7386696364625],
    [-17.04270796639822, 145.7389425475019],
    [-17.04258528068227, 145.7389085738988],
    [-17.04265510368576, 145.7386369242497],
    [-17.04277688118281, 145.7386696364625]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 231 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=231" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L231);
LotStage_Circles.addLayer(new L.circle(L231.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L232 = L.polygon([
    [-17.04253266078201, 145.7386024720669],
    [-17.04265510374915, 145.7386365762833],
    [-17.04258521479778, 145.7389085738988],
    [-17.04246345494374, 145.738875309744],
    [-17.04253266078201, 145.7386024720669]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 232 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L232);


var L233 = L.polygon([
    [-17.0425329935796, 145.7386024721527],
    [-17.04246345498073, 145.7388753097392],
    [-17.04234130021278, 145.7388415912756],
    [-17.04241055060545, 145.7385694119993],
    [-17.0425329935796, 145.7386024721527]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 233 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L233);


var L234 = L.polygon([
    [-17.04241021797557, 145.7385690640418],
    [-17.04234134483802, 145.7388415534764],
    [-17.04220094347044, 145.7388036851903],
    [-17.0422704732727, 145.7385307839592],
    [-17.04241021797557, 145.7385690640418]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 234 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=234" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage2.addLayer(L234);
LotStage_Circles.addLayer(new L.circle(L234.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L235 = L.polygon([
    [-17.04205253937158, 145.7387622090648],
    [-17.04206551547195, 145.7387086161004],
    [-17.04209645849741, 145.7386049101982],
    [-17.04212407432259, 145.7385286966946],
    [-17.04217231934513, 145.7385043360113],
    [-17.04227047335816, 145.7385311320197],
    [-17.0422009348308, 145.7388036212522],
    [-17.04205253937158, 145.7387622090648]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 235 Bulleringa Loop</strong></center>');
LotStage2.addLayer(L235);


var L236 = L.polygon([
    [-17.04205287208114, 145.7387625569884],
    [-17.04220087758495, 145.7388036162799],
    [-17.04213239414948, 145.7390757622712],
    [-17.0420222621525, 145.7390458339825],
    [-17.04199531133925, 145.7389995492724],
    [-17.04205287208114, 145.7387625569884]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 236 Annan Bend</strong></center>');
LotStage2.addLayer(L236);


var L237 = L.polygon([
    [-17.04234134486323, 145.7388415535145],
    [-17.04227280411085, 145.7391143907132],
    [-17.04213206139078, 145.7390757622881],
    [-17.04220100935482, 145.7388036851901],
    [-17.04234134486323, 145.7388415535145]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 237 Annan Bend</strong></center>');
LotStage2.addLayer(L237);


var L238 = L.polygon([
    [-17.04234130021278, 145.7388415912756],
    [-17.04248065601341, 145.7388801829489],
    [-17.04241188316566, 145.739151975193],
    [-17.04227247133716, 145.7391140427297],
    [-17.04234130021278, 145.7388415912756]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 238 Annan Bend</strong></center>');
LotStage2.addLayer(L238);


var L239 = L.polygon([
    [-17.04262046385754, 145.7389182472918],
    [-17.04255153626023, 145.7391907385066],
    [-17.04241173267676, 145.7391524515634],
    [-17.04248072189795, 145.7388801140377],
    [-17.04262046385754, 145.7389182472918]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 239 Annan Bend</strong></center>');
LotStage2.addLayer(L239);


var Stage2_Border = L.polyline([
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
], {color: 'red'});
LotStage2.addLayer(Stage2_Border);


//Stage 3 Lots /////////////////////////////////////////////////////////////////

var LotStage3 = L.layerGroup();


var L301 = L.polygon([
    [-17.04337612938355, 145.7394335994742],
    [-17.0433312121478, 145.7395562834471],
    [-17.04305866924229, 145.7394490536482],
    [-17.04310367156966, 145.7393257946419],
    [-17.04337612938355, 145.7394335994742]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 301 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=301" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L301);
LotStage_Circles.addLayer(new L.circle(L301.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L302 = L.polygon([
    [-17.04342083101932, 145.7393106897175],
    [-17.04337614005395, 145.7394337117602],
    [-17.04310358218962, 145.7393257946418],
    [-17.04314831882017, 145.7392031353338],
    [-17.04342083101932, 145.7393106897175]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 302 Bulleringa Loop</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=302" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L302);
LotStage_Circles.addLayer( new L.circle( L302.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L303 = L.polygon([
    [-17.04314840819921, 145.7392031820759],
    [-17.0431929261038, 145.7390805326391],
    [-17.04346578455067, 145.7391876088304],
    [-17.04342066392423, 145.7393104910491],
    [-17.04314840819921, 145.7392031820759]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 303 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L303);
//LotStage_Circles.addLayer( new L.circle( L303.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L304 = L.polygon([
    [-17.04351096511235, 145.739064476124],
    [-17.04346575995879, 145.7391875901642],
    [-17.04319305286198, 145.7390805283113],
    [-17.04323801044615, 145.7389574317444],
    [-17.04351096511235, 145.739064476124]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 304 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L304);
//LotStage_Circles.addLayer( new L.circle( L304.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L305 = L.polygon([
    [-17.04354048964963, 145.738878928406],
    [-17.04356193551282, 145.7389242579035],
    [-17.04351100102433, 145.7390644519328],
    [-17.04323801226944, 145.7389574363858],
    [-17.04329144987194, 145.7388112492452],
    [-17.04354048964963, 145.738878928406]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 305 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L305);
//LotStage_Circles.addLayer( new L.circle( L305.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L306 = L.polygon([
    [-17.04354768972835, 145.7384245219827],
    [-17.04347264963421, 145.7387198430012],
    [-17.04333252146429, 145.7386812575701],
    [-17.04340793208796, 145.7383860415524],
    [-17.04354768972835, 145.7384245219827]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 306 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L306);
//LotStage_Circles.addLayer( new L.circle( L306.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L307 = L.polygon([
    [-17.04372563799459, 145.7384732185838],
    [-17.04363407795288, 145.7387253940112],
    [-17.04358613624738, 145.7387508081421],
    [-17.04347269182345, 145.7387198271889],
    [-17.04354763578181, 145.7384243689617],
    [-17.04372563799459, 145.7384732185838]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 307 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L307);
//LotStage_Circles.addLayer( new L.circle( L307.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L308 = L.polygon([
    [-17.04414497570242, 145.7385884444562],
    [-17.04408575376629, 145.7387514315569],
    [-17.0438134352734, 145.7386441742161],
    [-17.04386194428466, 145.7385107880918],
    [-17.04414497570242, 145.7385884444562]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 308 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L308);
//LotStage_Circles.addLayer( new L.circle( L308.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L309 = L.polygon([
    [-17.04408577532762, 145.7387513695029],
    [-17.04402813978092, 145.7389096301348],
    [-17.0437556706421, 145.7388022179711],
    [-17.0438134426448, 145.7386441990247],
    [-17.04408577532762, 145.7387513695029]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 309 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L309);
//LotStage_Circles.addLayer( new L.circle( L309.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L310 = L.polygon([
    [-17.04402826795815, 145.7389096658633],
    [-17.04397398387027, 145.7390590201161],
    [-17.04370120952508, 145.7389516212124],
    [-17.04375575442143, 145.7388023201973],
    [-17.04402826795815, 145.7389096658633]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 310 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L310);
//LotStage_Circles.addLayer( new L.circle( L310.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L311 = L.polygon([
    [-17.04397399439865, 145.7390587920561],
    [-17.04392254432508, 145.7391992533547],
    [-17.04365031626093, 145.7390920823239],
    [-17.04370126561394, 145.7389516445477],
    [-17.04397399439865, 145.7390587920561]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 311 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L311);
//LotStage_Circles.addLayer( new L.circle( L311.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L312 = L.polygon([
    [-17.04392251138212, 145.7391993066129],
    [-17.04387171523399, 145.7393399958517],
    [-17.04359924185027, 145.7392328246509],
    [-17.04365025592393, 145.7390921355614],
    [-17.04392251138212, 145.7391993066129]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 312 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L312);
//LotStage_Circles.addLayer( new L.circle( L312.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L313 = L.polygon([
    [-17.04387167144375, 145.7393400868742],
    [-17.04381715921387, 145.7394898388507],
    [-17.04354476482908, 145.739381988639],
    [-17.04359927697754, 145.7392329238429],
    [-17.04387167144375, 145.7393400868742]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 313 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L313);
//LotStage_Circles.addLayer( new L.circle( L313.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L314 = L.polygon([
    [-17.04381705272146, 145.739489398689],
    [-17.04376597504533, 145.7396300405262],
    [-17.04349381712622, 145.7395226783976],
    [-17.043544811225, 145.7393820382853],
    [-17.04381705272146, 145.739489398689]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 314 Bulleringa Loop</strong></center>');
LotStage3.addLayer(L314);
//LotStage_Circles.addLayer( new L.circle( L314.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L315 = L.polygon([
    [-17.04403704852037, 145.7396811888218],
    [-17.04403736770429, 145.7396811888239],
    [-17.04398615989718, 145.7398217780804],
    [-17.04373246330788, 145.7397223400604],
    [-17.04378350451111, 145.7395819924503],
    [-17.04403704852037, 145.7396811888218]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 315 Homevale Entrance</strong></center>');
LotStage3.addLayer(L315);
LotStage_Circles.addLayer(new L.circle(L315.getBounds().getCenter(), {className: 'LotCircle_SOLD', radius: C_Radius}));


var L316 = L.polygon([
    [-17.04408722862611, 145.7395451663992],
    [-17.04403731362319, 145.739681564768],
    [-17.04378364321953, 145.7395814822193],
    [-17.04383316357916, 145.739445290392],
    [-17.04408722862611, 145.7395451663992]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 316 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=316" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L316);
LotStage_Circles.addLayer(new L.circle(L316.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L317 = L.polygon([
    [-17.04413171322699, 145.7394221464043],
    [-17.04408712518805, 145.7395451319476],
    [-17.0438333838042, 145.7394454623018],
    [-17.04387816905985, 145.7393224768336],
    [-17.04413171322699, 145.7394221464043]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 317 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=317" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L317);
LotStage_Circles.addLayer(new L.circle(L317.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L318 = L.polygon([
    [-17.04387824932684, 145.7393223612946],
    [-17.04392251077852, 145.7391993721216],
    [-17.04417629595367, 145.7392989027063],
    [-17.04413155310241, 145.7394220417482],
    [-17.04387824932684, 145.7393223612946]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 318 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=318" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L318);
LotStage_Circles.addLayer(new L.circle(L318.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L319 = L.polygon([
    [-17.04392257282686, 145.7391993721219],
    [-17.04397093905716, 145.7390676733935],
    [-17.04422438299019, 145.7391673161136],
    [-17.0441763405741, 145.739298912988],
    [-17.04392257282686, 145.7391993721219]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 319 Homevale Entrance</strong></center>');
LotStage3.addLayer(L319);
//LotStage_Circles.addLayer( new L.circle( L319.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L320 = L.polygon([
    [-17.04428195063104, 145.7390094885265],
    [-17.04422421796849, 145.7391672024262],
    [-17.04397088083352, 145.7390674880957],
    [-17.04402823352128, 145.7389097742967],
    [-17.04428195063104, 145.7390094885265]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 320 Homevale Entrance</strong></center>');
LotStage3.addLayer(L320);
//LotStage_Circles.addLayer( new L.circle( L320.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L321 = L.polygon([
    [-17.04402819391192, 145.7389096301354],
    [-17.04408746906242, 145.7387466605875],
    [-17.04430710498873, 145.7388331359648],
    [-17.04432823945619, 145.7388816580499],
    [-17.04428195057998, 145.739009091322],
    [-17.04402819391192, 145.7389096301354]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 321 Homevale Entrance</strong></center>');
LotStage3.addLayer(L321);
//LotStage_Circles.addLayer( new L.circle( L321.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L322 = L.polygon([
    [-17.04433942865205, 145.7386413917648],
    [-17.04448551741875, 145.7386993219628],
    [-17.04439002226173, 145.7389628074644],
    [-17.04431003268965, 145.7389313653489],
    [-17.04432834575367, 145.7388818534519],
    [-17.04430709590747, 145.7388334257138],
    [-17.04408755530612, 145.7387465923481],
    [-17.04414500767801, 145.7385883321411],
    [-17.04433942865205, 145.7386413917648]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 322 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=322" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L322);
LotStage_Circles.addLayer(new L.circle(L322.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L323 = L.polygon([
    [-17.04448565729948, 145.7386992344486],
    [-17.04462106881423, 145.7387525209398],
    [-17.04452514350908, 145.7390160922893],
    [-17.04438995135817, 145.7389627853007],
    [-17.04448565729948, 145.7386992344486]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 323 Homevale Entrance</strong></center>');
LotStage3.addLayer(L323);
//LotStage_Circles.addLayer( new L.circle( L323.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L324 = L.polygon([
    [-17.04462107524083, 145.7387526252579],
    [-17.04473923597968, 145.738798929652],
    [-17.04464338066546, 145.7390624182779],
    [-17.04452524308866, 145.7390161585892],
    [-17.04462107524083, 145.7387526252579]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 324 Homevale Entrance</strong></center>');
LotStage3.addLayer(L324);
//LotStage_Circles.addLayer( new L.circle( L324.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L325 = L.polygon([
    [-17.04485324372556, 145.7388436360206],
    [-17.04475753111934, 145.7391074049979],
    [-17.04464341801829, 145.7390622174614],
    [-17.04473941830876, 145.7387990654761],
    [-17.04485324372556, 145.7388436360206]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 325 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=325" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L325);
LotStage_Circles.addLayer(new L.circle(L325.getBounds().getCenter(), {className: 'LotCircle', radius: C_Radius}));


var L326 = L.polygon([
    [-17.0449761539552, 145.7388920240453],
    [-17.04488034541168, 145.7391556323515],
    [-17.044757655063, 145.7391072721243],
    [-17.04485324371608, 145.738843816691],
    [-17.0449761539552, 145.7388920240453]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 326 Homevale Entrance</strong></center>');
LotStage3.addLayer(L326);
//LotStage_Circles.addLayer( new L.circle( L326.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L327 = L.polygon([
    [-17.04497616462771, 145.7388920240159],
    [-17.04511123697465, 145.7389453311606],
    [-17.04501534216353, 145.7392086319752],
    [-17.04488016092257, 145.7391557504358],
    [-17.04497616462771, 145.7388920240159]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 327 Homevale Entrance</strong></center>');
LotStage3.addLayer(L327);
//LotStage_Circles.addLayer( new L.circle( L327.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L328 = L.polygon([
    [-17.04494961290029, 145.7393386987351],
    [-17.04485376529761, 145.7396021819621],
    [-17.04471840929109, 145.7395489755503],
    [-17.04481440813872, 145.7392852672642],
    [-17.04494961290029, 145.7393386987351]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 328 Homevale Entrance</strong></center>');
LotStage3.addLayer(L328);
//LotStage_Circles.addLayer( new L.circle( L328.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));

// Courthouse Classics
var L329 = L.polygon([
    [-17.04471839612251, 145.7395490040048],
    [-17.04459156644601, 145.7394992072271],
    [-17.04468758850314, 145.7392353644783],
    [-17.04481438936993, 145.7392854180237],
    [-17.04471839612251, 145.7395490040048]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 329 Homevale Entrance</strong></center>');
LotStage3.addLayer(L329);
LotStage_Circles.addLayer( new L.circle( L329.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));

// Courthouse Classics
var L330 = L.polygon([
    [-17.04459145045, 145.7394990181224],
    [-17.04444788161887, 145.7394425299043],
    [-17.04454384094131, 145.7391789660264],
    [-17.0446875932429, 145.739235346296],
    [-17.04459145045, 145.7394990181224]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 330 Homevale Entrance</strong></center>');
LotStage3.addLayer(L330);
LotStage_Circles.addLayer( new L.circle( L330.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L331 = L.polygon([
    [-17.04444789115497, 145.7394425050446],
    [-17.04429599350595, 145.7393825563976],
    [-17.04437888088198, 145.7391545648303],
    [-17.04442562423841, 145.7391324748607],
    [-17.04454400407578, 145.7391789574288],
    [-17.04444789115497, 145.7394425050446]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 331 Homevale Entrance</strong></center>');
LotStage3.addLayer(L331);
//LotStage_Circles.addLayer( new L.circle( L331.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L332 = L.polygon([
    [-17.04444794445791, 145.7394425157173],
    [-17.0443519007845, 145.7397061188276],
    [-17.04423371262825, 145.73966003669],
    [-17.04421240313723, 145.7396112185274],
    [-17.044295932329, 145.73938251952],
    [-17.04444794445791, 145.7394425157173]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 332 Porcupine Way</strong></center>');
LotStage3.addLayer(L332);
//LotStage_Circles.addLayer( new L.circle( L332.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L333 = L.polygon([
    [-17.04459152889754, 145.7394991094146],
    [-17.04449559849209, 145.739762549927],
    [-17.0443519518691, 145.7397061061903],
    [-17.04444786432773, 145.7394424857513],
    [-17.04459152889754, 145.7394991094146]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 333 Porcupine Way</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=333" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L333);
LotStage_Circles.addLayer( new L.circle( L333.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var L334 = L.polygon([
    [-17.04440377800294, 145.7398823900024],
    [-17.04433972381106, 145.7400585369476],
    [-17.04408661553813, 145.7399586814424],
    [-17.04413759740198, 145.7398178552146],
    [-17.04418422098722, 145.7397957517161],
    [-17.04440377800294, 145.7398823900024]
], {className: 'LotStyle'}).bindPopup('<center><strong>Lot 334 Homevale Entrance</strong><br><br><a href="https://mtpeterestate.com.au/property/?s=334" target="_blank"><button class="btn btn-success">More Info...</button></a></center>');
LotStage3.addLayer(L334);
LotStage_Circles.addLayer( new L.circle( L334.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));


var Stage3_Border = L.polyline([
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
], {color: 'red'});
LotStage3.addLayer(Stage3_Border);


