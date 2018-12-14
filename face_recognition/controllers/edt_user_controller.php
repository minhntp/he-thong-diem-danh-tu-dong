<?php
  require_once "../session.php";
  require "../models/user.php";
  $oUsername = $_GET['oUsername'];
  $username = $_GET['username'];
  $password = $_GET['password'];
  $type = $_GET['type'];
  $bool = User::update($oUsername,$username,$password,$type);

  if ($bool==true) {
    echo "Cập nhật thông tin user thành công";
  }
  else{
    echo "Có lỗi khi cập nhật user";
  }
?>
