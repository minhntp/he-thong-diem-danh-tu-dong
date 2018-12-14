 
<?php
   
   require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/student.php";
   require_once "models/token.php";
   require_once "models/chat.php";
   require_once "chat_helper.php"; 
   if 
   (isset($_GET["token"])&& isset($_GET['datetime'])&& isset($_GET['conservation_id'])) {
   $token = $_GET["token"];
   $datetime = $_GET['datetime'];
   $conservation_id = $_GET['conservation_id'];
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
    
    $data = MessageHelper::getNewMessage($datetime,$conservation_id);

   } else 
   {

       $data =[[ 'responde' => 'fail', 'reason' => 'wrong token' ]];
   }
   header('Content-type: application/json');
   echo json_encode( $data );




?>
