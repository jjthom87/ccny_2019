//api documentation for weather api: https://openweathermap.org/api
//http://openweathermap.org/appid

$(document).ready(function(){
	//key create to gain access to weather map api
	var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';
	//url required for get response
	var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
	//need to tell the api what location you want to look up the weather for
	
	$("#weather-button").on('click', function(){
		var cityInput = $("#city-input").val().split(" ").join("+");

		var completeWeatherApiUrl = weatherApiUrl + cityInput;
		$.ajax({
			type: 'GET',
			//url created above
			url: completeWeatherApiUrl,
			success: function(response){
				//look at the console log of the response
				console.log(response)
				$('#temp').text("The temperature in " + response.name + " is " + response.main.temp)
			}

		});
		$('#city-input').val();
	})
	/*
		Exercise: When the button is clicked, log the weather response

		In jQuery
		1. When the weather button is clicked
		2. Get the city input value
			- reminder: if the city has spaces, they must be joined by "+"
		3. Add the input value to the end of the weatherApiUrl string
		4. use the url in an ajax GET call
		5. log the response
		6. Clear the city input box
	*/
})