/*
	https://firebase.google.com/docs/database/web/start?authuser=0
*/
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

firebase.database().ref('foo').set("bar");

firebase.database().ref('foo').on('value', function(snapshot) {
	console.log(snapshot.val())
});

firebase.database().ref('foo').remove();

firebase.database().ref('members').set(["Jared", "Bob"]);

firebase.database().ref('users/1').set({name: "Jared", age: 21});
firebase.database().ref('users/2').set({name: "Bob", age: 31});

firebase.database().ref('members').on('value', function(snapshot) {
	console.log(snapshot.val())
});

firebase.database().ref('users').on('value', function(snapshot) {
	console.log(snapshot.val())
});

firebase.database().ref('users/1').on('value', function(snapshot) {
	console.log(snapshot.val())
});

// firebase.database().ref('users').remove();
firebase.database().ref('animals').set(["lion", "tiger"]);
firebase.database().ref('animals').push("bear");

firebase.database().ref('animals').on('value', function(snapshot) {
	var ul = $("<ul>");
	snapshot.forEach(function(childSnapshot) {
		console.log(childSnapshot.val());
		var li = $("<li>").text(childSnapshot.val());
		ul.append(li);
	});
	$("#add-to-me").append(ul)
});

