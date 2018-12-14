<?php
    require_once "../session.php";
    $id = $_GET['id'];
    $date = $_GET['date'];

?>
 <label><b>Ảnh</b></label>
    <span class='close' onclick='closeDialog()'>&times;</span>
    <div class='add_e_form'>
    <?php
    echo "<img src='face_recognition_app/log_images/{$id}_{$date}.jpg'>";
    ?>
    </div>
