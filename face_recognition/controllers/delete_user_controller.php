<?php
  	require_once "../session.php";
  	require "../models/user.php";
  	$usernames = $_POST['username'];
  	$ulist = explode(",", $usernames);
  	foreach ($ulist as $key => $value) {
		  $bool = User::deleteByUsername($value);
		  
	}
  	if ($bool) {
    	echo "Xóa thành công";
  	} else{
    	echo "Không thể xóa user";
  	}
?>
