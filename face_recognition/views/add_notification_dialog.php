<?php
    require_once "../session.php";
 

?>
   <label><b>Thêm thông báo</b></label>
    <br>
    <span class='close' onclick='closeDialog()'>&times;</span>
    <div class='add_e_form'>
    <br>
    <label for="fname">Tiêu đề</label>
    <br>
    <input type="text" id="edt_title" name="ename" placeholder="Nhập tiêu đề..">
      
    <br>
    <label for="fname">Nội dung</label>
    <br>
    <?php
    
    echo "<textarea id='edt_content' cols='70' rows='5'></textarea>";
  
    ?>

    <input type='button'  value='Lưu' onclick='onAddNotificationButton()' >
</div>
