<?php  
require_once $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/connection.php";

/**
* 
*/
class TokenModel {
	public $database;

	function __construct() {
		$conn = new Connection();
		$database = $conn->getDatabase();	
			
	}


	function getByToken($token) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM token WHERE token='".$token."'";
		$rs = $database->query($query);
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
    
    function getById($id) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM token WHERE user_id='".$id."'";
		$rs = $database->query($query);
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


	function insert($user_id, $token) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="INSERT INTO token (`user_id`, `token`) VALUES ('{$user_id}', '{$token}');";
		$result = $database->query($query);
		return $result;
	}

	function deleteByUserID($user_id){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="DELETE FROM token WHERE user_id = '{$user_id}'";
		$result = $database->query($query);
		return $result; 
	}
}

?>