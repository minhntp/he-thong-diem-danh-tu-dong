<?php
	session_start();
	require "../models/user.php";
	$name = $_POST["name"];
	$pass = $_POST["pass"];
	echo $name;
	echo $pass;
	$bool = User::Auth($name,$pass);
	if ($bool == true) {	
		$_SESSION["isLogin"] = true;
		$_SESSION["login_fail"]=false;
		if ($_SESSION["isAdmin"]) {
		header("location: ../admin_app.php");
		}
		else {
		header("location: ../user_app.php");
		}

	} else {
		$_SESSION["login_fail"]=true;
		$_SESSION["isLogin"]=false;
		header("location: ../loginview.php");
	}
	
?>
