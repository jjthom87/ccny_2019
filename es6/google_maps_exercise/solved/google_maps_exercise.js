$(document).ready(function(){

  var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';
  var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';

  $('#weather-button').on('click', function(){
    $("#weather-p").remove();
    $("#map").empty();
    var inputValue = $('#city-input').val().toLowerCase().split(" ").join("+");
    weatherApiUrl = weatherApiUrl + inputValue;
    $.ajax({
      type: 'GET',
      url: weatherApiUrl,
      statusCode: {
        404: function() {      
          alert($('#city-input').val() + " is not a valid city");
          weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
        }
      },
      success: function(response){
        var weather = $('<p id="weather-p">');
        weather.text(response.main.temp);
        weather.css('font-size', '36px');

        $('#weather-results').append(weather);

		    var map;
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: response.coord.lat, lng: response.coord.lon},
          zoom: 8
        });

        var marker = new google.maps.Marker({
          position: {lat: response.coord.lat, lng: response.coord.lon},
          map: map,
        });
        weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
      }
    });
  });

})