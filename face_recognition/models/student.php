<?php  
require_once "../connection.php";

/**
* 
*/
class Student
{
	function __construct()
	{

	}

	function getAll(){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM student";	
			$result = $database->query($query);
			mysqli_close($database)	;
			return $result;
		
	}
	function getByID($id){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM student WHERE id_of_student='{$id}'";	
			$result = $database->query($query);
			mysqli_close($database)	;
			return $result;
	}

	function getNameByID($id){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM student WHERE id_of_student='{$id}'";	
		$result = $database->query($query);
		mysqli_close($database)	;
		if ($result==NULL || $result->num_rows==0){
			return NULL;
		}
		foreach ($result as $key => $value){
			return $value['name_of_student'];
		}
		}
	function getPasswordByID($id){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM student WHERE id_of_student='{$id}'";	
		$result = $database->query($query);
		mysqli_close($database)	;
		if ($result==NULL || $result->num_rows==0){
			return NULL;
		}
		foreach ($result as $key => $value){
			return $value['password'];
		}
		}
    

	function getByIdAndPassword($id,$password){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM student WHERE id_of_student='{$id}' and `password`='{$password}'";	
		$result = $database->query($query);
		mysqli_close($database)	;
		return $result;

	}
	function getAllByName($id){
		$conn = new Connection();
		$database = $conn->getDatabase();
		if ($id=="") {
			$query = "SELECT * FROM student";	
		} else {
			$query = "SELECT * FROM student WHERE name_of_student like '%{$id}%'";	
		}	
		$result = $database->query($query);
		mysqli_close($database)	;
		return $result;

	}

	function getAllById($id) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		if ($id=="") {
			$query = "SELECT * FROM student";	
		} else {
			$query = "SELECT * FROM student WHERE id_of_student like '%{$id}%'";	
		}
		$result = $database->query($query);
		mysqli_close($database)	;
		return $result;
	}
	

	function insert($student_id,$student_name,$date_of_birth,$id,$password){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query ="INSERT INTO `student` (`id_of_student`, `name_of_student`, `date_of_birth`, `id`,`password`) VALUES ('{$student_id}', '{$student_name}', '{$date_of_birth}', '{$id}','{$password}');";
			$result = $database->query($query);
			return $result;
			 
    }
    function update($student_id,$student_name,$date_of_birth,$id,$password,$old_id){
        $conn = new Connection();
        $database = $conn->getDatabase();
        $query ="UPDATE `student` SET `id_of_student` = '{$student_id}', `name_of_student` = '{$student_name}', `date_of_birth` = '{$date_of_birth}', `id` = '{$id}', `password` = '{$password}' WHERE `student`.`id_of_student` = '{$old_id}'; ";
        $result = $database->query($query);
        return $result;
         
}
    function updatePassword($id,$password){
        $conn = new Connection();
        $database = $conn->getDatabase();
        $query ="UPDATE `student` SET `password` = '{$password}'  WHERE `student`.`id_of_student` = '{$id}'; ";
        $result = $database->query($query);
        return $result;
         
}
    function deleteById($id){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="DELETE FROM student WHERE id_of_student = '{$id}'";
		$result = $database->query($query);
		return $result; 
	}

}

?>
