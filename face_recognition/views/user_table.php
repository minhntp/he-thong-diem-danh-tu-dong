<?php
  require_once "../models/user.php";
  $s = $_GET['s'];
?>

<table class="table">
  <tr class="header">
    <th class="index">STT</th>
    <th>Tên đăng nhập</th>
    <th>Mật khẩu</th>
    <th>Loại</th>
    <th>Thao tác</th>
  </tr>

  <?php
    $user = new User();
    $arr = $user->getAllByName($s);
    
    foreach ($arr as $key => $value) {
      $i= $key + 1;
      if($value['type'] == 1) {
          $type = 'admin';
      } else {
          $type = 'user';
      }
      echo "<tr id='".$key."' name='{$value['username']}' class='tr_normal' onclick='onRowSelected(".$key.")'>";
      echo "<td class='index'>".$i."</td>";
      echo "<td>".$value['username']."</td>
            <td>".$value['password']."</td> 
            <td>".$type."</td>";
      echo "<td>
              <input class='btn btn-default' type='button' value='Xóa' onclick='onDeleteUserButton(".$key.")'>
              <input class='btn btn-default' type='button' onclick='showEditUserDialog(".$key.")' value='Chỉnh sửa'>
            </td>";
      echo "</tr>";
    };
  ?>
</table>