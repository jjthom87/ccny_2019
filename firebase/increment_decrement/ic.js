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

	var setNumInFirebase = function(){
		var num = 0;
		$("#num").text(num);

		firebase.database().ref('number').set(num);
	}
	setNumInFirebase();

	$("#increment-button").click(function(){
		var num;
		firebase.database().ref('number').on('value', function(snapshot) {
			num = snapshot.val();
		});
		num++;
		firebase.database().ref('number').set(num)
	});

	$("#decrement-button").click(function(){
		var num;
		firebase.database().ref('number').on('value', function(snapshot) {
			num = snapshot.val();
		});
		num--;
		firebase.database().ref('number').set(num)
	});

	firebase.database().ref('number').on('value', function(snapshot) {
		$("#num").text(snapshot.val())
	});

});