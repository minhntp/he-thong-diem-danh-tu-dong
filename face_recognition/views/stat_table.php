<?php
  require_once "../models/record_date.php";
  require_once "../models/daily_record.php";
  require_once "../models/student.php";
  require_once "../models/notes.php";
 $date = $_GET['date'];
 $option = $_GET['option'];
 $s_val = $_GET['value'];
 $recordDates = new RecordDate();
 $dates = $recordDates->getAll();
 $is_Available = false;
 foreach ($dates as $key => $value) {  
   if ($value['date']!=$date){
     continue;
   }
    $is_Available = true;
    break;
   };
 if (!$is_Available){
   die("Không có dữ liệu ngày {$date}<br>
        Mở ứng dụng điểm danh hoặc điểm danh thủ công <a onclick='onAddDate()' href='#'>tại đây</a> 
   ");
 }
?>

<table class="table">
  <tr class="header">
    <th class="index">STT</th>
    <th class="index">MSV</th>
    <th class="index">Họ và tên</th>
    
<?php
    
    foreach ($dates as $key => $value) {  
      if ($value['date']!=$date){
        continue;
      }
        echo "<th class='index'>{$value['date']}</th>";
      };

?>
  <th class="index">Thời gian điểm danh</th>
  <th class="index">Ghi chú</th>
  <th class="index">Thao tác</th>
</tr>

  <?php
    $student = new Student();

    switch ($option) {
      case 0:
        $arr = $student->getAll();
        break;
      case 1:
        $arr = $student->getAllByName($s_val);
          break;  
      case 2:
        $arr = $student->getAllById($s_val);
          # code...
          break;       
    }

    foreach ($arr as $key => $value) {
      $i= $key+1;  
      echo "<tr id='".$key."' name='{$value['id_of_student']}' class='tr_normal'>";
      echo "<td class='index'>".$i."</td>";
      echo "<td class='index'>".$value['id_of_student']."</td>";
      echo "<td>".$value['name_of_student']."</td>";
      foreach ($dates as $k1 => $value1) {  
         
        $d = $value1['date'];
        if ($d!=$date){
          continue;
        }
        $daily_record = new DailyRecord($date);
        $rs = $daily_record->getById($value['id_of_student']);
        if ($rs==null || $rs->num_rows == 0) {
            echo "<td class='index'>"."Vắng"."</td>";
            echo "<td></td>";
            $n = Note::getByIdAndDate($value['id_of_student'],$date);
            if ($n==null){
              echo "<td></td>";
            }
            else {
              echo "<td>{$n['note']}</td>";

            }
            echo "<td><button onClick='onRecognized({$key})'>Có mặt</button>
            <button onClick='onShowNoteEdit({$key})'>Sửa ghi chú</button>
            </td>";
        }
        else {
            echo "<td class='index'>"."Có mặt"."</td>";
            foreach ($rs as $k => $val) {
              $time = explode(".",$val['first_saw'])[0];
              if ($time==""||$time==null){
              echo "<td class='index'>NA</td>";
              }
              else
              {
                echo "<td class='index'>{$time}</td>";
              }
            }
            $n = Note::getByIdAndDate($value['id_of_student'],$date);
            if ($n==null){
              echo "<td></td>";
            }
            else {
              echo "<td>{$n['note']}</td>";

            }
            if ($time==null||$time==""){
            echo "<td>
            <button onClick='onUnrecognized({$key})' >Vắng</button>
            <button onClick='onShowNoteEdit({$key})'>Sửa ghi chú</button>
            </td>";
            } else {
            echo "<td>
            <button onClick='onShowCaptureImage({$key})' >Xem ảnh</button>
            <button onClick='onUnrecognized({$key})' >Vắng</button>
            <button onClick='onShowNoteEdit({$key})'>Sửa ghi chú</button>
            </td>";
            }
            
        }
      }
      echo "</tr>";
    };
  ?>
</table>