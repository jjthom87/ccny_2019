/*

Use the OMDB api to create a quick movie search app:
	1. Using jquery's methods .click() method
	2. Get the val() or value of the input
	3. Manipulate the val() to replace the spaces with "+" and store that in a variable
	4. Add that variable to the end of the url string, after the '&t='
		- note, this should be a movie name
	5. Add the COMPLETE url string to the ajax get call, in the 'url' field
		- Example api url string looks like this: http://www.omdbapi.com/?apikey=40e9cece&t=independence+day
		- As you can see, the apikey goes after the ? and the movie title goes after the &t=
	6. console.log the response when it is called
	7. Get the title and poster from the 'response' object
	8. Append those to the dom
	9. Extra: * If you get this far, add more items to the dom and format it nicely
			  use twitter bootstrap
			  * After a new search, be sure to remove the last search results
			  * If there is a response.Error, display to the user that the movie does not exist

*/

$(document).ready(function(){

	$("#all-movie-stuff").hide();

	var users = [
		{
			username: 'jared',
			password: 'whattup'
		},{
			username: 'bing',
			password: 'bong'
		}
	];

	$('#login-form').on('submit', function(e){
		e.preventDefault();

		var userNameExists = false;
		var passwordMatches = false;
		for(var i = 0; i < users.length; i++){
			if(users[i].username === $('#username-input').val()){
				userNameExists = true;
				if(users[i].password === $('#password-input').val()){
					passwordMatches = true;
					$("#all-movie-stuff").show();
					$("#login-form-div").hide();
				}
			}
		}
		if(!userNameExists){
			alert("Username does not exist");
		}
		if(userNameExists && !passwordMatches) {
			alert("Password doesn't match")
		}
	});

	var omdb_url = 'http://www.omdbapi.com/'
	var api_key = "40e9cece";
	var movieResponse;
	$("#movie-button").on("click", function(){

		var movieInput = $("#movie-input").val().split(" ").join("+");
		var completeUrl = omdb_url + "?apikey=" + api_key + "&t=" + movieInput;

		$("#movie-div").remove();
		$("#plot-div").empty();

		$.ajax({
			type: 'GET',
			url: completeUrl,
			success: function(response){
				movieResponse = response;
				console.log(response);
				var movieDiv = $("<div id='movie-div'>");

				var movieTitle = $("<p>");
				movieTitle.text(response.Title);

				var moviePoster = $("<img>");
				moviePoster.attr("src", response.Poster);
				moviePoster.attr("movie-title", movieInput);
				moviePoster.addClass("movie-poster");

				movieDiv.append(movieTitle);
				movieDiv.append(moviePoster);

				$("#movie-results").append(movieDiv);
			}
		})
	})

	var movieDiv = $("<div id='plot-div'>");
	$(document).on('mouseover','.movie-poster', function(){
		// var completeUrl = omdb_url + "?apikey=" + api_key + "&t=" + $(this).attr("movie-title")
		$("#plot-div").empty();
		movieDiv.append($("<p id='plot-p'>").text(movieResponse.Plot))
		$("#movie-plot").append(movieDiv);
		//$("#plot-div").empty();
		// $("#plot-p").remove();
		// $.ajax({
		// 	type: 'GET',
		// 	url: completeUrl,
		// 	success: function(response){
		// 		movieDiv.append($("<p id='plot-p'>").text(response.Plot))
		// 		$("#movie-plot").append(movieDiv);
		// 	}
		// })

	});

	var movieRatingsDiv = $("<div id='ratings-div'>");
	$(document).on('click', ".movie-poster", function(){
		$("#ratings-div").empty();
		var ul = $("<ul>");
		for(var i = 0; i < movieResponse.Ratings.length; i++){
			var li = $("<li>");
			li.text(movieResponse.Ratings[i].Source + ": " + movieResponse.Ratings[i].Value);
			ul.append(li);
		}
		movieRatingsDiv.append(ul);
		$("#movie-ratings").append(movieRatingsDiv);		
	});


});