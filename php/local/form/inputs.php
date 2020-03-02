<!DOCTYPE html>
<html>
<head>
	<title>Form</title>
</head>
<body>
	<form method="post">
		Name: <input type="text" name="name"><br>
		E-mail: <input type="text" name="email"><br>
		<select id="select-this">
			<?php
				$languages = array("php", "java", "javascript");
				for($i = 0; $i < sizeof($languages); $i++){
					echo "<option value=".$languages[$i].">".$languages[$i]."</option>";
				}
			?>
		</select>
		<input type="submit">
	</form>
	<p id="append-this"></p>

	<?php

	$name = $_POST["name"];
	$email = $_POST["email"];

	if($name == "jared" && $email == "yo"){
		echo "<h1>WASSSSSSSSAP</h1>";
	}

	?>
</body>
<script type="text/javascript">
	document.getElementById("select-this").onchange = function(e){
		document.getElementById("append-this").innerText = e.target.value;
	}
</script>
</html>