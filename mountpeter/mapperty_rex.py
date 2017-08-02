from bs4 import BeautifulSoup
import requests

url = 'mtpeterestate.com.au/XML/feedsync/?action=do_output&type=residential'
r  = requests.get("http://" +url)
data = r.text
soup = BeautifulSoup(data, 'lxml')


for prop in soup.find_all('residential'):
	status = prop.get('status')
	streetnumber = (prop.find_all('streetnumber', text=True)[0].contents[0])
	streetName = (prop.find_all('street', text=True)[0].contents[0])

	address_string = (streetnumber + " " + streetName)

	priceView = (prop.find_all('priceview', text=True)[0].contents[0])

	Lot_Number = streetnumber.split()[-1]

	uniqueID = ("L" + Lot_Number)

	if status == "current":
		status = "LotCircle"
	elif status == "sold":
		status = "LotCircle_SOLD"

	search_URL = 'https://mtpeterestate.com.au/property/?s=' + address_string.replace(' ', '+')

	print ("var " + uniqueID + " = L.polygon([")
	print ("") # Add Geometry Here
	print ("], {className: 'LotStyle'}).bindPopup('<center><strong>" + address_string + "</strong><br><p>Price: " + priceView + "</p><br><a href='" + search_URL + "' target='_blank'><br><button class='btn btn-success'>More Info...</button></a></center>');")
	print ("LotStage1.addLayer(" + uniqueID + ");")

	print ("LotStage_Circles.addLayer(new L.circle(" + uniqueID + ".getBounds().getCenter(), {className: '" + status + "', radius: C_Radius}));")

	print("")


