<?php  
require_once "../connection.php";

/**
* 
*/
class RecordDate {
	function __construct() {

	}

	function getAll() {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM date_record";	
		$result = $database->query($query);
		mysqli_close($database)	;
		return $result;
	}
	function insert($date){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="INSERT INTO `date_record` (`date`) VALUES ('{$date}');";
		$result = $database->query($query);
		return $result;
	}	
}

?>