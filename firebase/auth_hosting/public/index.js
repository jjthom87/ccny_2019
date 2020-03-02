//https://firebase.google.com/docs/auth/web/start
$(document).ready(function(){	
	var config = {
		apiKey: "AIzaSyCM319jPQ_dH0fh3pnKtWrZJgSdZZSkaQc",
		authDomain: "my-cool-demo-app-ea0c4.firebaseapp.com",
		databaseURL: "https://my-cool-demo-app-ea0c4.firebaseio.com",
		projectId: "my-cool-demo-app-ea0c4",
		storageBucket: "my-cool-demo-app-ea0c4.appspot.com",
		messagingSenderId: "48728940261"
	};
	firebase.initializeApp(config);

	var firebaseRef = firebase.database().ref();
	//var users = firebase.database().ref("Users");
	var signedInUser;
	var key;

	$('#logout_button').hide();
	$("#user-bio-form-div").hide();

	$('#sign_up_form').on('submit', function(e){
		e.preventDefault();
		var email = $('#email_su_input').val();
		var password = $('#password_su_input').val();
		firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
			firebaseRef.child("Users").child(user.uid).set({email: email, zip_code: $('#zip_su_input').val()})
			$('#email_su_input').val("");
			$('#zip_su_input').val("")
			$('#password_su_input').val("");
		}).catch(function(error) {
			if(error){
				throw new Error(error.code + " : " + error.message);
			}
		});
	});

	$('#sign_in_form').on('submit', function(e){
		e.preventDefault();
		var email = $('#email_si_input').val();
		var password = $('#password_si_input').val();
		firebase.auth().signInWithEmailAndPassword(email, password).then((success) => {
			$('#email_si_input').val("");
			$('#password_si_input').val("");
		}).catch(function(error) {
			if(error){
				alert(error.code + " : " + error.message)
				throw new Error(error.code + " : " + error.message);
			}
		});
	});

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log("User Signed In");
			console.log(user)
			$('#signed_in_user').empty();
			$('#auth-sign-div').hide();

			firebaseRef.on("value", function(snapshot) {
				console.log(snapshot.val())
				var users = snapshot.val().Users;
				var user_bios = snapshot.val().user_bios;
				var users_bio;
				key = user.uid;
				for(var i in users){
					if(users[i].email == user.email){
						signedInUser = users[i]
					}
				}
				for(var i in user_bios){
					console.log(user_bios[i])
					if(user_bios[i].key == key){
						users_bio = user_bios[i];
					}
				}
				console.log(signedInUser)
				console.log(users_bio)
				if(users_bio){
					$("#user-bio-form-div").hide();
					$("#users-bio").html("<h1>Your Bio</h1><p>Hometown: " + users_bio.hometown + "</p><p>Description: " + users_bio.bio + "</p>");
					$('#signed_in_user').text("Welcome " + users_bio.name)
				} else {
					$("#user-bio-form-div").show();
				}
			}, function(errorObject){
				console.log("Errors handled: " + errorObject.code)
			})

			$('#logout_button').show();
			$('#logout_button').on('click', function(){
				firebase.auth().signOut().then(function() {
					console.log("Signout Successful");
					$('#logout_button').hide();
					$("#user-bio-form-div").hide();
					$("#users-bio").empty();
					signedInUser = undefined;
					key = undefined;
				}, function(error) {
					throw new Error("Error: " + error);
				});
			})
		    // var displayName = user.displayName;
		    // var email = user.email;
		    // var emailVerified = user.emailVerified;
		    // var photoURL = user.photoURL;
		    // var isAnonymous = user.isAnonymous;
		    // var uid = user.uid;
		    // var providerData = user.providerData;
	    } else {
	    	console.log("No User Signed In")
	    	$('#auth-sign-div').show();
			$('#signed_in_user').empty();
			$('#signed_in_user').text("Please Sign up or Sign in")
	    }
	});

	$("#user-bio-form").on('submit', function(e){
		e.preventDefault();

		var data = {
			name: $("#name-input").val(),
			hometown: $("#hometown-input").val(),
			bio: $("#bio-input").val(),
			email: signedInUser.email,
			key: key
		}


		firebase.database().ref("user_bios").push(data)

	});

});
