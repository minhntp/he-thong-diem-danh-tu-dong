<?php
  require_once "../session.php";
  require "../models/student.php";
  $student_name = $_POST['name_of_student'];
  $id = $_POST['id'];
  $password = $_POST['password'];
  $student_id = $_POST['id_of_student'];
  $date_of_birth = $_POST['date_of_birth'];

  $c = Student::getByID($student_id);
  
  if ($c->num_rows>0)  {
    die ("Mã sinh viên đã tồn tại");
  }

  if (!empty($_FILES['photo1'])) {
    $duoi = explode('.', $_FILES['photo1']['name']); 
    $duoi = $duoi[(count($duoi) - 1)]; 
    if ($duoi === 'jpg' || $duoi === 'png' || $duoi === 'gif') {
        
        $current= getcwd().DIRECTORY_SEPARATOR;
        $parent = dirname($current);
        mkdir($parent."/face_recognition_app"."/"."images"."/".$student_id,0777);
        $target_path = $parent."/face_recognition_app"."/"."images"."/".$student_id."/". "image.".$duoi;
        if (move_uploaded_file($_FILES['photo1']['tmp_name'], $target_path))
        {
        } else { // nếu không thành công
            die('Có lỗi xảy ra khi upload ảnh'); // in ra thông báo
        }
    } else { // nếu không phải file ảnh
        die('Chỉ được upload file .jpg'); // in ra thông báo
    }
  } else {
    die('Lock'); // nếu không phải post method
  }
  if (!empty($_FILES['photo2'])) {
    $duoi = explode('.', $_FILES['photo2']['name']); 
    $duoi = $duoi[(count($duoi) - 1)]; 
    if ($duoi === 'jpg' || $duoi === 'png' || $duoi === 'gif') {
        
        $current= getcwd().DIRECTORY_SEPARATOR;
        $parent = dirname($current);
        $target_path = $parent."/face_recognition_app"."/"."images"."/".$student_id."/". "image2.".$duoi;
        if (move_uploaded_file($_FILES['photo2']['tmp_name'], $target_path))
        {
        } else { // nếu không thành công
            die('Có lỗi xảy ra khi upload ảnh'); // in ra thông báo
        }
    } else { // nếu không phải file ảnh
        die('Chỉ được upload file .jpg'); // in ra thông báo
    }
  } else {
    die('Lock'); // nếu không phải post method
  }
  if (!empty($_FILES['photo3'])) {
    $duoi = explode('.', $_FILES['photo3']['name']); 
    $duoi = $duoi[(count($duoi) - 1)]; 
    if ($duoi === 'jpg' || $duoi === 'png' || $duoi === 'gif') {
        
        $current= getcwd().DIRECTORY_SEPARATOR;
        $parent = dirname($current);
        $target_path = $parent."/face_recognition_app"."/"."images"."/".$student_id."/". "image3.".$duoi;
        if (move_uploaded_file($_FILES['photo3']['tmp_name'], $target_path))
        {
        } else { // nếu không thành công
            die('Có lỗi xảy ra khi upload ảnh'); // in ra thông báo
        }
    } else { // nếu không phải file ảnh
        die('Chỉ được upload file .jpg'); // in ra thông báo
    }
  } else {
    die('Lỗi lưu ảnh'); // nếu không phải post method
  }
 

  $bool = Student::insert($student_id,$student_name,$date_of_birth,$id,$password);

  if ($bool==true) {
    echo "Thêm thành công sinh viên";
  }
  else{
    echo "Có lỗi khi thêm sinh viên";
  }
?>

