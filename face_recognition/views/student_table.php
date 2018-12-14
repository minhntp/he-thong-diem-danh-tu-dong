<?php
  require_once "../models/student.php";
  $option = $_GET['option'];
  $value = $_GET['value'];
?>

<table class="table">
  <tr class="header">
    <th class="index">STT</th>
    <th class="index">MSV</th>
    <th>Họ Và Tên</th>
    <th>CMND</th>
    <th>Ngày sinh</th>
    <th>Mật khẩu</th>
    <th>Thao tác</th>
  </tr>

  <?php
    $student = new Student();

    switch ($option) {
      case 0:
        $arr = $student->getAll();
        break;
      case 1:
        $arr = $student->getAllByName($value);
          break;  
      case 2:
        $arr = $student->getAllById($value);
          # code...
          break;       
    }
    
    foreach ($arr as $key => $value) {
      $i= $key+1;  
      echo "<tr id='".$key."' name='{$value['id_of_student']}' class='tr_normal' onclick='onRowSelected(".$key.")'>";
      echo "<td class='index'>".$i."</td>";
      echo "<td class='index'>".$value['id_of_student']."</td>";
      echo "<td>".$value['name_of_student']."</td>
            <td>".$value["id"]."</td>
            <td>".$value["date_of_birth"]."</td>
            <td>".$value["password"]."</td>
            ";

      echo "<td>
              <input type='button' class='btn btn-default' onclick='onShowImage(".$key.")' value='Xem ảnh'>
              <input type='button' class='btn btn-default' value='Xóa' onclick='onDeleteAccountButton(".$key.")'>
              <input type='button' class='btn btn-default' onclick='showEditAccountDialog(".$key.")' value='Chỉnh sửa'>
            </td>";
      echo "</tr>";
    };
  ?>
</table>