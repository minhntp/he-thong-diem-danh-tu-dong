 
<?php
   
   require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/user.php";
   require "models/token.php";
   require "student_stat.php";
   if 
   (isset($_GET["token"])) {
   $token = $_GET["token"];
   }
   else{
       $data = ['responde' =>'fail','reason'=>'missing parameter'];
       header('Content-type: application/json');
       echo json_encode( $data );
       die();
   }
   $rs = TokenModel::getByToken($token);

   //auth here
   if ($rs != null) {	

    $userID = $rs['user_id'];

    $data = Stat::getStudentInfo($userID);
 
   } else 
   {

       $data = [ 'responde' => 'fail', 'reason' => 'wrong token' ];
   }
   header('Content-type: application/json');
   echo json_encode( $data );
   
?>
