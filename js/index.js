$(document).ready(function() {
    var locationJson;
    $.ajax({
        url : 'https://ipapi.co/json/',
        type : 'GET',
        dataType : 'json',
        async: false,
        success : function(json) {
            locationJSON = json;
        }, 
        error : function(xhr, status) {
            alert('Sorry, error determining your location.');
        }, 
    });    
    
    var urlApiWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + locationJSON.city + "&APPID=bb36ece062396394916c3426efa588e4";
    var celcius, farenheit;
    $.getJSON(urlApiWeather, function(params) {
        celcius = (params.main.temp - 273).toFixed(2);
        farenheit = (celcius * 1.8 + 32).toFixed(2);
        $("#location").append(locationJSON.city + ", " + locationJSON.country);
        $("#location-weather").append(celcius + " °C");
        $("#icon-weather").attr("src", "http://openweathermap.org/img/w/" + "" + params.weather[0].icon + ".png");        
    });

    $("#location-weather").click(function() {
        unit = this.textContent[7];    
        if (unit == "C") {        
            $("#location-weather").empty().append(farenheit + " °F");
        } else {
            $("#location-weather").empty().append(celcius + " °C");
        }   
    });    
});
