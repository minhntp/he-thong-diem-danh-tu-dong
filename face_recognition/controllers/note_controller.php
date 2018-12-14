

<?php
  require_once "../session.php";
  require "../models/notes.php";
  $student_id = $_GET['id'];
  $date = $_GET['date'];
  $note = $_GET['note'];
  if (Note::getByIdAndDate($student_id,$date)!=null){
    $bool = Note::update($student_id,$date,$note);
    if ($bool==true) {
      echo "Lưu ghi chú thành công";
    }
    else{
      echo "Không thể lưu ghi chú";
    }
  } else {
  $bool = Note::insert($student_id,$date,$note);
  if ($bool==true) {
    echo "Lưu ghi chú thành công";
  }
  else{
    echo "Không thể lưu ghi chú";
  }
}
?>

