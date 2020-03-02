//https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
}

//readTextFile("./../rps-2.js")
var openFile = function(event) {
	console.log(event.target)
	var input = event.target;

	var reader = new FileReader();
	reader.onload = function(){
		var text = reader.result;
		var node = document.getElementById('output');
		node.innerText = text;
  		console.log(reader.result.substring(0, 200));
	};
	console.log(input)
	reader.readAsText(input.files[0]);
};

fetch("./../rps-2.js")
  .then(response => response.text())
  .then(text => console.log(text))

//openFile("./../rps-2.js")