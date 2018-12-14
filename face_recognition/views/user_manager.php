<?php
  require_once "../session.php";
  if (!$_SESSION['isAdmin']){
  	echo "not admin";
  	exit();
  }
?>

<?php
  require '../models/user.php';
?>
<div class="topbar">
  <div class="topnav">
   
    <h4 id="app_title">NGƯỜI DÙNG</h4>
    <div class="toolbar">
      <button class="right btn btn-default" onclick="onDeleteUserSelected()">Xóa mục đã chọn</button>
      <button class="right btn btn-default" onclick="onSelectAll()">Chọn tất cả</button>
      <button class="right btn btn-default" onclick="onUnSelectAll()">Bỏ chọn</button>
      <button class="right btn btn-default" onclick="showAddUserDialog()">Thêm</button>
      <div class="search-container">
        <input type="text" placeholder="Nhập Username.." name="search" id="edt_search">
        <button type="button" class='btn btn-default' onclick="onSearchUser()">Tìm kiếm</button>
     </div>
    </div>
  </div>
</div>

<div id="myModal" class="modal">
    <!-- Modal content -->
  <div id="modalcontent" class="modal-content">

  </div>

</div>

<div class="contentpage" id="maincontent">
  <!--  
  // this is a place for table

-->
</div>