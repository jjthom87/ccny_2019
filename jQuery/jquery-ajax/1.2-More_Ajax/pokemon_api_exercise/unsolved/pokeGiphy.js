/*

Query the Giphy API
Display Results in html format
Set events on the results
api: http://api.giphy.com/v1/gifs/search?q=<right here>&api_key=dc6zaTOxFJmzC&limit=10

*/

$(document).ready(function(){
	
	$('#search-button').on('click', function(){
		$("#search-results").empty();
		$.ajax({
			type: 'GET',
			url: "http://api.giphy.com/v1/gifs/search?q=" + $("#search-input").val().split(" ").join("+") + "&api_key=dc6zaTOxFJmzC&limit=10",
			success: function(res){
				var data = res.data;
				console.log(res);
				for(var i = 0; i < data.length; i++){
					var img = $("<img>", {
						src: data[i].images.fixed_height.url,
						class: "giphy-image"
					})
					img.attr("state", "active");
					img.attr("active", data[i].images.fixed_height.url);
					img.attr("still", data[i].images.fixed_height_still.url)
					$("#search-results").append(img);
				}
			}
		});
	});

	$(document).on("click", ".giphy-image", function(){
		if($(this).attr("state") === "active"){
			console.log("changing state and src to still")
			$(this).attr("src", $(this).attr("still"))
			$(this).attr("state", "still");
		} else if ($(this).attr("state") === "still") {
			console.log("changing state and src to active")
			$(this).attr("src", $(this).attr("active"))
			$(this).attr("state", "active");
		}
	});

});