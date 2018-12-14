 
<?php
   
   require_once "models/chat.php";
   
  class MessageHelper { 

  function getNewMessage($datetime,$conservationId){
      
      $chat = Chat::getNewMessage($datetime,$conservationId);
       
        if ($chat==null || $chat->num_rows == 0) {
          
            $data = [['responde'=>'ok', 'row'=>'0']];

            return $data;
        }
        
       else
        {
        
         $temp = array();
         $temp[] = ["responde"=>'ok',"row"=>$chat->num_rows];
         foreach ($chat as $key => $val) {
              $temp[] = $val;
        }
       
        return $temp;
        }
}

}   
?>
