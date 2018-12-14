<?php
    require "session.php";	
  ?>
  <head>
    <title>Quan ly</title>  
    <script src="user_app_script.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  </head>
  <!-------------------------------------- Ui come here---------------------------------------------->
  <body onload="onMenuSelected(0)">
    <div class="headernav">
    <p class = 'welcome'>Xin chào! <?php
              echo $_SESSION["name"];
              if ($_SESSION['isAdmin']) {
                echo " (admin)";
              } else {
                echo " (user)";
              }
              
              ?></p>
     <a class = 'logout' href="controllers/logoutcontroller.php">Thoát</a>
    </div>
    <div class="page">
      <div class="left-bar">
        <div class="menu">
        
          <label id="lb_chuyencan" onclick="onMenuSelected(4)">CHUYÊN CẦN</label>
          <label id="lb_lophoc" onclick="onMenuSelected(0)">LỚP HỌC</label>
          <label id="lb_camera" onclick="onMenuSelected(1)">CAMERA</label>   
         <!--
          <label id="lb_logout" onclick="onMenuSelected(3)">Thoát<br>
            --> 
          </label>

        </div>

        </div>
        <div class="right-bar">

          <div id ="main-content" class="main-content">
            <!--
            this is a place for app fragment

          -->
        </div>
        
      </div>
    </div>
  </body>