<?php  
require_once "../connection.php";

/**
* 
*/
class Chat
{
	function __construct()
	{

	}

	function getAll(){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query = "SELECT * FROM `chat`";	
			$rs= $database->query($query);
            mysqli_close($database)	;
            return $rs;
    }
    function getNewMessage($datetime,$conservationid){
        $conn = new Connection();
        $database = $conn->getDatabase();
        $query = "SELECT * FROM `chat` where `datetime` > '{$datetime}' and `conservationId` = '{$conservationid}'";	
        $rs= $database->query($query);
        mysqli_close($database)	;
        return $rs;
}
	
	function insert($user_id,$user_name,$content,$datetime,$conservationid){
			$conn = new Connection();
			$database = $conn->getDatabase();
			$query ="INSERT INTO `chat` (`user_id`,`user_name`,`datetime`, `content`,`conservationId`) VALUES ('{$user_id}', '{$user_name}', '{$datetime}','{$content}','{$conservationid}');";
			$result = $database->query($query);
			return $result;
			 
    }
         



}

?>
