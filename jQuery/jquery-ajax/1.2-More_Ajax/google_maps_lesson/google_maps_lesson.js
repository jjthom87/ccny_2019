/* https://developers.google.com/maps/documentation/javascript/examples/ */
$(document).ready(function(){

	var host = 'data.usajobs.gov';
    var userAgent = 'rodricksnyc@gmail.com';
    var authKey = 'ZVRFnMsfJGJ+6jvGyznqQPRyhF9n5h9jSS259lekdgU=';
	var apiUrl = "https://data.usajobs.gov/api/Search?Organization=AF&PositionTitle=Logistics"
	var latsAndLongs = [];
	$.ajax({
		type: 'GET',
		url: apiUrl,
        headers: {
          "Host": host,
          "User-Agent": userAgent,
          "Authorization-Key": authKey
        },
      	success: function(response){
      		console.log(response)
      		var results = response.SearchResult.SearchResultItems;
      		for(var i = 0; i < results.length; i++){
      			for(var j = 0; j < results[i].MatchedObjectDescriptor.PositionLocation.length; j++){
      				latsAndLongs.push({lat: results[i].MatchedObjectDescriptor.PositionLocation[j].Latitude, lng: results[i].MatchedObjectDescriptor.PositionLocation[j].Longitude})
      			}
      		}
		    var map = new google.maps.Map(document.getElementById('map'), {
		      center: latsAndLongs[0],
		      zoom: 3
		    });

		    var marker;
		    for(var i = 0; i < latsAndLongs.length; i++){
			    marker = new google.maps.Marker({
			      position: latsAndLongs[i],
			      map: map
			    });
		    }
      	}
    });

})