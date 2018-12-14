<?php  
require_once "../connection.php";

/**
* 
*/
class DailyRecord
{
    public $date;
	function __construct($date)
	{
        $this->date = $date;
	}
	function getAll(){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM "."`{$this->date}`";	
			$result = $database->query($query);
			mysqli_close($database)	;
			return $result;
		
	}
	function getByID($id){
			
			$conn = new Connection();
			
			$database = $conn->getDatabase();
			
			$query = "SELECT * FROM `"."{$this->date}"."` WHERE student_id='{$id}'";	
			
			$result = $database->query($query);
			
			mysqli_close($database)	;
			
			return $result;

	}
 	function deleteById($id){
		
		$conn = new Connection();
		
		$database = $conn->getDatabase();
		
		$query = "delete FROM `"."{$this->date}"."` WHERE student_id='{$id}'";

		$result = $database->query($query);
		
		mysqli_close($database)	;
		
		return $result;
	 }
	 function insert($id){
		$conn = new Connection();
		
		$database = $conn->getDatabase();
		
		$query = "insert into `"."{$this->date}"."` (`student_id`) values({$id})" ;	
		
		$result = $database->query($query);
		
		mysqli_close($database)	;
		
		return $result;
	 }

}

?>