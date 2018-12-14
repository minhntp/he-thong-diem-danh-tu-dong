<?php
  require '../models/record_date.php';
  $current_date = $_GET['date'];
  $rd = new RecordDate();
  $arr = $rd->getAll();
?>

<div class="topbar">
  <div class="topnav">
   
    <h4 id="app_title">CHUYÊN CẦN</h4>
    <div class="toolbar">
    <button class="right btn btn-default" onclick="onSummarySelected()">Tổng quan</button>
    <div class="search-container">
    
    <input type="text" placeholder="Search.." name="search" id="edt_search">
    <button type="button" class='btn btn-default' onclick="onSearchStat()">Tìm kiếm</button>
    <input type="radio" id="name_option" value="1" name="search_option" checked="checked">Tên</input>
    <input type="radio" id="id_option" value="2" name="search_option">MSV</input> 
    
    </div>
      <select onchange='onSelectChange()' class="toolbar_sl" id="sl_date" name="atype">
      <?php
      foreach ($arr as $key => $value) {
        if ($current_date!=$value['date']){
        echo "<option value={$value['date']}>{$value['date']}</option>}";
        }
      }
      echo "<option value={$current_date} selected='selected'>Hôm nay</option>}";
      ?>  
    </select>
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