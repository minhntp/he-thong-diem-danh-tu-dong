<?php  
require_once "../connection.php";

/**
* 
*/
class User {
	public $database;

	function __construct() {
		$conn = new Connection();
		$database = $conn->getDatabase();	
			
	}

	function Auth($username, $password) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM user WHERE username='".$username."' and password='".$password."' ";	
		$result = $database->query($query);

		if ($result->num_rows == 1) {
				foreach ($result as $key => $user) {
							
						$_SESSION['name']=$user['username'];
						if ($user['type']==1)
						$_SESSION['isAdmin']=true;
						else {
						$_SESSION['isAdmin']=false;
						}	
						return true;
				}
			}
		else return false;
		
	}
	
	function getAllByName($s) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM user WHERE username like '%{$s}%'";
		
		$result = $database->query($query);
		mysqli_close($database)	;
		return $result;
	}

	function getByUsername($username) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query = "SELECT * FROM user WHERE username='{$username}'";	
		$result = $database->query($query);
		mysqli_close($database)	;
		return $result;
	}

	function insert($username, $password,$type) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="INSERT INTO user (`username`, `password`, `type`) VALUES ('{$username}', '{$password}', '{$type}');";
		$result = $database->query($query);
		return $result;
	}

	function update($old_username, $username, $password, $type) {
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="UPDATE `user` SET `username` = '{$username}', `password` = '{$password}', `type` = '{$type}'  WHERE `user`.`username` = '{$old_username}'";
		$result = $database->query($query);
		return $result;
	}

	function deleteByUsername($username){
		$conn = new Connection();
		$database = $conn->getDatabase();
		$query ="DELETE FROM user WHERE username = '{$username}'";
		$result = $database->query($query);
		return $result; 
	}
}

?>