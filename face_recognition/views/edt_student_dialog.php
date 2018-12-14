<?php
    require_once "../session.php";
    require "../models/student.php";
    $value = $_GET['id'];
    $arr = Student::getById($value);
    foreach ($arr as $key => $value) {
        $arr1=$value;    
    }

?>
 <label><b>Chỉnh sửa thông tin sinh viên</b></label>
    <span class='close' onclick='closeDialog()'>&times;</span>
    <div class='add_e_form'>
    <form action='#' method='post'>
    <?php
    echo "<input type='hidden' id='edt_oid' value='{$arr1['id_of_student']}'>";   
    ?>
    <br>
    <label for='id'>Mã sinh viên</label>
    <?php
    echo "<input type='text' disabled='disabled' value={$arr1['id_of_student']} id='edt_id_of_student' name='id' placeholder='Nhập mã..'>";
    ?>
    <br>
    <label for='fname'>Họ và tên</label>
    <?php
    echo "<input type='text' value='{$arr1['name_of_student']}' id='edt_name_of_student' name='ename' placeholder='Nhập tên..'>";
    ?>
    <br>
    <label for='password'>Mật khẩu</label>
    <?php
    echo "<input type='text' value='{$arr1['password']}' id='edt_password' name='password' placeholder='Nhập mat khau..'>";
    ?>
    <br>
    <label for="cmnd">Số CMND</label>
    <?php
    echo "<input type='text' id='edt_id' value='{$arr1['id']}' name='cmnd' placeholder='Nhập CMND..'>";
    ?>
    <br>
    <label for='lname'>Ngày sinh</label>
    <?php
    echo "<input type='text' value='{$arr1['date_of_birth']}' id='edt_date_of_birth' name='eaddress' placeholder='Địa chỉ..'>";
    ?>
    <br>
    <input type='button' value='Lưu' onclick='onSaveAccountEditButton()' >

  </form>
</div>
