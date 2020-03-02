<?php

class Person {
	function Person($name, $age){
		$this -> name = $name;
		$this -> age = $age;
	}
}

$a = new Person("Jared", 31);
$b = new Person("Bob", 32);
$jareds = array($a, $b);
var_export($jareds);
?>