<?php
  require_once "../session.php";
  require "../models/student.php";
  $ids = $_POST['id'];
  $idlist = explode(",", $ids);
  foreach ($idlist as $key => $value) {
  
  $bool = Student::deleteById($value);
  $current= getcwd().DIRECTORY_SEPARATOR;
  $parent = dirname($current);
  $target_path = $parent."/face_recognition_app"."/"."images"."/".$value;
  array_map('unlink', glob("$target_path/*.*"));
  rmdir($target_path);
}
  if ($bool) {

    echo "Xóa thành công";
  }
  else{
    echo "Không thể xóa sinh viên";
  }

?>
