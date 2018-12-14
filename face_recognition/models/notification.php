<?php  
require_once "../connection.php";

/**
* 
*/
class Notification
{
	function __construct()
	{

	}

	function getAll(){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM `notification`";	
			$rs= $database->query($query);
            mysqli_close($database)	;
            return $rs;
    }
    function getNewNotification($datetime){
        $conn = new Connection();
        $database = $conn->getDatabase();
        $query = "SELECT * FROM `notification` where `date_time` > '{$datetime}'";	
        $rs= $database->query($query);
        mysqli_close($database)	;
        return $rs;
}
	
	function insert($title,$content,$datetime){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query ="INSERT INTO `notification` (`title`, `date_time`, `content`) VALUES ('{$title}', '{$datetime}', '{$content}');";
			$result = $database->query($query);
			return $result;
			 
    }
         



}

?>