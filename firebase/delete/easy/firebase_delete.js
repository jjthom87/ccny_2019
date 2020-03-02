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

var setDeletionWordsInFirebase = () => {
	firebase.database().ref("deletion_words_two").set(
		[
			"delete",
			"me",
			"please"
		]
	)
}
//setDeletionWordsInFirebase();

firebase.database().ref("deletion_words_two/0").remove();