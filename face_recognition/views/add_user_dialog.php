<?php
require "../session.php";
require "../models/user.php";
?>
<label><b>Thêm User</b></label>
<span class="close" onclick="closeDialog()">&times;</span>

<div class="add_e_form">
    <form action="#" method="post">
        <label for="username">Username</label>
        <input type="text" id="edt_username" name="username" placeholder="Nhập username">
        <br>
        <label for="password">Password</label>
        <input type="text" id="edt_password" name="password" placeholder="Nhập password">
        <br>
        <label for="type">Kiểu user</label>
        <input type="radio" id="admin_option" value="1" name="type_option" checked="checked">Admin</input>
        <input type="radio" id="user_option" value="2" name="type_option">User</input>
        <br>
        <input type="button" class="btn btn-default" value="Thêm" onclick="onAddUserButton()" >
        
    </form>
</div>