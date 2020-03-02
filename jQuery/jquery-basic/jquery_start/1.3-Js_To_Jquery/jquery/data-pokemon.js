var pokemon = [{
	name: "squirtle",
	level: 1,
	type: "water",
	img: "squirtle.png"
},{
	name: "bulbasaur",
	level: 1,
	type: "plant",
	img: "bulbasaur.png"
},{
	name: "wartortle",
	level: 2,
	type: "water",
	img: "wartortle.png"
},{
	name: "ivysaur",
	level: 2,
	type: "plant",
	img: "ivysaur.png"
},{
	name: "blastoise",
	level: 3,
	type: "water",
	img: "blastoise.png"
},{
	name: "venusaur",
	level: 3,
	type: "plant",
	img: "venusaur.png"
}]


var image;
for(var i = 0; i < pokemon.length; i++){
	image = $("<img>");
	if(pokemon[i].level == 1){
		image.addClass('pokemon-img');
		image.attr('src', './'+ pokemon[i].img +'');
		image.attr('pokemon', pokemon[i].name);
		image.height(300);
		image.width(300);
		image.css('padding', '15px');
		$("#append-to-me").append(image);
	}
}

$(document).on('click', '.pokemon-img', function(){
	for(var i = 0; i < pokemon.length; i++){
		if($(this).attr('pokemon') === "squirtle"){
			if(pokemon[i].level == 2 && pokemon[i].type === "water"){
				$(this).attr('src', pokemon[i].img);
				$(this).attr("pokemon", pokemon[i].name)
				break;
			}
		} else if ($(this).attr('pokemon') === "bulbasaur"){
			if(pokemon[i].level == 2 && pokemon[i].type === "plant"){
				$(this).attr('src', pokemon[i].img);
				$(this).attr("pokemon", pokemon[i].name)
				break;
			}		
		} else if ($(this).attr('pokemon') === "ivysaur"){
			if(pokemon[i].level == 3 && pokemon[i].type === "plant"){
				$(this).attr('src', pokemon[i].img);
				$(this).attr("pokemon", pokemon[i].name);
				break;
			}			
		} else if ($(this).attr('pokemon') === "wartortle"){
			if(pokemon[i].level == 3 && pokemon[i].type === "water"){
				$(this).attr('src', pokemon[i].img);
				$(this).attr("pokemon", pokemon[i].name)
				break;
			}			
		} else if ($(this).attr('pokemon') === "blastoise"){
			alert("You're done");
			break;
		}
	}
});