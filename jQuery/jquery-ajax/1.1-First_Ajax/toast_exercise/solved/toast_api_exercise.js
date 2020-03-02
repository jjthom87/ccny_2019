$(document).ready(function(){
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
					$('.toast-body').text("No results for " + $("#search-input").val())
					$('.toast').toast('show')
				}
			}
		});
	});

	var nextRandomIndex;
	$("#modal-next-button").click(function(){
		$('#giphy-div').remove();
		randomIndex = Math.floor(Math.random() * data.length);
		nextRandomIndex = Math.floor(Math.random() * data.length);
		// if(randomIndex != nextRandomIndex){

		// }
		var img = $("<img>", {
			src: data[randomIndex].images.fixed_height.url,
			class: "giphy-image"
		})

		var giphyDiv = $("<div id='giphy-div'>");
		giphyDiv.append(img);

		$('.modal-title').text($("#search-input").val());
		$('.modal-body').append(giphyDiv)
	});

	function recurseThis(num1, num2){
		var randomed = false;
		while(randomed = false){
			if(num1 == num2){
				recurseThis(num1, num2);
			} else {
				randomed = true;
			}
		}
		return 
	}

});