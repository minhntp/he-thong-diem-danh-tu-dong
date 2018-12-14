 
<?php
   
    require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/user.php";
    require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/student.php";
    require "models/token.php";

    if 
    (isset($_GET["username"])&&isset($_GET["password"])) {
	$name = $_GET["username"];
    $pass = $_GET["password"];
    }
    else{
        $data = ['responde' =>'fail','reason'=>'missing parameter'];
        header('Content-type: application/json');
        echo json_encode( $data );
        die();
    }
    //auth here
    $result = Student::getByIdAndPassword($name,$pass);
    if (!($result==null || $result->num_rows==0)){
           
            $rs = TokenModel::getById($name);
            if ($rs == null) {
            $token = md5(uniqid(rand(), true));
            TokenModel::insert($name,$token);
            } else
             {
                $token = $rs['token'];
             }
           
            $data = [ 'responde' => 'ok', 'token' => $token ];
            // will encode to JSON object: {"name":"God","age":-1}  
            // accessed as example in JavaScript like: result.name or result['name'] (returns "God")

	} else {
		$data = [ 'responde' => 'fail', 'reason' => 'wrong password or user name' ];
		
    }
    header('Content-type: application/json');
    echo json_encode( $data );
	
?>
