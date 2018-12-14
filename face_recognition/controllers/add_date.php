<?php
  require_once "../session.php";
  require "../models/record_date.php";
  $date = $_GET['date'];
  
  $bool = RecordDate::insert($date);

  if ($bool==true) {
    echo "ok";
  }
  else{
    echo "fail";
  }
?>

