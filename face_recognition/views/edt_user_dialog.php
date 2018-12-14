<?php
    require_once "../session.php";
     require "../models/user.php";
    $username = $_GET['username'];
    
    $result = User::getByUsername($username);
    foreach ($result as $key => $value) {
        $u = $value;   
    }

?>
 <label><b>Chỉnh sửa user</b></label>
    <span class='close' onclick='closeDialog()'>&times;</span>
    <div class='add_e_form'>
        <form action='#' method='post'>
            <?php
                echo "<input type='hidden' id='edt_oUsername' value='{$u['username']}'>";   
            ?>
            <label for='id'>Username</label>
            <?php
                echo "<input type='text' value='{$u['username']}' id='edt_username' name='username' placeholder='Nhập username...'>";
            ?>
            <br>
            <label for='name'>Password</label>
            <?php
                echo "<input type='text' value='{$u['password']}' id='edt_password' name='password' placeholder='Nhập password...'>";
            ?>
            <br>
            <label for="type_option">Loại user</label>
            <?php
                if($u['type'] == 1) {
                    $type1 = "checked='checked'";
                    $type2 = '';
                } else {
                    $type2 = "checked='checked'";
                    $type1 = '';
                }
                echo "
                    <input type='radio' id='admin_option' value='1' name='type_option' ".$type1.">Admin</input>
                    <input type='radio' id='user_option' value='2' name='type_option' ".$type2.">User</input>
                    ";
            ?>
            
            <br>
            <input type='button' class="btn btn-primary" value='Lưu' onclick='onSaveUserEditButton()' >

          </form>
</div>

