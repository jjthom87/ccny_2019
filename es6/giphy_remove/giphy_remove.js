$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "http://api.giphy.com/v1/gifs/search?q=puppies&api_key=dc6zaTOxFJmzC&limit=10",
		success: function(res){
			for(var i = 0; i < res.data.length; i++){
				var giphyImage = $("<img>");
				giphyImage.attr("src",res.data[i].images.fixed_height.url);
				$("#giphy-images").append(giphyImage)
			}
		}
	});

	$(document).on('click', 'img', function(){
		$(this).remove();
	});
});