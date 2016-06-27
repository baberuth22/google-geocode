# Address to full address
Calls [Googles reverse geocode API](https://developers.google.com/maps/documentation/geocoding/) converting address to full address and lat lng coordinates

# install
```
meteor add baberuth22:google-geocode
```

# Usage

*Convert zipcode to address*
Returns whole data from Google API. Check below for tidy outputs
```
var zipcode = 93109;
geocode.getLocation(zipcode, function(location){

	//location is straight output from Google
	//or you can now access it from geocode object
	Session.set('location', geocode.getAddrStr());
});
```

*Use this if you are using https*
```
var zipcode = 93109;
geocode.getSecureLocation(zipcode, function(location){

  //location is straight output from Google
  //or you can now access it from geocode object
  Session.set('location', geocode.getAddrStr());
});
```

*Data is accessible from*
```
geocode.data
```

*Format address as an Object*
```
geocode.getAddrObj()
```

*Format address as a String*
```
geocode.getAddrStr()
```

*Get postal code*
```
geocode.getPostalCode()
```
