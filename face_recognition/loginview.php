<?php
	session_start();
	if (isset($_SESSION["isLogin"]) && $_SESSION['isLogin'] == true) {
    if ($_SESSION['isAdmin']==true){
    header("location: admin_app.php");
    }
    else {
      header("location: user_app.php");
    }
  } 
  
  elseif (isset($_SESSION['login_fail'] )&& $_SESSION['login_fail']== true) {
   echo "
   <script>
    alert('Vui lòng nhập lại tên và mật khẩu chính xác!');
   </script>
   ";
  session_unset();
  }

?>


<style type="text/css">

  input[type=text],input[type=password]{
    width: 100%;
    position: center;
    padding: 12px;
    
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px;
    position: center;
  }

  input[type=submit]:hover {
    background-color: #45a049;
    width: 100%;
    position: center;
  }
  div {
    
    margin: auto;
    width: 30%;
    padding: 150px 0;
    vertical-align: middle;
  }
  body {
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  label {
    
  }
</style>
<title>Welcome!</title>
<body background='images/background.jpg'>
<div>

  <!--<h3 align='center'>Chào mừng bạn đến với hệ thống quản lý chuyên cần</h3>  -->

  <form action="controllers/logincontroller.php" method="post">
    <label>Tên đăng nhập:</label><br>
    <input type="text" value="" name="name"><br>
    <label>Mật khẩu:</label><br>
    <input type="password" name="pass" value=""><br><br>
    <input type="submit" value="Đăng nhập">
  </form>
</div>
</body>