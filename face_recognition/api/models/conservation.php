<?php  
require_once "../connection.php";

/**
* 
*/
class Conservation
{
	function __construct()
	{

	}

	function getAll(){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT student.name_of_student as creator_name, conservation.id, conservation.title, conservation.start_time as date_time, (select count(*) from `chat` where conservation.id=chat.conservationId) as chat_number FROM `conservation`,`student` where conservation.creator_id = student.id_of_student";	
			$rs= $database->query($query);
            mysqli_close($database)	;
            return $rs;
    }
	
	function insert($id,$creatorId,$title,$date){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query ="INSERT INTO `conservation` (`id`,`title`,`creator_id`, `start_time`) VALUES ('{$id}', '{$title}', '{$creatorId}','{$date}');";
			$result = $database->query($query);
			return $result;
			 
    }
         



}

?>
