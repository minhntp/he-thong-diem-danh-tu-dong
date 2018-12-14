 
<?php
   
   require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/student.php";
   require_once "models/token.php";
   require_once "models/conservation.php";
   if 
   (isset($_GET["token"])) {
   $token = $_GET["token"];
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
        $conservation = Conservation::getAll();
       
        if ($conservation==null || $conservation->num_rows == 0) {
          
            $data = [['responde'=>'ok', 'row'=>'0']];
        }
        
       else
        {
        
         $data = array();
         $data[] = ["responde"=>'ok',"row"=>$conservation->num_rows];
         foreach ($conservation as $key => $val) {
              $data[] = $val;
        }
        }

   } else 
   {
       $data =[[ 'responde' => 'fail', 'reason' => 'wrong token' ]];
   }
   header('Content-type: application/json');
   echo json_encode( $data );

?>
