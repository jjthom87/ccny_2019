var firebaseConfig = {
	apiKey: "AIzaSyCtRNmmVhqdH3xrEAtOZ8zKE-sLSKS21Sw",
	authDomain: "classapp-1b61b.firebaseapp.com",
	databaseURL: "https://classapp-1b61b.firebaseio.com",
	projectId: "classapp-1b61b",
	storageBucket: "",
	messagingSenderId: "500229754372",
	appId: "1:500229754372:web:cfc2e76462bb9a7f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var setUpdateWordsInFirebase = () => {
	firebase.database().ref("actors").set(
		[
			{
				actor: "Sylvester Stallone",
				movies: ["Rambo"]
			},
			{
				actor: "Harrison Ford",
				movies: ["Air Force One"]
			}
		]
	)
}
setUpdateWordsInFirebase();

var omdb_url = 'http://www.omdbapi.com/'
var api_key = "40e9cece";

$("#add-button").on('click', function(){
	var actor = $('#actor-select').val();
	var movie = $("#movie-input").val();

	var movieArray;
	var key;

	var apiMovieInput = $('#movie-input').val().toLowerCase().split(" ").join("+");
	$.ajax({
		type: 'GET',
		url: `${omdb_url}?apikey=${api_key}&t=${apiMovieInput}`,
		success: function(response){
			console.log(response)
			if(!response.Error){
				firebase.database().ref("actors").on("value", function(snapshot){
					snapshot.forEach(function(childSnapshot){
						if(actor === childSnapshot.val().actor){
							key = childSnapshot.key
							movieArray = childSnapshot.val().movies;
						}
					});
				});
			
				setTimeout(function(){
					if(movieArray[0] === "default"){
						movieArray.splice(0,1)
					}
					movieArray.forEach((grandchildSnapshot) => {
						console.log(grandchildSnapshot)
					})
					if(response.Actors.indexOf(actor) > -1){
						movieArray.push(movie);
						firebase.database().ref(`actors/${key}`).update({movies: movieArray});
					} else {
						alert(actor + " is not in the movie " + movie);
					}
				}, 300)
			} else {
				$('#movie-input').val("");
				alert("No Movie By That Name!")
			}

		}
	})
});

//firebase.database().ref('actors').push({actor: "Will Smith", movies: ["default"]})

firebase.database().ref('actors').on('value', function(snapshot) {
	$("#actor-select").empty();

	var defaultOption = $("<option>")
	defaultOption.attr("disabled", true);
	defaultOption.attr("selected", true);
	defaultOption.text("Select an Actor");
	$("#actor-select").append(defaultOption);

	snapshot.forEach(function(actor) {
		var actorOption = $("<option>");
		actorOption.attr("value", actor.val().actor);
		actorOption.text(actor.val().actor);
		$("#actor-select").append(actorOption);
	});

});