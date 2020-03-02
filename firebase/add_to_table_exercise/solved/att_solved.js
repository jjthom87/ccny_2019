$(document).ready(function(){

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

	firebase.database().ref('bands').on('value', function(snapshot) {
		$('#band-table > tbody').empty();
		snapshot.forEach(function(childSnapshot) {
		    $("#band-table").append($("<tr>").append($("<td>").text(childSnapshot.val())))
		});
	});

	$("#add-band-button").click(function(){
		var bandInput = $("#band-input").val();

		firebase.database().ref('bands').push(bandInput);
	})

});