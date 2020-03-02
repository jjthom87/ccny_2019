/*

Use the OMDB api to create a quick movie search app:
	1. Using jquery's methods .click() method
	2. Get the val() or value of the input
	3. Manipulate the val() to replace the spaces with "+" and store that in a variable
	4. Add that variable to the end of the url string, after the '&t='
		- note, this should be a movie name
	5. Add the COMPLETE url string to the ajax get call, in the 'url' field
	6. console.log the response when it is called
	7. Get the title and poster from the 'response' object
	8. Append those to the dom
	9. Extra: * If you get this far, add more items to the dom and format it nicely
			  use twitter bootstrap
			  * After a new search, be sure to remove the last search results
			  * If there is a response.Error, display to the user that the movie does not exist

*/

$(document).ready(function(){

	var omdb_url = 'http://www.omdbapi.com/'
	var api_key = "40e9cece";
	$('#movie-button').on('click', function(){

		var movieInput = $('#movie-input').val().toLowerCase().split(" ").join("+");

		console.log(`${omdb_url}?apikey=${api_key}&t=${movieInput}`)
		$.ajax({
			type: 'GET',
			url: `${omdb_url}?apikey=${api_key}&t=${movieInput}`,
			success: function(response){
				console.log(response);
				$('.movie-div').empty();

				if(!response.Error){
					var movieResponseDiv = $('<div>');
					movieResponseDiv.addClass('movie-div');

					var title = $('<h2>');
					title.text(response.Title);

					var poster = $('<img>');
					poster.attr('src', response.Poster);

					movieResponseDiv.append(title).append(poster);
					$('#movie-results').append(movieResponseDiv);
					$('#movie-input').val("");
				} else {
					$('#movie-input').val("");
					alert("No Movie By That Name!")
				}
			}
		})
	})

});