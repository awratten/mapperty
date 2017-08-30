function populate(){
try {document.getElementById('L619').innerHTML= searchXML('Lot 619');} catch( ex ) {}
try {document.getElementById('L620').innerHTML= searchXML('Lot 620');} catch( ex ) {}
try {document.getElementById('L621').innerHTML= searchXML('Lot 621');} catch( ex ) {}
try {document.getElementById('L622').innerHTML= searchXML('Lot 622');} catch( ex ) {}
try {document.getElementById('L623').innerHTML= searchXML('Lot 623');} catch( ex ) {}
try {document.getElementById('L624').innerHTML= searchXML('Lot 624');} catch( ex ) {}
try {document.getElementById('L608').innerHTML= searchXML('Lot 608');} catch( ex ) {}
try {document.getElementById('L609').innerHTML= searchXML('Lot 609');} catch( ex ) {}
try {document.getElementById('L610').innerHTML= searchXML('Lot 610');} catch( ex ) {}
try {document.getElementById('L611').innerHTML= searchXML('Lot 611');} catch( ex ) {}
try {document.getElementById('L612').innerHTML= searchXML('Lot 612');} catch( ex ) {}
}

function loadXMLDoc(dname)
{
	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();
	}
	else
	{
		xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhttp.open("GET",dname,false);
	xhttp.send();
	return xhttp.responseXML;
} 
function searchXML(input)
{
	xmlDoc=loadXMLDoc("http://kenfrosthomes.com.au/XML/feedsync/?action=do_output&type=residential&status=current&street=Ainslie Place");
	x=xmlDoc.getElementsByTagName("residential");
	size = input.length;
	if (input == null || input == "")
	{
		return false;
	}
	for (i=0;i<x.length;i++)
	{
		startString = xmlDoc.getElementsByTagName("streetNumber")[i].childNodes[0].nodeValue;
		if (startString.toLowerCase() == input.toLowerCase())
		{
			streetNumber=xmlDoc.getElementsByTagName("streetNumber")[i].childNodes[0].nodeValue;
			street=xmlDoc.getElementsByTagName("street")[i].childNodes[0].nodeValue;
			suburb=xmlDoc.getElementsByTagName("suburb")[i].childNodes[0].nodeValue;
			bedrooms=xmlDoc.getElementsByTagName("bedrooms")[i].childNodes[0].nodeValue;
			bathrooms=xmlDoc.getElementsByTagName("bathrooms")[i].childNodes[0].nodeValue;
			garages=xmlDoc.getElementsByTagName("garages")[i].childNodes[0].nodeValue;
			priceView=xmlDoc.getElementsByTagName("priceView")[i].childNodes[0].nodeValue;
			divText = "<strong>" + streetNumber + " " + street + "</strong><br><p>" + priceView  + "</p><p> " + bedrooms +" <i class='fa fa-bed'></i> " + bathrooms + "<i class='fa fa-bath'></i> " + garages +" <i class='fa fa-car'></i></p>"
			break;
		}
		else
		{
			divText = "Contact Agent";
		}
	}
	return divText;
}
