<?php
  require '../models/class.php';
?>

<div class="topbar">
  <div class="topnav">
    <h4 id="app_title">QUẢN LÍ SINH VIÊN</h4>
    <div class="toolbar">
   
      <button class="right btn btn-default" onclick="onDeleteAccountSelected()">Xóa mục đã chọn</button>
      <button class="right btn btn-default" onclick="onSelectAll()">Chọn tất cả</button>
      <button class="right btn btn-default" onclick="onUnSelectAll()">Bỏ chọn</button>
      <button class="right btn btn-default" onclick="showAddAccountDialog()">Thêm</button>
      <div class="search-container">
        <input type="text" placeholder="Nhập thông tin.." name="search" id="edt_search">
        <button type="button" class='btn btn-default' onclick="onSearchAccount()">Tìm kiếm</button>
        <input type="radio" id="name_option" value="1" name="search_option" checked="checked">Tên</input>
        <input type="radio" id="id_option" value="2" name="search_option">MSV</input> 
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