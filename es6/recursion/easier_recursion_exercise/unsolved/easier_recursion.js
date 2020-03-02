$(document).ready(function(){

	var animals = ["whale", "shark", "seal", "giraffe", "lion", "monkey", "lemur", "sloth", "gorilla", "hummingbird", "cat", "dog"]
	var only5Animals = [];

	/*
		Add 5 random animals from the animals array to another array using recursion
	*/
	var randomIndex;
	function addToArray(){
		randomIndex = Math.floor(Math.random() * animals.length);

		if(only5Animals.length < 5){
			if(only5Animals.indexOf(animals[randomIndex]) == -1){
				only5Animals.push(animals[randomIndex])
			}
			addToArray();
		}

	}

	addToArray();
	console.log(only5Animals)


	/*
		Extra Challenge: Make sure no duplicates get added to the only5Animals Array
	*/

});