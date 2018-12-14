<?php
  require_once "../models/record_date.php";
  require_once "../models/daily_record.php";
  require_once "../models/student.php";

 $option = $_GET['option'];
 $s_val = $_GET['value'];
 $recordDates = new RecordDate();
 $dates = $recordDates->getAll();
 $is_Available = false;

?>
<label><b>Thống kê tình hình chuyên cần</b></label>
    <span class='close' onclick='closeDialog()'>&times;</span>
<table class="table">
  <tr class="header">
    <th class="index">STT</th>
    <th class="index">MSV</th>
    <th>Họ và tên</th>
    <th>Số ngày đi học</th>
    <th>Tỉ lệ</> 

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
      echo "<tr id='".$key."' name='{$value['id_of_student']}' class='tr_normal' onclick='onRowSelected(".$key.")'>";
      echo "<td class='index'>".$i."</td>";
      echo "<td class='index'>".$value['id_of_student']."</td>";
      echo "<td>".$value['name_of_student']."</td>";
      $count = 0;
      foreach ($dates as $key => $value1) {   
        $d = $value1['date'];
        $daily_record = new DailyRecord($d);
        $rs = $daily_record->getById($value['id_of_student']);
        if (!($rs==null || $rs->num_rows == 0)) {
            $count =$count+1;
        }
      }
      echo "<td>{$count}</td>";
      $p = 100*$count/$dates->num_rows;
      echo "<td>{$p}%</td>";
      echo "</tr>";
    };
  ?>
</table>