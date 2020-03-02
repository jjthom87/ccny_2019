var explanationsDiv = document.getElementById("explanations-div")

explanationsDiv.style.display = "none";

var mythicalCreatures = 
[{
	name: "bigfoot",
	picture: "./bigfoot.jpg",
	displayName: "Bigfoot"
},{
	name: "abominable",
	picture: "./abominable.jpg",
	displayName: "Abominable+Snowman"
},{
	name: "nessie",
	picture: "./nessie.jpg",
	displayName: "Loch+Ness+Monster"
}]

var parentDiv = document.getElementById("append-to-me");

var htmlString = "<div>";

mythicalCreatures.forEach((mc) => {
	htmlString += "<img class='creature-image' height=300 width=300 src=" + mc.picture + " creature=" + mc.name + " creature-display=" + mc.displayName + " style='padding: 10px;'/>";
});

parentDiv.innerHTML = htmlString + "</div>";

for(var i = 0; i < mythicalCreatures.length; i++){
	document.getElementsByClassName("creature-image")[i].onclick = function(e){
		document.getElementById("creature-h3").innerText = this.getAttribute("creature-display").split("+").join(" ");
		
		if(this.getAttribute("creature") === "nessie"){
			displayAndHide(0,1,2);
		} else if (this.getAttribute("creature") === "bigfoot"){
			displayAndHide(1,0,2)
		} else {
			displayAndHide(2,0,1)
		}
	}
}

function displayAndHide(displayIndex, hideIndex1, hideIndex2){
	explanationsDiv.style.display = "contents";
	document.querySelector("#explanations-div").children[displayIndex].style.display = "contents";
	document.querySelector("#explanations-div").children[hideIndex1].style.display = "none";
	document.querySelector("#explanations-div").children[hideIndex2].style.display = "none";
}

