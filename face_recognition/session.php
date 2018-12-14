<?php
	session_start();
	if ( !isset($_SESSION["isLogin"]) || ($_SESSION["isLogin"] == false)) {
		session_unset();
		session_destroy();
		header("location: loginview.php");
	}		
?>