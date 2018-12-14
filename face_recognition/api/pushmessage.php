 
<?php
   
   require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/student.php";
   require "models/token.php";
   require "models/chat.php";
 
   if 
   (isset($_GET["token"])&& isset($_GET['content'])&& isset($_GET['conservation_id'])) {
   $token = $_GET["token"];
   $content = $_GET["content"];
   $conservation_id = $_GET["conservation_id"];
   }
   else{
       $data =['responde' =>'fail','reason'=>'missing parameter'];
      
      header('Content-type: application/json');
       echo json_encode( $data );
       die();
   }
   $rs = TokenModel::getByToken($token);

   //auth here
   if ($rs != null) {	
    $user_id = $rs["user_id"];
    $user_name = Student::getNameByID($user_id);
    if ($user_name==NULL){
        $data =[[ 'responde' => 'fail', 'reason' => 'wrong token' ]];
    } else {
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $t = microtime(true);
        $micro = sprintf("%06d",($t - floor($t)) * 1000000);
        $d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );
        $datetime =  $d->format("Y-m-d H:i:s.u"); // note at point on "u"
        $bool = Chat::insert($user_id,$user_name,$content,$datetime,$conservation_id);
        if ($bool){
        $data = ['responde' => 'ok' ,'datetime'=>$datetime,'user_id'=>$user_id,"user_name"=>$user_name];
        }
        else {
         $data = ['responde' => 'fail' ,'reason'=>'database error'];
        }}
   } else 
   {

       $data =[ 'responde' => 'fail', 'reason' => 'wrong token' ];
   }
   
   header('Content-type: application/json');
   echo json_encode( $data );




?>
