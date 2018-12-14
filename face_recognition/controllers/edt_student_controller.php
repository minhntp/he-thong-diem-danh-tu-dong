

<?php
  require_once "../session.php";
  require "../models/student.php";
  $student_name = $_GET['name_of_student'];
  $id = $_GET['id'];
  $student_id = $_GET['id_of_student'];
  $date_of_birth = $_GET['date_of_birth'];
  $old_id = $_GET['old_id'];
  $password = $_GET['password'];

  $bool = Student::update($student_id,$student_name,$date_of_birth,$id,$password,$old_id);
  if ($bool==true) {
    echo "Thêm thành công sinh viên";
  }
  else{
    echo "Có lỗi khi thêm sinh viên";
  }
?>

