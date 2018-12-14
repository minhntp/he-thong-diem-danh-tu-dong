<?php
    require_once "../session.php";
    $value = $_GET['id'];

?>
 <label><b>Ảnh</b></label>
    <span class='close' onclick='closeDialog()'>&times;</span>
    <div class='add_e_form'>
    <?php
    echo "<img src='face_recognition_app/images/{$value}/image.jpg'>";
    ?>
    </div>
