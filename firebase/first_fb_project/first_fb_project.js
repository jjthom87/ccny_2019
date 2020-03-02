  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD2IZaVmx4gfaYK1B50gG4tFmf9B3qCXRY",
    authDomain: "classapplication2.firebaseapp.com",
    databaseURL: "https://classapplication2.firebaseio.com",
    projectId: "classapplication2",
    storageBucket: "classapplication2.appspot.com",
    messagingSenderId: "206111181112",
    appId: "1:206111181112:web:b1e4f5262da8830f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // a set is writing to your firebase database
  // set will override the current value of the ref

   firebase.database().ref("foo").set("car")
   firebase.database().ref("foo").remove();
  // firebase.database().ref("number").set(1002)
  // firebase.database().ref("array").set(["hey", "you"])
  // firebase.database().ref("object").set({"hey": "you"})

  // a push will add to an array
  firebase.database().ref("array").push("I said")

  firebase.database().ref("array_two").set([])

  //getting the current value of the "foo" ref
  firebase.database().ref("foo").on("value", function(snapshot){
  	console.log(snapshot.val())
  });

  firebase.database().ref("array").on("value", function(snapshot){
  	$("#add-to-me").empty();
  	var ul = $("<ul>");
	snapshot.forEach(function(childSnapshot) {
		console.log(childSnapshot.val())
		var li = $("<li>").text(childSnapshot.val());
		ul.append(li)
	});
	$("#add-to-me").append(ul)
  });