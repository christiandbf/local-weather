function getLocation() {
    $.getJSON("http://ip-api.com/json", function(data) {
        $("#location").append(data.city + ", " + data.country);
    });
}
    
$(document).ready(function() {
    getLocation();
    var location = document.getElementById("location").textContent;
    
});
