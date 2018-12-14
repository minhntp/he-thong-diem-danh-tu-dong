 
<?php
   
   require $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/notification.php";
   

  function getNewNotification($datetime){
      
      $notification = Notification::getNewNotification($datetime);
       
        if ($notification==null || $notification->num_rows == 0) {
          
            $data = [['responde'=>'ok', 'row'=>'0']];
           
            return $data;
        }
        
       else
        {
        
         $temp = array();
         $temp[] = ["responde"=>'ok',"row"=>$notification->num_rows];
         foreach ($notification as $key => $val) {
              $temp[] = $val;
        }
       
        return $temp;
        }
}

   
?>
