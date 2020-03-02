<?php

require "./object.php";

for($i = 0; $i < sizeof($jareds); $i++){
	if($jareds[$i]->name == "Jared"){
		echo $jareds[$i]->age;
	}
}

//$a = new Person("Jared", 31);
// echo "\n";
// echo $a->name;
// echo "\n";
// echo $a->age;
// echo "\n";

// echo "\n";
// echo $b->name;
// echo "\n";
// echo $b->age;
// echo "\n";

?>