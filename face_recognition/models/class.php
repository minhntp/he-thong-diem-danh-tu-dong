<?php  
require_once "../connection.php";

/**
* 
*/
class Classes
{
	function __construct()
	{

	}
	function getAll(){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM class";	
			$result = $database->query($query);
			mysqli_close($database)	;
			return $result;
		
	}
	function getByID($id){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM class WHERE class_id='{$id}'";	
			$result = $database->query($query);
			mysqli_close($database)	;
			return $result;

	}

	function insert($class_id,$from,$to,$class_name,$teacher_id,$day_of_weak,$room_id){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query ="INSERT INTO `class` (`class_id`, `class_name`, `teacher_id`, `day_of_week`, `start_time`, `stop_time`, `room_id`) VALUES ('{$class_id}', '{$class_name}', '{$teacher_id}', '{$day_of_weak}', '$from', '$to', '$room_id');";
			$result = $database->query($query);
			return $result;
			 
    }
    function update($class_id,$from,$to,$class_name,$teacher_id,$day_of_weak,$room_id,$old_id){
        $conn = new Connection();
        $database = $conn->getDatabase();
        $query ="UPDATE `class` SET `class_id` = '{$class_id}', `class_name` = '{$class_name}', `teacher_id` = '{$teacher_id}', `day_of_week` = '{$day_of_weak}', `start_time` = '{$from}', `stop_time` = '{$to}', `room_id` = '{$room_id}' WHERE `class`.`class_id` = '{$old_id}'; ";
        $result = $database->query($query);
        return $result;
         
    }
    function deleteById($id){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="DELETE FROM class WHERE class_id = '{$id}'";
		$result = $database->query($query);
		return $result; 
	}

}

?>