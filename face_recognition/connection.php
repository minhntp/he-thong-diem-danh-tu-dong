<?php 
/**
* Connection class
*/

class Connection
{
	private $mysqli;

	function __construct()
	{
		
	}

	public function getDatabase() {
		$db = array('host' => 'localhost', 'username' => 'root', 'password' => '', 'db_name' => 'student_manager');
		$this->mysqli = new mysqli($db["host"], $db["username"], $db["password"], $db["db_name"]);
		mysqli_query ($this->mysqli,"set collation_connection='utf8_general_ci'"); 
		mysqli_query ($this->mysqli,"set character_set_client='utf8'"); 
		mysqli_query ($this->mysqli,"set character_set_results='utf8'"); 
		return $this->mysqli;
	}
}

 ?>