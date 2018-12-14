<?php  
require_once "../connection.php";

/**
* 
*/
class Setting {
	public $database;

	function __construct() {
		$conn = new Connection();
		$database = $conn->getDatabase();	
			
	}

	
	function getSettings() {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM settings";
		$result = $database->query($query);
		mysqli_close($database)	;
		return $result;
	}


	function update($min_score, $work_date, $start, $stop) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="UPDATE `settings` SET `minimum_score` = '{$min_score}', `work_days` = '{$work_date}', `start_time` = '{$start}', `end_time` = '{$stop}' WHERE `settings`.`id` = 0;
        ";
		$result = $database->query($query);
		return $result;
	}

}

?>