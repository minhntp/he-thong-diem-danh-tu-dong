<?php
  require_once $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/record_date.php";
  require_once $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/daily_record.php";
  require_once $_SERVER['DOCUMENT_ROOT']."/face_recognition"."/models/student.php";
class Stat{
function getStudentInfo($id){
    $recordDates = new RecordDate();
    $dates = $recordDates->getAll();
    $st = Student::getById($id);
    
    if ($st==null || $st->num_rows == 0) {
        return null;
    }
    
    else
     {
        
        foreach ($st as $key => $val) {
          $st = $val;
          break;
        }
    }

      $count = 0;
      $at_date = "";

      foreach ($dates as $key => $value1) {   
      
        $d = $value1['date'];
      
        $daily_record = new DailyRecord($d);
      
        $rs = $daily_record->getById($st['id_of_student']);
      
        if (!($rs==null || $rs->num_rows == 0)) {
      
            foreach ($rs as $k => $v) 
            
            {
                $dr = $v;   
            }

            $count =$count+1;
            
            if ($at_date=="")
            
            {
            
                $at_date = $d." ".$dr['first_saw'];
            
            }
            
            else
            {

            $at_date = $at_date.",".$d." ".$dr['first_saw'];
            
            }
        
    }

      }
        
      $p = 100*$count/$dates->num_rows;
      
      $data = ['responde'=>'ok','name' => $st['name_of_student'],'birthday'=>$st['date_of_birth'],'id' => $st['id_of_student'],'total'=>$dates->num_rows,'count'=>$count,'percent'=>$p,'date'=>$at_date];
      return $data;
      
}}
  ?>
