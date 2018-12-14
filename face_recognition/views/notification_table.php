<?php
  require_once "../models/notification.php";
  
?>

<table class="table">
  <tr class="header">
    <th class="index">STT</th>
    <th>Tiêu đề</th>
    <th>Nội dung</th>
    <th>Ngày giờ</th>
  </tr>

  <?php
    $model = new Notification();
    $notifications = $model->getAll();
    foreach ($notifications as $key => $value) {
      $i= $key + 1;
      echo "<tr id='".$key."' class='tr_normal'>";
      echo "<td class='index'>".$i."</td>";
      echo "<td>".$value['title']."</td>
            <td>".$value['content']."</td> 
            <td>".$value['date_time']."</td>";
      echo "</tr>";
    };
  ?>
</table>