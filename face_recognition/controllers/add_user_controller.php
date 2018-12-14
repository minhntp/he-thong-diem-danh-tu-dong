<?php
  require_once "../session.php";
  require "../models/user.php";
  $u = $_GET['u'];
  $p = $_GET['p'];
  $type = $_GET['type'];
  
  $bool = User::insert($u,$p,$type);

  if ($bool==true) {
    echo "Thêm thành công user";
  }
  else{
    echo "Có lỗi khi thêm user";
  }
?>

