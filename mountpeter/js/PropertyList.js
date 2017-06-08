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
], {className: 'StageStyle'}).bindPopup('Stage 1');

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

var LotStage1 = L.layerGroup();

//LotStage1.addLayer( marker );

var L101 = L.polygon([
    [-17.04234637826514, 145.7403295298242],
    [-17.04224391616437, 145.7406109360917],
    [-17.04210506230904, 145.7405430522335],
    [-17.04220290009643, 145.740272855363],
    [-17.04234637826514, 145.7403295298242]
], {className: 'LotStyle'}).bindPopup('Lot 101 Bulleringa Loop');
LotStage1.addLayer(L101);

var L102 = L.polygon([
    [-17.04247362272434, 145.7403788555922],
    [-17.04236669998549, 145.7406723866413],
    [-17.04224399194547, 145.7406112572559],
    [-17.04234635035691, 145.7403295768615],
    [-17.04247362272434, 145.7403788555922]
], {className: 'LotStyle'}).bindPopup('Lot 102 Bulleringa Loop');
LotStage1.addLayer(L102);

var L103 = L.polygon([
    [-17.0425920929727, 145.7404261828037],
    [-17.04248101214428, 145.740730814276],
    [-17.04236702280388, 145.7406723866063],
    [-17.04247357898039, 145.7403788848985],
    [-17.0425920929727, 145.7404261828037]
], {className: 'LotStyle'}).bindPopup('Lot 103 Bulleringa Loop');
LotStage1.addLayer(L103);

var L104 = L.polygon([
    [-17.04271030310246, 145.7404721021273],
    [-17.04259500143691, 145.7407902317397],
    [-17.04248101209783, 145.7407311284898],
    [-17.04259208893678, 145.7404261432249],
    [-17.04271030310246, 145.7404721021273]
], {className: 'LotStyle'}).bindPopup('Lot 104 Bulleringa Loop');
LotStage1.addLayer(L104);

var L105 = L.polygon([
    [-17.04283714390092, 145.7405225968581],
    [-17.04271674062195, 145.7408520367372],
    [-17.04259500134834, 145.7407902316413],
    [-17.04271027590104, 145.7404720740786],
    [-17.04283714390092, 145.7405225968581]
], {className: 'LotStyle'}).bindPopup('Lot 105 Bulleringa Loop');
LotStage1.addLayer(L105);

var L106 = L.polygon([
    [-17.04296376020508, 145.7405721211752],
    [-17.04283880276533, 145.740915530605],
    [-17.04271706350589, 145.7408520366895],
    [-17.04283718162646, 145.7405227332839],
    [-17.04296376020508, 145.7405721211752]
], {className: 'LotStyle'}).bindPopup('Lot 106 Bulleringa Loop');
LotStage1.addLayer(L106);

var L107 = L.polygon([
    [-17.0430286167906, 145.7395327368086],
    [-17.04298535800289, 145.7396514668575],
    [-17.04273187238666, 145.7395518137656],
    [-17.04277495428417, 145.7394339631446],
    [-17.0430286167906, 145.7395327368086]
], {className: 'LotStyle'}).bindPopup('Lot 107 Annan Bend');
LotStage1.addLayer(L107);

var L108 = L.polygon([
    [-17.04298528710298, 145.7396514702811],
    [-17.04293421077012, 145.739791878901],
    [-17.04268072311264, 145.7396923286507],
    [-17.04273183241441, 145.7395517020204],
    [-17.04298528710298, 145.7396514702811]
], {className: 'LotStyle'}).bindPopup('Lot 108 Annan Bend');
LotStage1.addLayer(L108);

var L109 = L.polygon([
    [-17.04293420674973, 145.7397919649612],
    [-17.04288957078567, 145.739915047306],
    [-17.04263569657049, 145.7398152283697],
    [-17.0426807654963, 145.7396920287141],
    [-17.04293420674973, 145.7397919649612]
], {className: 'LotStyle'}).bindPopup('Lot 109 Annan Bend');
LotStage1.addLayer(L109);

var L110 = L.polygon([
    [-17.0428895591715, 145.7399151062629],
    [-17.04283832264821, 145.7400560098888],
    [-17.04258470541759, 145.7399559649641],
    [-17.04263593090166, 145.7398153509087],
    [-17.0428895591715, 145.7399151062629]
], {className: 'LotStyle'}).bindPopup('Lot 110 Annan Bend');
LotStage1.addLayer(L110);

var L111 = L.polygon([
    [-17.0428382543555, 145.7400559689761],
    [-17.04279344648912, 145.7401788206434],
    [-17.04254009264235, 145.7400787390113],
    [-17.04258477451201, 145.739956164426],
    [-17.0428382543555, 145.7400559689761]
], {className: 'LotStyle'}).bindPopup('Lot 111 Annan Bend');
LotStage1.addLayer(L111);

var L112 = L.polygon([
    [-17.04279349656123, 145.740178808341],
    [-17.04273922569247, 145.7403280656494],
    [-17.04251986143174, 145.7402414360062],
    [-17.04249878294426, 145.7401929361225],
    [-17.04254009262681, 145.7400787389694],
    [-17.04279349656123, 145.740178808341]
], {className: 'LotStyle'}).bindPopup('Lot 112 Annan Bend');
LotStage1.addLayer(L112);

var L113 = L.polygon([
    [-17.04306609198562, 145.7402859564975],
    [-17.04302457354527, 145.7404002461279],
    [-17.04297791016173, 145.7404219244495],
    [-17.04273924253905, 145.7403281143145],
    [-17.04279349656237, 145.7401788083387],
    [-17.04306609198562, 145.7402859564975]
], {className: 'LotStyle'}).bindPopup('Lot 113 Bulleringa Loop');
LotStage1.addLayer(L113);

var L114 = L.polygon([
    [-17.04279341254516, 145.7401787068786],
    [-17.04284169547716, 145.7400467140576],
    [-17.04311404081468, 145.7401543074473],
    [-17.04306609198342, 145.7402858435126],
    [-17.04279341254516, 145.7401787068786]
], {className: 'LotStyle'}).bindPopup('Lot 114 Bulleringa Loop');
LotStage1.addLayer(L114);

var L115 = L.polygon([
    [-17.04315887098351, 145.7400310774763],
    [-17.04311409897408, 145.7401542499543],
    [-17.04284169547716, 145.7400467140576],
    [-17.04288638619399, 145.7399238470239],
    [-17.04315887098351, 145.7400310774763]
], {className: 'LotStyle'}).bindPopup('Lot 115 Bulleringa Loop');
LotStage1.addLayer(L115);


var L116 = L.polygon([
    [-17.04288639837804, 145.7399237995992],
    [-17.0429310337777, 145.7398006589857],
    [-17.04320347104028, 145.7399081603476],
    [-17.04315889153296, 145.7400309565152],
    [-17.04288639837804, 145.7399237995992]
], {className: 'LotStyle'}).bindPopup('Lot 116 Bulleringa Loop');
LotStage1.addLayer(L116);


var L117 = L.polygon([
    [-17.04293115053246, 145.7398007209279],
    [-17.04297901206969, 145.7396690418818],
    [-17.04325162130208, 145.7397763499191],
    [-17.0432035633671, 145.7399080861814],
    [-17.04293115053246, 145.7398007209279]
], {className: 'LotStyle'}).bindPopup('Lot 117 Bulleringa Loop');
LotStage1.addLayer(L117);


var L118 = L.polygon([
    [-17.04297890848859, 145.7396690646113],
    [-17.04301889566879, 145.7395592536197],
    [-17.04329159025066, 145.7396664528609],
    [-17.04325143586491, 145.7397763465905],
    [-17.04297890848859, 145.7396690646113]
], {className: 'LotStyle'}).bindPopup('Lot 118 Bulleringa Loop');
LotStage1.addLayer(L118);

var L119 = L.polygon([
    [-17.04301898490251, 145.7395592248034],
    [-17.04305866924229, 145.7394490536482],
    [-17.04333150756126, 145.739556702592],
    [-17.04329142310358, 145.7396664091028],
    [-17.04301898490251, 145.7395592248034]
], {className: 'LotStyle'}).bindPopup('Lot 119 Bulleringa Loop');
LotStage1.addLayer(L119);

var L120 = L.polygon([
    [-17.04376597504557, 145.7396302103769],
    [-17.04371216510227, 145.739779059557],
    [-17.04343925401026, 145.7396720243708],
    [-17.04349376299549, 145.7395226217811],
    [-17.04376597504557, 145.7396302103769]
], {className: 'LotStyle'}).bindPopup('Lot 120 Bulleringa Loop');
LotStage1.addLayer(L120);

var L121 = L.polygon([
    [-17.04371214103294, 145.7397789365353],
    [-17.04366096984188, 145.7399200945817],
    [-17.04338819972265, 145.7398126793967],
    [-17.04343938287834, 145.7396720243675],
    [-17.04371214103294, 145.7397789365353]
], {className: 'LotStyle'}).bindPopup('Lot 121 Bulleringa Loop');
LotStage1.addLayer(L121);

var L122 = L.polygon([
    [-17.04366096984188, 145.7399200945817],
    [-17.04360801441435, 145.7400647604291],
    [-17.04333536966324, 145.7399575848105],
    [-17.04338819972265, 145.7398126793967],
    [-17.04366096984188, 145.7399200945817]
], {className: 'LotStyle'}).bindPopup('Lot 122 Bulleringa Loop');
LotStage1.addLayer(L122);


var L123 = L.polygon([
    [-17.04348105679335, 145.7400148272253],
    [-17.04338513256098, 145.7402785050322],
    [-17.0432732828755, 145.7402344556197],
    [-17.04325221551944, 145.7401863909348],
    [-17.04333535972393, 145.7399577481705],
    [-17.04348105679335, 145.7400148272253]
], {className: 'DisplayStyle'}).bindPopup('Lot 123 (Display)');
LotStage1.addLayer(L123);


var L124 = L.polygon([
    [-17.04348113873402, 145.7400150149605],
    [-17.04360794790046, 145.740064787882],
    [-17.04351199354464, 145.7403283928809],
    [-17.04338526772471, 145.7402787109909],
    [-17.04348113873402, 145.7400150149605]
], {className: 'DisplayStyle'}).bindPopup('Lot 124 (Display)');
LotStage1.addLayer(L124);


var L125 = L.polygon([
    [-17.04371783269743, 145.7401079583173],
    [-17.04362191404908, 145.7403715613796],
    [-17.04351198782112, 145.7403282534623],
    [-17.04360820433791, 145.7400649621297],
    [-17.04371783269743, 145.7401079583173]
], {className: 'DisplayStyle'}).bindPopup('Lot 125 (Display)');
LotStage1.addLayer(L125);


var L126 = L.polygon([
    [-17.04386140502665, 145.7401645928698],
    [-17.04377832055469, 145.7403935188677],
    [-17.04373206236159, 145.7404147407202],
    [-17.04362191875774, 145.7403716081471],
    [-17.04371792542803, 145.7401079554388],
    [-17.04386140502665, 145.7401645928698]
], {className: 'DisplayStyle'}).bindPopup('Lot 126 (Display)');
LotStage1.addLayer(L126);


var L127 = L.polygon([
    [-17.04390634463569, 145.7400418135243],
    [-17.04386154068997, 145.7401645793009],
    [-17.04360811008006, 145.7400645742117],
    [-17.04365262583918, 145.7399420376484],
    [-17.04390634463569, 145.7400418135243]
], {className: 'LotStyle'}).bindPopup('Lot 127 Homevale Entrance');
LotStage1.addLayer(L127);


var L128 = L.polygon([
    [-17.04394651326553, 145.7399317957084],
    [-17.04390640854668, 145.740041799162],
    [-17.04365272813446, 145.7399417973215],
    [-17.04369277765462, 145.7398320217809],
    [-17.04394651326553, 145.7399317957084]
], {className: 'LotStyle'}).bindPopup('Lot 128 Homevale Entrance');
LotStage1.addLayer(L128);


var L129 = L.polygon([
    [-17.04398610576695, 145.7398217780805],
    [-17.04394646443082, 145.7399318049626],
    [-17.04369287716157, 145.7398319218998],
    [-17.04373241659548, 145.7397222770582],
    [-17.04398610576695, 145.7398217780805]
], {className: 'LotStyle'}).bindPopup('Lot 129 Homevale Entrance');
LotStage1.addLayer(L129);


var L130 = L.polygon([
    [-17.04403550520423, 145.7400988437586],
    [-17.04408643028238, 145.7399586280903],
    [-17.04433943056174, 145.740057940684],
    [-17.04428883390645, 145.7401985000864],
    [-17.04403550520423, 145.7400988437586]
], {className: 'LotStyle'}).bindPopup('Lot 130 Homevale Entrance');
LotStage1.addLayer(L130);


var L131 = L.polygon([
    [-17.04398771016849, 145.7402308113726],
    [-17.04403534983639, 145.7400991874517],
    [-17.0442885053762, 145.7401985001847],
    [-17.04424020846417, 145.7403304678655],
    [-17.04398771016849, 145.7402308113726]
], {className: 'LotStyle'}).bindPopup('Lot 131 Homevale Entrance');
LotStage1.addLayer(L131);


var L132_CarPark = L.polygon([
    [-17.0439397417763, 145.7403624351792],
    [-17.04398738151496, 145.7402308112495],
    [-17.04424071027864, 145.7403308115149],
    [-17.04419307037523, 145.7404624354877],
    [-17.0439397417763, 145.7403624351792]
], {className: 'CarStyle'}).bindPopup('Car Park');
LotStage1.addLayer(L132_CarPark);


var L133 = L.polygon([
    [-17.04419307039642, 145.7404624355674],
    [-17.04413979551202, 145.740607118734],
    [-17.0438867955769, 145.7405074619247],
    [-17.04393936367931, 145.7403624351646],
    [-17.04419307039642, 145.7404624355674]
], {className: 'LotStyle'}).bindPopup('Lot 133 Homevale Entrance');
LotStage1.addLayer(L133);


var L134 = L.polygon([
    [-17.04414012404059, 145.7406074624375],
    [-17.04408554872137, 145.7407562473994],
    [-17.0438319332542, 145.7406569558103],
    [-17.04388651836874, 145.740508009676],
    [-17.04414012404059, 145.7406074624375]
], {className: 'LotStyle'}).bindPopup('Lot 134 Homevale Entrance');
LotStage1.addLayer(L134);


var L135 = L.polygon([
    [-17.04378271613257, 145.7407930060016],
    [-17.0438321519657, 145.7406568879272],
    [-17.04408594404427, 145.740756702186],
    [-17.0440359457219, 145.7408928203267],
    [-17.04378271613257, 145.7407930060016]
], {className: 'LotStyle'}).bindPopup('Lot 135 Homevale Entrance');
LotStage1.addLayer(L135);


var L136 = L.polygon([
    [-17.04373788011666, 145.7409161608915],
    [-17.04378285577849, 145.7407934159044],
    [-17.04403617011425, 145.7408932302795],
    [-17.04399142269005, 145.7410157365464],
    [-17.04373788011666, 145.7409161608915]
], {className: 'DisplayStyle'}).bindPopup('Lot 136 Homevale Ent. (Display)');
LotStage1.addLayer(L136);


var L137 = L.polygon([
    [-17.04399140327451, 145.7410162998654],
    [-17.04394671835918, 145.7411389358437],
    [-17.04369293558401, 145.7410392713175],
    [-17.04373781239059, 145.7409158979403],
    [-17.04399140327451, 145.7410162998654]
], {className: 'DisplayStyle'}).bindPopup('Lot 137 Homevale Entrance (Display)');
LotStage1.addLayer(L137);


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


var LotStage2 = L.layerGroup();

var Park_Stage2 = L.polygon([
[-17.04215199235708,145.7380415940785],
[-17.0420168947144,145.7384111884329],
[-17.04172588841131,145.7382952483352],
[-17.04174667275661,145.7382430704062],
[-17.04206053340776,145.7380169579379],
[-17.04215199235708,145.7380415940785]
], {className: 'ParkStyle'}).bindPopup('Park');
LotStage2.addLayer(Park_Stage2);





var L201 = L.polygon([
[-17.0422031666243,145.7402729695083],
[-17.04210458075431,145.7405429358463],
[-17.04198259324415,145.7404817742162],
[-17.04207613676561,145.7402233882541],
[-17.0422031666243,145.7402729695083]
], {className: 'LotStyle'}).bindPopup('Lot 201 Bulleringa Loop');
LotStage2.addLayer(L201);





var L202 = L.polygon([
[-17.04207626208723,145.740223397929],
[-17.0419823547949,145.7404816316995],
[-17.04183932997474,145.7404105159035],
[-17.04192822399043,145.7401652129358],
[-17.04207626208723,145.740223397929]
], {className: 'LotStyle'}).bindPopup('Lot 202 Bulleringa Loop');
LotStage2.addLayer(L202);





var L203 = L.polygon([
[-17.04192840329099,145.7401651364958],
[-17.04183905946136,145.7404110914599],
[-17.04169538593867,145.7403398154249],
[-17.04178040314869,145.7401069850325],
[-17.04192840329099,145.7401651364958]
], {className: 'LotStyle'}).bindPopup('Lot 203 Bulleringa Loop');
LotStage2.addLayer(L203);





var L204 = L.polygon([
[-17.04167336890606,145.7400391175766],
[-17.04168794986077,145.7400708694853],
[-17.04178038596083,145.7401068806165],
[-17.04169533744473,145.7403397459745],
[-17.04160676657945,145.740296068611],
[-17.04149409762958,145.7402160797386],
[-17.04167336890606,145.7400391175766]
], {className: 'LotStyle'}).bindPopup('Lot 204 Bulleringa Loop');
LotStage2.addLayer(L204);






var L205 = L.polygon([
[-17.04149424209544,145.7402160793625],
[-17.04136051071055,145.7401238023448],
[-17.04130744172947,145.7399785363562],
[-17.0416258558003,145.7399389888014],
[-17.04167334805413,145.7400391309137],
[-17.04149424209544,145.7402160793625]
], {className: 'LotStyle'}).bindPopup('Lot 205 Bulleringa Loop');
LotStage2.addLayer(L205);






var L206 = L.polygon([
[-17.04166283094263,145.7397852415041],
[-17.04162581056257,145.7399390118409],
[-17.04130750588457,145.7399785363566],
[-17.04137329124038,145.7397100763942],
[-17.04166283094263,145.7397852415041]
], {className: 'LotStyle'}).bindPopup('Lot 206 Bulleringa Loop');
LotStage2.addLayer(L206);





var L207 = L.polygon([
[-17.04169321034597,145.7396579896044],
[-17.04166283508311,145.7397852128143],
[-17.04137334532167,145.7397100832938],
[-17.04140417913105,145.7395821291671],
[-17.04169321034597,145.7396579896044]
], {className: 'LotStyle'}).bindPopup('Lot 207 Bulleringa Loop');
LotStage2.addLayer(L207);





var L208 = L.polygon([
[-17.0417216787211,145.7395393899557],
[-17.04169306960619,145.7396579901072],
[-17.04140414326341,145.7395820909673],
[-17.04143215837842,145.7394630792046],
[-17.0417216787211,145.7395393899557]
], {className: 'LotStyle'}).bindPopup('Lot 208 Bulleringa Loop');
LotStage2.addLayer(L208);





var L209 = L.polygon([
[-17.04175458220924,145.7394020667581],
[-17.04172167903028,145.7395392443184],
[-17.04143226238524,145.7394629952492],
[-17.04146499206742,145.7393261556699],
[-17.04175458220924,145.7394020667581]
], {className: 'LotStyle'}).bindPopup('Lot 209 Bulleringa Loop');
LotStage2.addLayer(L209);





var L210 = L.polygon([
[-17.04178511835907,145.7392749341514],
[-17.04175470553003,145.7394020808419],
[-17.04146504269783,145.7393261596232],
[-17.04149589732366,145.7391993224394],
[-17.04178511835907,145.7392749341514]
], {className: 'LotStyle'}).bindPopup('Lot 210 Bulleringa Loop');
LotStage2.addLayer(L210);





var L211 = L.polygon([
[-17.04181273701187,145.7391607029942],
[-17.04178514099272,145.7392749452702],
[-17.0414958164636,145.739199218011],
[-17.0415225105833,145.7390855145125],
[-17.04181273701187,145.7391607029942]
], {className: 'LotStyle'}).bindPopup('Lot 211 Bulleringa Loop');
LotStage2.addLayer(L211);





var L212 = L.polygon([
[-17.04184029129437,145.7390465878773],
[-17.04181273701187,145.7391607029942],
[-17.04152256436083,145.7390855429496],
[-17.04154999510098,145.7389711733156],
[-17.04184029129437,145.7390465878773]
], {className: 'LotStyle'}).bindPopup('Lot 212 Bulleringa Loop');
LotStage2.addLayer(L212);





var L213 = L.polygon([
[-17.04187075107713,145.7389192506028],
[-17.04184029129437,145.7390465878773],
[-17.04155014752524,145.7389712641498],
[-17.04158098965751,145.738844118488],
[-17.04187075107713,145.7389192506028]
], {className: 'LotStyle'}).bindPopup('Lot 213 Bulleringa Loop');
LotStage2.addLayer(L213);





var L214 = L.polygon([
[-17.04190552691742,145.7387733972068],
[-17.04187075107713,145.7389192506028],
[-17.04158091020319,145.738844118488],
[-17.0416161969382,145.7386975781516],
[-17.04190552691742,145.7387733972068]
], {className: 'LotStyle'}).bindPopup('Lot 214 Bulleringa Loop');
LotStage2.addLayer(L214);





var L215 = L.polygon([
[-17.0416161969382,145.7386975781516],
[-17.04164694704257,145.7385701757648],
[-17.0419365602729,145.7386458098881],
[-17.04190544648672,145.7387733996185],
[-17.0416161969382,145.7386975781516]
], {className: 'LotStyle'}).bindPopup('Lot 215 Bulleringa Loop');
LotStage2.addLayer(L215);





var L216 = L.polygon([
[-17.04197240829843,145.7385343828015],
[-17.04194544347839,145.7386086525887],
[-17.04193663271551,145.7386458004812],
[-17.04164694704257,145.7385701757648],
[-17.04168350006127,145.738418990133],
[-17.04197240829843,145.7385343828015]
], {className: 'LotStyle'}).bindPopup('Lot 216 Bulleringa Loop');
LotStage2.addLayer(L216);






var L217 = L.polygon([
[-17.04168350006127,145.738418990133],
[-17.0416958569327,145.7383673972514],
[-17.04172574695383,145.7382950754663],
[-17.04201701357833,145.7384114957746],
[-17.04197250891837,145.7385342951587],
[-17.04168350006127,145.738418990133]
], {className: 'LotStyle'}).bindPopup('Lot 217 Bulleringa Loop');
LotStage2.addLayer(L217);






var L252 = L.polygon([
[-17.04211285254205,145.7399125561717],
[-17.04205886473094,145.7400612998424],
[-17.04180195980511,145.7399598289577],
[-17.04177664980336,145.7399090955083],
[-17.0417957637974,145.7398293160371],
[-17.04211285254205,145.7399125561717]
], {className: 'LotStyle'}).bindPopup('Lot 252 Bulleringa Loop');
LotStage2.addLayer(L252);






var L251 = L.polygon([
[-17.04179578570212,145.7398293934238],
[-17.04182667335115,145.7397016708514],
[-17.04215798900243,145.7397884790681],
[-17.04211301227692,145.7399125547426],
[-17.04179578570212,145.7398293934238]
], {className: 'LotStyle'}).bindPopup('Lot 251 Bulleringa Loop');
LotStage2.addLayer(L251);





var L250 = L.polygon([
[-17.04182671861163,145.7397016482642],
[-17.04185704946552,145.7395754219814],
[-17.04220211927563,145.739665713497],
[-17.0421578378589,145.7397884245342],
[-17.04182671861163,145.7397016482642]
], {className: 'LotStyle'}).bindPopup('Lot 250 Bulleringa Loop');
LotStage2.addLayer(L250);





var L249 = L.polygon([
[-17.04185715837692,145.7395753734185],
[-17.04188723671834,145.7394501445129],
[-17.04203563498514,145.7394911779836],
[-17.04215895278153,145.7395249851137],
[-17.0422442765946,145.7395484799067],
[-17.04220232217142,145.7396656073899],
[-17.04185715837692,145.7395753734185]
], {className: 'LotStyle'}).bindPopup('Lot 249 Bulleringa Loop');
LotStage2.addLayer(L249);






var L253 = L.polygon([
[-17.04240945192066,145.7400276551661],
[-17.04236802785525,145.7401409627711],
[-17.04232094669418,145.7401630343369],
[-17.0420587956863,145.7400612599264],
[-17.04211328206497,145.7399118475057],
[-17.04240945192066,145.7400276551661]
], {className: 'LotStyle'}).bindPopup('Lot 253 Annan Bend');
LotStage2.addLayer(L253);






var L254 = L.polygon([
[-17.04245425975794,145.7399040260838],
[-17.04240931775925,145.7400276406094],
[-17.04211328944206,145.7399117184767],
[-17.04215795993649,145.739788630539],
[-17.04245425975794,145.7399040260838]
], {className: 'LotStyle'}).bindPopup('Lot 254 Annan Bend');
LotStage2.addLayer(L254);





var L255 = L.polygon([
[-17.04249889733828,145.7397814725692],
[-17.04245426539546,145.7399039474805],
[-17.04215788755427,145.7397885851754],
[-17.04220211927563,145.739665713497],
[-17.04249889733828,145.7397814725692]
], {className: 'LotStyle'}).bindPopup('Lot 255 Annan Bend');
LotStage2.addLayer(L255);





var L256 = L.polygon([
[-17.04224437804323,145.7395485860176],
[-17.04255297341353,145.73963299111],
[-17.04249890117185,145.7397813286899],
[-17.04220242361849,145.7396658196048],
[-17.04224437804323,145.7395485860176]
], {className: 'LotStyle'}).bindPopup('Lot 256 Annan Bend');
LotStage2.addLayer(L256);





var L248 = L.polygon([
[-17.04188732745551,145.7394500968369],
[-17.04194437601612,145.7392132384838],
[-17.04198789335806,145.7391874703118],
[-17.04210514428052,145.7392189783411],
[-17.04203566168027,145.7394912784563],
[-17.04188732745551,145.7394500968369]
], {className: 'LotStyle'}).bindPopup('Lot 248 Annan Bend');
LotStage2.addLayer(L248);






var L247 = L.polygon([
[-17.04222753059313,145.7392527210361],
[-17.04215853227466,145.7395247061422],
[-17.04203566168058,145.7394911723498],
[-17.04210536629629,145.7392188692244],
[-17.04222753059313,145.7392527210361]
], {className: 'LotStyle'}).bindPopup('Lot 247 Annan Bend');
LotStage2.addLayer(L247);





var L246 = L.polygon([
[-17.04234994741284,145.7392858333601],
[-17.04228089094235,145.7395584080687],
[-17.04215863372116,145.7395248122459],
[-17.04222767552155,145.7392526173895],
[-17.04234994741284,145.7392858333601]
], {className: 'LotStyle'}).bindPopup('Lot 246 Annan Bend');
LotStage2.addLayer(L246);





var L245 = L.polygon([
[-17.04247237978949,145.7393197994499],
[-17.04240328613178,145.7395920314525],
[-17.04228088894265,145.7395583021818],
[-17.04234998175628,145.7392860501608],
[-17.04247237978949,145.7393197994499]
], {className: 'LotStyle'}).bindPopup('Lot 245 Annan Bend');
LotStage2.addLayer(L245);





var L244 = L.polygon([
[-17.04261270867548,145.7393594014663],
[-17.04263594299252,145.7394049769923],
[-17.04255307486734,145.7396328849829],
[-17.04240326527468,145.7395921129976],
[-17.0424723358508,145.7393198915284],
[-17.04261270867548,145.7393594014663]
], {className: 'LotStyle'}).bindPopup('Lot 244 Annan Bend');
LotStage2.addLayer(L244);






var L243 = L.polygon([
[-17.04307453402401,145.7394056769519],
[-17.04305862455287,145.7394491471327],
[-17.04302874536231,145.7395325160963],
[-17.04277504366294,145.7394338696597],
[-17.04282126898352,145.7393057648771],
[-17.04307453402401,145.7394056769519]
], {className: 'LotStyle'}).bindPopup('Lot 243 Annan Bend');
LotStage2.addLayer(L243);






var L242 = L.polygon([
[-17.04312528072769,145.7392663353049],
[-17.04307462340225,145.7394056769572],
[-17.04282126898381,145.7393061504733],
[-17.04287177624767,145.7391669484657],
[-17.04312528072769,145.7392663353049]
], {className: 'LotStyle'}).bindPopup('Lot 242 Annan Bend');
LotStage2.addLayer(L242);





var L241 = L.polygon([
[-17.04319481933515,145.7390753629393],
[-17.04312528074475,145.7392663352934],
[-17.04287178893739,145.739167244634],
[-17.04274955818005,145.7391188795839],
[-17.04280422206731,145.7389687468271],
[-17.04319481933515,145.7390753629393]
], {className: 'LotStyle'}).bindPopup('Lot 241');
LotStage2.addLayer(L241);






var L240 = L.polygon([
[-17.04280438042663,145.7389687404852],
[-17.04272015724214,145.7391984771955],
[-17.04267264746229,145.7392241378776],
[-17.04255114684817,145.7391911458996],
[-17.04262052246117,145.7389184024572],
[-17.04280438042663,145.7389687404852]
], {className: 'LotStyle'}).bindPopup('Lot 240 Annan Bend');
LotStage2.addLayer(L240);






var L239 = L.polygon([
[-17.04262046385754,145.7389182472918],
[-17.04255153626023,145.7391907385066],
[-17.04241173267676,145.7391524515634],
[-17.04248072189795,145.7388801140377],
[-17.04262046385754,145.7389182472918]
], {className: 'LotStyle'}).bindPopup('Lot 239 Annan Bend');
LotStage2.addLayer(L239);





var L238 = L.polygon([
[-17.04234130021278,145.7388415912756],
[-17.04248065601341,145.7388801829489],
[-17.04241188316566,145.739151975193],
[-17.04227247133716,145.7391140427297],
[-17.04234130021278,145.7388415912756]
], {className: 'LotStyle'}).bindPopup('Lot 238 Annan Bend');
LotStage2.addLayer(L238);





var L237 = L.polygon([
[-17.04234134486323,145.7388415535145],
[-17.04227280411085,145.7391143907132],
[-17.04213206139078,145.7390757622881],
[-17.04220100935482,145.7388036851901],
[-17.04234134486323,145.7388415535145]
], {className: 'LotStyle'}).bindPopup('Lot 237 Annan Bend');
LotStage2.addLayer(L237);





var L236 = L.polygon([
[-17.04205287208114,145.7387625569884],
[-17.04220087758495,145.7388036162799],
[-17.04213239414948,145.7390757622712],
[-17.0420222621525,145.7390458339825],
[-17.04199531133925,145.7389995492724],
[-17.04205287208114,145.7387625569884]
], {className: 'LotStyle'}).bindPopup('Lot 236 Annan Bend');
LotStage2.addLayer(L236);


var L235 = L.polygon([
[-17.04205253937158,145.7387622090648],
[-17.04206551547195,145.7387086161004],
[-17.04209645849741,145.7386049101982],
[-17.04212407432259,145.7385286966946],
[-17.04217231934513,145.7385043360113],
[-17.04227047335816,145.7385311320197],
[-17.0422009348308,145.7388036212522],
[-17.04205253937158,145.7387622090648]
], {className: 'LotStyle'}).bindPopup('Lot 235 Bulleringa Loop');
LotStage2.addLayer(L235);


var L234 = L.polygon([
[-17.04241021797557,145.7385690640418],
[-17.04234134483802,145.7388415534764],
[-17.04220094347044,145.7388036851903],
[-17.0422704732727,145.7385307839592],
[-17.04241021797557,145.7385690640418]
], {className: 'LotStyle'}).bindPopup('Lot 234 Bulleringa Loop');
LotStage2.addLayer(L234);


var L233 = L.polygon([
[-17.0425329935796,145.7386024721527],
[-17.04246345498073,145.7388753097392],
[-17.04234130021278,145.7388415912756],
[-17.04241055060545,145.7385694119993],
[-17.0425329935796,145.7386024721527]
], {className: 'LotStyle'}).bindPopup('Lot 233 Bulleringa Loop');
LotStage2.addLayer(L233);


var L232 = L.polygon([
[-17.04253266078201,145.7386024720669],
[-17.04265510374915,145.7386365762833],
[-17.04258521479778,145.7389085738988],
[-17.04246345494374,145.738875309744],
[-17.04253266078201,145.7386024720669]
], {className: 'LotStyle'}).bindPopup('Lot 232 Bulleringa Loop');
LotStage2.addLayer(L232);


var L231 = L.polygon([
[-17.04277688118281,145.7386696364625],
[-17.04270796639822,145.7389425475019],
[-17.04258528068227,145.7389085738988],
[-17.04265510368576,145.7386369242497],
[-17.04277688118281,145.7386696364625]
], {className: 'LotStyle'}).bindPopup('Lot 231 Bulleringa Loop');
LotStage2.addLayer(L231);


var L230 = L.polygon([
[-17.04290836672098,145.7387055975749],
[-17.04283914231895,145.7389782007342],
[-17.0427080462471,145.738942473732],
[-17.04277728842645,145.7386698557156],
[-17.04290836672098,145.7387055975749]
], {className: 'LotStyle'}).bindPopup('Lot 230 Bulleringa Loop');
LotStage2.addLayer(L230);


var L229 = L.polygon([
[-17.04303065543969,145.7387392765872],
[-17.04296146291016,145.7390116079826],
[-17.04283916168189,145.7389781817126],
[-17.04290842119232,145.7387057430354],
[-17.04303065543969,145.7387392765872]
], {className: 'LotStyle'}).bindPopup('Lot 229 Bulleringa Loop');
LotStage2.addLayer(L229);


var L228 = L.polygon([
[-17.04315301734058,145.7387729608956],
[-17.0430837283862,145.7390449601274],
[-17.04296146291025,145.7390116768931],
[-17.04303103638177,145.7387394954359],
[-17.04315301734058,145.7387729608956]
], {className: 'LotStyle'}).bindPopup('Lot 228 Bulleringa Loop');
LotStage2.addLayer(L228);


var L227 = L.polygon([
[-17.04329134278724,145.7388112492455],
[-17.04319491928586,145.7390755116864],
[-17.04308374133426,145.7390450746483],
[-17.04315302248643,145.7387728503797],
[-17.04329134278724,145.7388112492455]
], {className: 'LotStyle'}).bindPopup('Lot 227 Bulleringa Loop');
LotStage2.addLayer(L227);


var L226 = L.polygon([
[-17.04340781099491,145.7383859721574],
[-17.04333246792204,145.7386812575703],
[-17.04319314268026,145.7386429787022],
[-17.04326786156093,145.7383479668274],
[-17.04340781099491,145.7383859721574]
], {className: 'LotStyle'}).bindPopup('Lot 226 Bulleringa Loop');
LotStage2.addLayer(L226);


var L225 = L.polygon([
[-17.04326760846834,145.7383484962283],
[-17.0431931860929,145.7386432661382],
[-17.04305774602802,145.7386057765468],
[-17.04313289023585,145.7383106857352],
[-17.04326760846834,145.7383484962283]
], {className: 'LotStyle'}).bindPopup('Lot 225 Bulleringa Loop');
LotStage2.addLayer(L225);


var L224 = L.polygon([
[-17.04313244206861,145.7383107205771],
[-17.04305747248453,145.7386057764728],
[-17.0429138239607,145.7385662836867],
[-17.04298851984198,145.7382709417721],
[-17.04313244206861,145.7383107205771]
], {className: 'LotStyle'}).bindPopup('Lot 224 Bulleringa Loop');
LotStage2.addLayer(L224);


var L223 = L.polygon([
[-17.04298824630275,145.7382715141916],
[-17.04291382400901,145.7385662837067],
[-17.04277345887222,145.73852764951],
[-17.04284870193262,145.7382325939843],
[-17.04298824630275,145.7382715141916]
], {className: 'LotStyle'}).bindPopup('Lot 223 Bulleringa Loop');
LotStage2.addLayer(L223);


var L222 = L.polygon([
[-17.04284870198397,145.738232593996],
[-17.04277373251789,145.7385279356797],
[-17.04261612954086,145.7384847226804],
[-17.04269109893248,145.7381899535799],
[-17.04284870198397,145.738232593996]
], {className: 'LotStyle'}).bindPopup('Lot 222 Bulleringa Loop');
LotStage2.addLayer(L222);


var L221 = L.polygon([
[-17.04269109899816,145.7381893812501],
[-17.04261640322113,145.7384850088673],
[-17.04247631168231,145.7384466609856],
[-17.04255128101374,145.7381516059012],
[-17.04269109899816,145.7381893812501]
], {className: 'LotStyle'}).bindPopup('Lot 221 Bulleringa Loop');
LotStage2.addLayer(L221);


var L220 = L.polygon([
[-17.04255127750943,145.7381511612919],
[-17.04247636382232,145.7384463548305],
[-17.04234142281394,145.7384100038211],
[-17.0424159579038,145.738113853598],
[-17.04255127750943,145.7381511612919]
], {className: 'LotStyle'}).bindPopup('Lot 220 Bulleringa Loop');
LotStage2.addLayer(L220);


var L219 = L.polygon([
[-17.04241551479168,145.7381141877563],
[-17.04234094092875,145.7384092151848],
[-17.04220573981946,145.7383720018997],
[-17.04228088288378,145.7380769746288],
[-17.04241551479168,145.7381141877563]
], {className: 'LotStyle'}).bindPopup('Lot 219 Bulleringa Loop');
LotStage2.addLayer(L219);


var L218 = L.polygon([
[-17.04228088298516,145.7380766769583],
[-17.04220517062587,145.7383720019105],
[-17.0420471988008,145.7383288345644],
[-17.04215222837926,145.7380415478501],
[-17.04228088298516,145.7380766769583]
], {className: 'LotStyle'}).bindPopup('Lot 218 Bulleringa Loop');
LotStage2.addLayer(L218);

