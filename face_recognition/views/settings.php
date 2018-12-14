<?php
    require_once "../session.php";
    require "../models/setting.php";
    $arr = Setting::getSettings();
    foreach ($arr as $key => $value) {
        $arr1=$value;    
    }

?>
 <label><b>Cài Đặt</b></label>
    <br>
    <span class='close' onclick='closeDialog()'>&times;</span>
    <div class='add_e_form'>
    <!-- <br> -->
    <!-- <label for='id'><b>Minimum Score:</b></label> -->
    <!-- <br> -->
    <?php
    echo "<input type='hidden' value={$arr1['minimum_score']} id='min_score' name='id' placeholder='...'>";
    ?>
    <!-- <br> -->
    <!-- <br> -->
    <label><b>Ngày điểm danh trong tuần:</b></label>
    <br>
    <label for="t2">Thứ 2</label>

    <?php
    $wd = $arr1['work_days'];
    if (strpos($wd, '2') !== false) {
        echo "<input type='checkbox' id='t2' checked='true' value ='2' name='t2' placeholder='Nhập CMND..'>";
    } else
    echo "<input type='checkbox' id='t2' value ='2' name='t2' placeholder='Nhập CMND..'>";
    ?>
    <br>
    <label for="t3">Thứ 3</label>
    <?php
     if (strpos($wd, '3') !== false) {
    echo "<input type='checkbox' id='t3' checked='true' name='t3' value ='3' placeholder='Nhập CMND..'>";
     } else
    echo "<input type='checkbox' id='t3'  name='t3' value ='3' placeholder='Nhập CMND..'>";


    ?>
    <br>
    <label for="t4">Thứ 4</label>
    <?php
  if (strpos($wd, '4') !== false) {
    echo "<input type='checkbox' id='t4' checked='true' name='t4' value ='4' placeholder='Nhập CMND..'>";
     } else
    echo "<input type='checkbox' id='t4'  name='t4' value ='4' placeholder='Nhập CMND..'>";
    ?>
    <br>
    <label for="t5">Thứ 5</label>
    <?php
 if (strpos($wd, '5') !== false) {
    echo "<input type='checkbox' id='t5' checked='true' name='t5' value ='5' placeholder='Nhập CMND..'>";
     } else
    echo "<input type='checkbox' id='t5' name='t5' value ='5' placeholder='Nhập CMND..'>";
       ?>
    <br>
    <label for="t6">Thứ 6</label>
    <?php
 if (strpos($wd, '6') !== false) {
    echo "<input type='checkbox' id='t6' checked='true' name='t6' value ='6' placeholder='Nhập CMND..'>";
     } else
    echo "<input type='checkbox' id='t6'  name='t6' value ='6' placeholder='Nhập CMND..'>";
       ?>
    <br>
    <label for="t7">Thứ 7</label>
    <?php
 if (strpos($wd, '7') !== false) {
    echo "<input type='checkbox' id='t7' checked='true' name='t7' value ='7' placeholder='Nhập CMND..'>";
     } else
    echo "<input type='checkbox' id='t7'  name='t7' value ='7' placeholder='Nhập CMND..'>";
       ?>
    <br>
    <label><b>Thời gian điểm danh:</b></label>
    <br>
    <label for="start_time">Bắt đầu:</label>
    <input type="time" id="start_time" name="start_time" value='<?php 
    echo $arr1['start_time'];
    ?>' min="05:00" max="17:00" required />

    <label for="stop_time">Kết thúc:</label>
    <input type="time" id="stop_time" name="stop_time" value='<?php 
    echo $arr1['end_time'];
    ?>' min="05:00" max="17:00" required />
    <input type='button' value='Lưu' onclick='onSaveSettingButton()' >
</div>
