<?php
require "../session.php";
?>
<label><b>Thêm sinh viên</b></label>
<span class="close" onclick="closeDialog()">&times;</span>

<div class="add_e_form">
    <form action="#" method="post">
        <label for="id">Mã sinh viên</label>
        <input type="text" id="edt_id_of_student" name="id" placeholder="Nhập mã..">
        <br>
        <label for="fname">Họ và tên</label>
        <input type="text" id="edt_name_of_student" name="ename" placeholder="Nhập tên..">
        <br>
        <label for="edt_password">Mật khẩu</label>
        <input type="text" id="edt_password" name="edt_password" placeholder="Nhập mk..">
        <br>
        <label for="cmnd">Số CMND</label>
        <input type="text" id="edt_id" name="cmnd" placeholder="Nhập CMND..">
        </select>
        <br>
        <label for="date">Ngày sinh</label>
        <input type="date" id="edt_date_of_birth" name="date" placeholder="ngày..">
        <br>
        <label for="file1">Ảnh 1</label>
        <input type="file" name="file1" id="f1">
        <label for="file2">Ảnh 2</label>
        <input type="file" name="file2" id="f2">
        <label for="file3">Ảnh 3</label>
        <input type="file" name="file3" id="f3">
        <br>
        <input type="button" value="Thêm" onclick="onAddAccountButton()" >
    </form>
</div>