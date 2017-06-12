<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        
        <?php
        // put your code here
        ?>
        
<?php echo "var L334 = L.polygon("; ?>
<?php echo "[[-17.04440377800294,145.7398823900024],[-17.04433972381106,145.7400585369476],[-17.04408661553813,145.7399586814424],[-17.04413759740198,145.7398178552146],[-17.04418422098722,145.7397957517161],[-17.04440377800294,145.7398823900024]],"; ?>
<?php echo "{className: 'LotStyle'}"; ?>
<?php echo ").bindPopup('<strong>Lot 334 Homevale Entrance</strong>');"; ?>
<?php echo "LotStage3.addLayer(L334);";?>
<?php echo "LotStage_Circles.addLayer( new L.circle( L334.getBounds().getCenter() , { className: 'LotCircle' , radius: C_Radius}));";?>


    </body>
</html>
