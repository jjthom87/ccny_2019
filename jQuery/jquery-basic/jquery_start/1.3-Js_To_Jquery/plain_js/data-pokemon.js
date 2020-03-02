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

console.log(pokemon)

var imageString = "";

for(var i = 0; i < pokemon.length; i++){
	if(pokemon[i].level == 1){
		imageString += "<img class='pokemon-img' src='./"+ pokemon[i].img +"' height=300 width=300 style='padding: 15px;' pokemon="+ pokemon[i].name +" />"
	}
}

document.getElementById("append-to-me").innerHTML = imageString;

//document.body.innerHTML += imageString;

//https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
document.body.onclick = function(e){
	if(e.target.className = "pokemon-img"){
		for(var i = 0; i < pokemon.length; i++){
			if(e.target.getAttribute("pokemon") === "squirtle"){
				if(pokemon[i].level == 2 && pokemon[i].type === "water"){
					e.target.src = pokemon[i].img;
					e.target.setAttribute("pokemon", pokemon[i].name)
					break;
				}
			} else if (e.target.getAttribute("pokemon") === "bulbasaur"){
				if(pokemon[i].level == 2 && pokemon[i].type === "plant"){
					e.target.src = pokemon[i].img;
					e.target.setAttribute("pokemon", pokemon[i].name)
					break;
				}		
			} else if (e.target.getAttribute("pokemon") === "ivysaur"){
				if(pokemon[i].level == 3 && pokemon[i].type === "plant"){
					e.target.src = pokemon[i].img;
					e.target.setAttribute("pokemon", pokemon[i].name);
					break;
				}			
			} else if (e.target.getAttribute("pokemon") === "wartortle"){
				if(pokemon[i].level == 3 && pokemon[i].type === "water"){
					e.target.src = pokemon[i].img;
					e.target.setAttribute("pokemon", pokemon[i].name)
					break;
				}			
			} else if (e.target.getAttribute("pokemon") === "blastoise"){
				alert("You're done");
				break;
			}
		}
	}
}