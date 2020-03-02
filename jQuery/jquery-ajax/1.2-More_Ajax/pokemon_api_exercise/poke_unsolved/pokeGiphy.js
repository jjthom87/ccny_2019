/*

	1. Search a pokemon using this api, https://pokeapi.co/api/v2/pokemon/ + searchQuery
	2. If the pokemon does not exist, alert the user that the pokemon doesnt exist
		- I did not go over handling error codes in class, so i will do my best to explain it here
		- if the pokemon is not in the api's database, it will return a 404 (not found) error code
		- in order to handle this error in ajax:
		$.ajax({
			method: 'GET',
			url: 'api-search',
			statusCode: {
		        404: function() {		  
					<javascript functionality goes here>
					<in this case, alerting the user goes here>
		        }
		    }
	3. If the pokemon does exist:
		- display some attributes of the pokemon
		- display one random giphy of the pokemon

*/
$(document).ready(function(){

	$('#search-button').on('click', function(){
		$.ajax({
			type: 'GET',
			url: "https://pokeapi.co/api/v2/pokemon/" + $("#search-input").val().split(" ").join("+"),
			statusCode: {
		        404: function() {		  
		          	alert("Please Enter Correct Pokemon Name");
		        }
		    },
			success: function(res){
				var pokemonName = res.name;
				var pokemonType = res.types[0].type.name;
				$("#search-results").html("<p>Name: " + pokemonName + "</p><p>Type: " + pokemonType + "</p>");

				$.ajax({
					type: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=" + pokemonName + "&api_key=dc6zaTOxFJmzC&limit=10",
					success: function(response){
						var randomIndex = Math.floor(Math.random() * response.data.length);

						var img = $("<img>", {
							src: response.data[randomIndex].images.fixed_height.url,
							class: "giphy-image"
						});

						$("#image-div").append(img)
					}
				});
			}
		});
	});

})