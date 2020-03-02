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
	firebase.database().ref("update_words").set(
		[
			{
				name: "Jared",
				age: 31,
				bald: true
			}
		]
	)
}
setUpdateWordsInFirebase();

firebase.database().ref("update_words/0").update({bald: false})

