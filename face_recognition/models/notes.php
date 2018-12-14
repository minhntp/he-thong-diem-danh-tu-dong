<?php  
require_once "../connection.php";

/**
* 
*/
class Note
{
	function __construct()
	{

	}

	function getByIdAndDate($id,$date){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM notes WHERE student_id='{$id}' and date ='$date'";	
			$rs= $database->query($query);
            mysqli_close($database)	;
            if ($rs==null || $rs->num_rows == 0) {
                return null;
            }
            else {
                
                foreach ($rs as $key => $val) {
                  return $val;
                }
            }
	}
	
	function insert($student_id,$date,$note){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query ="INSERT INTO `notes` (`student_id`, `date`, `note`) VALUES ('{$student_id}', '{$date}', '{$note}');";
			$result = $database->query($query);
			return $result;
			 
    }
    function update($student_id,$date,$note){
        $conn = new Connection();
        $database = $conn->getDatabase();
        $query ="UPDATE `notes` SET `note` = '{$note}' WHERE `notes`.`student_id` = '{$student_id}' and `notes`.`date` = '{$date}' ; ";
        $result = $database->query($query);
        return $result;
         
}


}

?>