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

	//1 add the string to firebase
	// $("#click-me").click(function(){
	// 	var inputValue = $("#firebase-input").val();

	// 	firebase.database().ref('jared').set(inputValue);

	// });

	//2 convert to array and add to array what is the input value
	$("#click-me").click(function(){
		var inputValue = $("#firebase-input").val();

		var arr;
		firebase.database().ref('jared').on('value', function(snapshot) {
			if(snapshot.val()){
				arr = snapshot.val();
			} else {
				firebase.database().ref('jared').set([inputValue]);
			}
		});
		setTimeout(()=>{
			if(arr){
				arr.push(inputValue);
				firebase.database().ref('jared').set(arr)
			}
		}, 1000)

	});

});