// fill in the /* */
// The HTML does not need to be changed at all
// Everything done in javascript

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


/* assign an empty string to a variable called imageString */

for(/* loop through the pokemon array */){
	if(/* pokemons level is equal to 1 */){
		/* append to image string */ /* operation */ "<img class='pokemon-img' src='./"+ /* pokemon image */ +"' height=300 width=300 style='padding: 15px;' pokemon="+ /* pokemons name */ +" />"
	}

}

/* assign it to a variable called pokemonImages */ = /* get the newly created class name for the pokemon images */

/* get the div from the html */ = /* updated imageString */;


//https://stackoverflow.com/questions/19655189/javascript-click-event-listener-on-class
//document.body.onclick will register an on click on any element on the page and provide information about that element
//how do you get information about that element, e or event
document.body.onclick = function(e){
	//e is the object that comes out of every on click
	console.log(e)
	for(/* loop through the pokemon array */){
		if(/* using e, get the pokemon attribute */ === "squirtle"){
			if(/* pokemon (in array) level is 2 and the type is water */){
				/* tell me what line 61 does */
				e.target.src = /* pokemon (in array) image */;
				/* tell me what line 63 does */
				e.target.setAttribute("pokemon", /* pokemon (in array) name */)
				//this is needed to stop the for loop
				//you will see this in every conditional
				/* why do i need it? */
				break;
			}
		} else if (/* using e, get the pokemon attribute */ === "bulbasaur"){
			if(/* pokemon (in array) level is 2 and the type is plant */){
				e.target.src = /* pokemon (in array) image */;
				e.target.setAttribute("pokemon", /* pokemon (in array) name */)
				break;
			}		
		} else if (/* using e, get the pokemon attribute */ === "ivysaur"){
			if(/* pokemon (in array) level is 3 and the type is plant */){
				e.target.src = /* pokemon (in array) image */;
				e.target.setAttribute("pokemon", /* pokemon (in array) name */);
				break;
			}			
		} else if (/* using e, get the pokemon attribute */ === "wartortle"){
			if(/* pokemon (in array) level is 3 and the type is water */){
				e.target.src = /* pokemon (in array) image */;
				e.target.setAttribute("pokemon", /* pokemon (in array) name */)
				break;
			}			
		}
	}
}