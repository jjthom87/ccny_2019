/*
	1. Add an input and a button to the html
	2. When the button is clicked, push the input to the firebase database
	3. Be sure the table is emptied when a band is added.
*/
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
		snapshot.forEach(function(childSnapshot) {
		    $("#band-table").append($("<tr>").append($("<td>").text(childSnapshot.val())))
		});
	});

});