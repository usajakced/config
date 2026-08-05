
function wpfh_getLocationCoordinate(address) {
 
    var position = {};
    jQuery.ajax({
        url : 'http://maps.google.com/maps/api/geocode/json',
        type : 'GET',
        data : {
            address : address,
            sensor : false
        },
        async : false,
        success : function(result) {
 
            try {
                position.lat = result.results[0].geometry.location.lat;
                position.lng = result.results[0].geometry.location.lng;
            } catch(err) {
                position = null;
            }
 
        }
    });
    return position;
}


