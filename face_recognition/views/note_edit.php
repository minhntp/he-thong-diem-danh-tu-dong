<?php
    require_once "../session.php";
    require "../models/notes.php";
    $id = $_GET['id'];
    $date = $_GET['date'];
    $result = Note::getByIdAndDate($id,$date);
    
?>
 <label><b>Ghi chú</b></label>
    <br>
    <span class='close' onclick='closeDialog()'>&times;</span>
    <div class='add_e_form'>
    <br>
    
    <?php
    if ($result == null){
   
    echo "<textarea id='note_txt' cols='40' rows='5'></textarea>";
    }
    else {
        echo "<textarea id='note_txt' cols='40' rows='5'>{$result['note']}</textarea>";
    }
    echo "<input type='hidden' id='date_of_note' value='{$date}'>";
    echo "<input type='hidden' id='student_id' value='{$id}'>";
    ?>

    <input type='button'  value='Lưu' onclick='onSaveNoteButton()' >
</div>
