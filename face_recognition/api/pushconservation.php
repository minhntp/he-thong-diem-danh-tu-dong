 
<?php
   
   require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/student.php";
   require "models/token.php";
   require "models/conservation.php";
 
   if 
   (isset($_GET["token"])&& isset($_GET['title'])) {
   $token = $_GET["token"];
   $title = $_GET["title"];
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
    if ($user_id==NULL){
        $data =[[ 'responde' => 'fail', 'reason' => 'wrong token' ]];
    } else {
        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $t = microtime(true);
        $micro = sprintf("%06d",($t - floor($t)) * 1000000);
        $d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );
        $datetime =  $d->format("Y-m-d H:i:s.u"); // note at point on "u"
        $conservationId = md5(uniqid(rand(), true));
        $bool = Conservation::insert($conservationId,$user_id,$title,$datetime);
        if ($bool){
        $data = ['responde' => 'ok'];
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
