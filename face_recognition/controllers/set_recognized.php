

<?php
  require_once "../session.php";
  require "../models/daily_record.php";
  $student_id = $_GET['id'];
  $date = $_GET['date'];
  $daily_record = new DailyRecord($date);
  $bool = $daily_record->insert($student_id);
  if ($bool==true) {
    echo "Cập nhập thành công";
  }
  else{
    echo "Có lỗi khi cập nhập";
  }
?>

