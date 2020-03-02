$(document).ready(function(){

	var beatles = [
		{
			album: "Help",
			year: 1965,
			img: "help"
		},
		{
			album: "Rubber Soul",
			year: 1966,
			img: "rubber_soul"
		},
		{
			album: "Sgt Peppers Lonely Hearts Club Band",
			year: 1967,
			img: "peppers"
		}
	];

	//Display the albums in order of year after 6 seconds each
	//remove the welcoming p tag right before the first album shows
	//Make sure to remove the album after 6 seconds and then display the next album
	//At the end of the slideshow, empty and then thank the viewers for watching

	appendBeatlesStuff(0, 6000);
	appendBeatlesStuff(1, 12000);
	appendBeatlesStuff(2, 18000);

	function appendBeatlesStuff(index, time){
		setTimeout(() => {
			if(time == 6000){
				$("p").eq(0).empty();
			}
			$("#add-to-me").empty();

			var albumP = $("<p>").text("Album: " + beatles[index].album)
			var yearP = $("<p>").text("Year: " + beatles[index].year)

			var img = $("<img>")
			img.attr("src", beatles[index].img + ".jpg")
			img.height(250)
			img.width(250);
			$("#add-to-me").append(albumP).append(yearP).append(img)
		}, time)	
	}

	setTimeout(() => {
		$("#add-to-me").empty();
		$("#add-to-me").append($("<p>").text("Thank you for viewing"))
	}, 24000);

});