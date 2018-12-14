 
<?php
   
   require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/user.php";
   require "models/token.php";
   require "notification_helper.php";
   if 
   (isset($_GET["token"])&& isset($_GET['datetime'])) {
   $token = $_GET["token"];
   $datetime = $_GET['datetime'];
   }
   else{
       $data =[ ['responde' =>'fail','reason'=>'missing parameter']];
      
      header('Content-type: application/json');
       echo json_encode( $data );
       die();
   }
   $rs = TokenModel::getByToken($token);

   //auth here
   if ($rs != null) {	
    
    $data = getNewNotification($datetime);

   } else 
   {

       $data =[[ 'responde' => 'fail', 'reason' => 'wrong token' ]];
   }
   header('Content-type: application/json');
   echo json_encode( $data );
   
?>
