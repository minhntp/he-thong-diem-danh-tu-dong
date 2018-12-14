 
<?php
   
   require_once $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/student.php";
   require "models/token.php";
   if 
   (isset($_GET["token"])&&isset($_GET["newpass"])&&isset($_GET["oldpass"])) {
   $token = $_GET["token"];
   $oldPassword = $_GET["oldpass"];
   $newPassword = $_GET["newpass"];

}
   else{
       $data = ['responde' =>'fail','reason'=>'missing parameter'];
       header('Content-type: application/json');
       echo json_encode( $data );
       die();
   }
   $rs = TokenModel::getByToken($token);

   //auth here
   if ($rs != null) 
   {	

    $userID = $rs['user_id'];
    $oldPassInDatabase = Student::getPasswordById($userID);
    if ($oldPassInDatabase!=null)
    {
        if ($oldPassword==$oldPassInDatabase)
        {
            $bool = Student::updatePassword($userID,$newPassword);
            if ($bool)
            {
                $data = ['responde' =>'ok'];
            } else
            {
                $data = ['responde' =>'fail','reason'=>'database error'];
            }
        } else 
        {
            $data = ['responde' =>'fail','reason'=>'not correct old password'];

        }
    } else
    {
        $data = ['responde' =>'fail','reason'=>'database error'];
    }}
   
   else 
   {

       $data = [ 'responde' => 'fail', 'reason' => 'wrong token' ];
   }
   header('Content-type: application/json');
   echo json_encode( $data );
   
?>
