$(document).ready(function() {
    var locationJSON;    
    $.ajax({
        url : 'http://ip-api.com/json',
        type : 'GET',
        dataType : 'json',
        async: false,
        success : function(json) {
            locationJSON = json;
        }, 
        error : function(xhr, status) {
            alert('Disculpe, error determinando su ubicación');
        }, 
    });
    var urlApiWeather = "http://api.openweathermap.org/data/2.5/weather?q=" + locationJSON.city + "&APPID=bb36ece062396394916c3426efa588e4";
    $.getJSON(urlApiWeather, function(params) {
        $("#location").append(locationJSON.city + ", " + locationJSON.country);
        $("#location-weather").append(params.main.temp);
        console.log(params, locationJSON);
    });
});