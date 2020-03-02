$(document).ready(function(){

	/*

		If there are no results for the giphy, use a toastr alert message

	*/
	var randomIndex;
	var data;
	$('#search-button').on('click', function(){
		$('#giphy-div').remove();
		$.ajax({
			type: 'GET',
			url: "http://api.giphy.com/v1/gifs/search?q=" + $("#search-input").val().split(" ").join("+") + "&api_key=dc6zaTOxFJmzC&limit=10",
			success: function(res){
				data = res.data;
				if(data.length > 0){
					randomIndex = Math.floor(Math.random() * data.length);
					
					var img = $("<img>", {
						src: data[randomIndex].images.fixed_height.url,
						class: "giphy-image"
					})

					var giphyDiv = $("<div id='giphy-div'>");
					giphyDiv.append(img);

					$('.modal-title').text($("#search-input").val());


					$('.modal-body').append(giphyDiv)
					$('#exampleModal').modal();
				} else {
					$(".toast-header").text("Error in Search");
					$(".toast-body").text($("#search-input").val() + " did not return any results.")
					$('.toast').toast('show')
				}
			}
		});
	});

	$("#modal-next-button").click(function(){
		$('#giphy-div').remove();
		randomIndex = Math.floor(Math.random() * data.length);
		var img = $("<img>", {
			src: data[randomIndex].images.fixed_height.url,
			class: "giphy-image"
		})

		var giphyDiv = $("<div id='giphy-div'>");
		giphyDiv.append(img);

		$('.modal-title').text($("#search-input").val());
		$('.modal-body').append(giphyDiv)
	});

});