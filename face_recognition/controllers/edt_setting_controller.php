

<?php
  require_once "../session.php";
  require "../models/setting.php";
  $minscore = $_GET['minscore'];
  $work_days = $_GET['work_days'];
  $start = $_GET['start_time'];
  $stop = $_GET['stop_time'];


  $bool = Setting::update($minscore,$work_days,$start,$stop);
  if ($bool==true) {
    echo "Lưu cài đặt thành công";
  }
  else{
    echo "Không thể lưu cài đặt";
  }
?>

