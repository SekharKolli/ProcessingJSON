$(document).ready(function() {
    $('button').on('click', function() {
        var mylocation = $('#txtLocation').val();
        
        if(mylocation !== ""){
            var googleApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
            var googleApiKey = 'AIzaSyA_M7VnGki-4-0YfjMT18ZTJDGxbi2QMYQ';
			
			var paramsObj = {
				"address": location,
				"key" : googleApiKey
			};
			
            $.get(googleApiUrl, paramsObj, function(resp){
                
                var lat = resp.results[0].geometry.location.lat;
                var lng = resp.results[0].geometry.location.lng;
                
                displayMap(lat, lng);
            });
        }    
    });
    
function displayMap(lat, long) {
    var mapProperties = {
        "center": new google.maps.LatLng(lat, long),
        "zoom": 15,
        "mapTypeId" : google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("divMap"), mapProperties);
}
    
});


