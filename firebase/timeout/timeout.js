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

	var employees;
	firebase.database().ref("employees").on('value', function(snapshot) {
		employees = snapshot.val();
	});

	setTimeout(function(){
		console.log(employees)
	}, 100);

	setTimeout(function(){
		console.log(employees)
	}, 300);

});