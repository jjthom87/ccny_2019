$(document).ready(function(){
	/*
		1. Use the search box and the giphy api
		2. When you click search, the modal pops up with one random giphy from the search
		3. When you click on the next button, a new giphy shows
		4. Only one giphy should be in the modal at a time
	*/

	var randomIndex;
	var data;
	$("#search-button").on('click', function(){
		var searchInput = $("#search-input").val().split(" ").join("+");
		$.ajax({
			type: 'GET',
			url: "http://api.giphy.com/v1/gifs/search?q=" + searchInput + "&api_key=dc6zaTOxFJmzC&limit=10",
			success: function(res){
				data = res.data;
				console.log(res);

				appendAndRemoveGiphy()

				$('#exampleModal').modal();
			}
		});
	});

	$("#modal-next-button").click(function(){
		appendAndRemoveGiphy()
	});

	function appendAndRemoveGiphy(){
		$(".giphy-image").remove();
		randomIndex = Math.floor(Math.random() * data.length);
		var img = $("<img>", {
			src: data[randomIndex].images.fixed_height.url,
			class: "giphy-image"
		})

		$(".modal-body").append(img);
	}


});