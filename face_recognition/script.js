 
//--------------------------------Select Menu----------------------------------

function onMenuSelected(id) {

    //Log out
    if (id==3) {
      window.location.href = "controllers/logoutcontroller.php";
      document.getElementById("lb_khachhang").setAttribute("class","normal");
      document.getElementById("lb_camera").setAttribute("class","normal");
      document.getElementById("lb_caidat").setAttribute("class","normal");
      document.getElementById("lb_logout").setAttribute("class","active");
    }

    //Quan li khach hang
    if (id==0) {
    	document.getElementById("lb_khachhang").setAttribute("class","active");
     document.getElementById("lb_camera").setAttribute("class","normal");
     document.getElementById("lb_caidat").setAttribute("class","normal");
     document.getElementById("lb_logout").setAttribute("class","normal");

     var xhttp = new XMLHttpRequest();

     document.getElementById("main-content").innerHTML = "";

     xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main-content").innerHTML = this.responseText;
        onLoadAccountTable();
        document.getElementById("app_title").innerHTML="Danh sách khách hàng";  
      }
    };

    xhttp.open("GET", "views/account_manager.php", true);
    xhttp.send();
  }

    //Quan li goi cuoc
    if (id==1) {
    	document.getElementById("lb_camera").setAttribute("class","active");
    	document.getElementById("lb_caidat").setAttribute("class","normal");
     document.getElementById("lb_khachhang").setAttribute("class","normal");
     document.getElementById("lb_logout").setAttribute("class","normal");

     var xhttp = new XMLHttpRequest();

     document.getElementById("main-content").innerHTML ="";

     xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main-content").innerHTML = this.responseText;
        onLoadAccountTypeTable();
        document.getElementById("app_title").innerHTML = "Danh sách gói cước";  
      }
    };
    xhttp.open("GET", "views/account_type_manager.php", true);
    xhttp.send();
  }

    //Quan li nguoi dung
    if (id==2){
      document.getElementById("lb_caidat").setAttribute("class","active");
      document.getElementById("lb_camera").setAttribute("class","normal");
      document.getElementById("lb_khachhang").setAttribute("class","normal");
      document.getElementById("lb_logout").setAttribute("class","normal");

      var xhttp = new XMLHttpRequest();
      document.getElementById("main-content").innerHTML = "";

      xhttp.onreadystatechange = function() {
      	if (this.readyState == 4 && this.status == 200) {
         if (this.responseText=="not admin") {
          alert("Bạn không có quyền truy cập mục này");
          onMenuSelected(0);
          return;
         } 
         document.getElementById("main-content").innerHTML = this.responseText;
         onLoadUserTable();
       }
     };
     xhttp.open("GET", "views/user_manager.php", true);
     xhttp.send();
   }
 }

//--------------------------------Search----------------------------------

 function onSearchAccount(){
  var key = document.getElementById("edt_search").value;
  var option;
  if (document.getElementById('name_option').checked) {
    option = document.getElementById('name_option').value;
  }
  if (document.getElementById('address_option').checked) {
    option = document.getElementById('address_option').value;
  }
  if (document.getElementById('phone_option').checked) {
    option = document.getElementById('phone_option').value;
  }
  if (document.getElementById('id_option').checked) {
    option = document.getElementById('id_option').value;
  }
  var xhttp = new XMLHttpRequest();

  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "views/account_table.php?option="+option+"&value="+key, true);
  xhttp.send();
};

function onSearchAccountType() {

  var key = document.getElementById("edt_search").value;
  var option;
  if (document.getElementById('name_option').checked) {
    option = document.getElementById('name_option').value;
  }
  if (document.getElementById('id_option').checked) {
    option = document.getElementById('id_option').value;
  }
  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML =
      this.responseText;
    }
  };

  xhttp.open("GET", "views/account_type_table.php?option="+option+"&value="+key, true);
  xhttp.send();
};

function onSearchUser() {

  var s = document.getElementById("edt_search").value;
  
  var xhttp = new XMLHttpRequest();

  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML =
      this.responseText;
    }
  };

  xhttp.open("GET", "views/user_table.php?s=" + s, true);
  xhttp.send();
};

//----------------------------Edit-----------------------------------
//--------------------------------------------------------------------------------//-------------------------------------
function onLoadAccountTableZ(id) {
 
  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     document.getElementById("maincontent").innerHTML = this.responseText;
     var rowsUnSelected = document.getElementsByTagName('tr');
     var j;
     for(j=1;j<rowsUnSelected.length;j++){
           var account_id =  rowsUnSelected[j].getAttribute("name");
           if (account_id==id)  {
             rowsUnSelected[j].setAttribute("class",'tr_active'); 
           }
         }         
 }
 };
 
 xhttp.open("GET", "views/account_table.php?option=0&value=",true);
 xhttp.send();
 
 };
 
 function onLoadAccountTypeTableZ(id) {
   var xhttp = new XMLHttpRequest();
 
   document.getElementById("maincontent").innerHTML ="";
   xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
       document.getElementById("maincontent").innerHTML = this.responseText;
 
          var rowsUnSelected = document.getElementsByTagName('tr');
     var j;
     for(j=1;j<rowsUnSelected.length;j++){
           var account_id =  rowsUnSelected[j].getAttribute("name");
           if (account_id==id)  {
             rowsUnSelected[j].setAttribute("class",'tr_active'); 
           }
         }         
 
     }
   };
 
   xhttp.open("GET", "views/account_type_table.php?option=0&value=",true);
   xhttp.send();
 
 };

 function onLoadUserTableZ(username) {
  var xhttp = new XMLHttpRequest();

  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML = this.responseText;
      var rowsUnSelected = document.getElementsByTagName('tr');
    var j;
    for(j=1; j<rowsUnSelected.length; j++){
          var u =  rowsUnSelected[j].getAttribute("name");
          if (u==username)  {
            rowsUnSelected[j].setAttribute("class",'tr_active'); 
          }
        }         

    }
  };

  xhttp.open("GET", "views/user_table.php?s=",true);
  xhttp.send();

};
 
function onSaveAccountEditButton() {

  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var format2 = /[1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var oid =document.getElementById("edt_oid").value; 
  var id = document.getElementById("edt_id").value;
 if (id=="") {
    alert("Vui lòng nhập mã khách hàng!");
    document.getElementById("edt_id").focus();
    return;
  }
  
  if (id.includes(" ")) {
        alert("Mã không được chứa khoản trắng!");
        document.getElementById("edt_id").focus();
        return;
  }


  if (id.length>10) {
        alert("Mã không được quá 10 ký tự!");
        document.getElementById("edt_id").focus();
        return;
  }
  if (!/\S/.test(id))
  {
    alert("Mã không được chứa toàn ký tự trống!");
        document.getElementById("edt_id").focus();
        return; 
  }

  if (format.test(id)) {
       alert("Mã không được chứa kí tự đặc biệt!");
        document.getElementById("edt_id").focus();
        return; 
  }

  var name = document.getElementById("edt_name").value;
  if (name=="") {
    alert("Vui lòng nhập tên!");
    document.getElementById("edt_name").focus();
    return;
  }
  if (format2.test(name)) {
       alert("Tên không chứa số hoặc kí tự đặc biệt!");
        document.getElementById("edt_name").focus();
        return; 
  }
  
    if (!/\S/.test(name))
  {
    alert("Tên không được chứa toàn ký tự trống!");
        document.getElementById("edt_name").focus();
        return; 
  }

  if (name.length>35) {
        alert("Tên không được quá 35 ký tự!");
        document.getElementById("edt_name").focus();
        return;
  }

  var cmnd = document.getElementById("edt_cmnd").value;
  if (cmnd=="") {
    alert("Vui lòng nhập số CMND!");
    document.getElementById("edt_cmnd").focus();
    return;
  }
  if (!/^\d+$/.test(cmnd)) {
    alert("CMND chỉ chứa số, vui lòng nhập lại");
    document.getElementById("edt_cmnd").focus();
    return;
  }

  if (cmnd.length>20) {
        alert("CMND không được quá 20 ký tự!");
        document.getElementById("edt_cmnd").focus();
        return;
  }


  var add = document.getElementById("edt_address").value;
  if (add=="") {
    alert("Vui lòng nhập địa chỉ!");
    document.getElementById("edt_address").focus();
    return;
  }
   if (add.length>35) {
        alert("Địa chỉ không được quá 35 ký tự!");
        document.getElementById("edt_address").focus();
        return;
  }
   if (!/\S/.test(add))
  {
    alert("Địa chỉ không được chứa toàn ký tự trống!");
        document.getElementById("edt_address").focus();
        return; 
  }
  var phone = document.getElementById("edt_phone").value;
  if (phone=="") {
    alert("Vui lòng nhập số điện thoại!");
    document.getElementById("edt_phone").focus();
    return;
  }
  if (!/^\d+$/.test(phone)) {
    alert("Số điện thoại chỉ chứa số, vui lòng nhập lại");
    document.getElementById("edt_phone").focus();
    return;
  }
  if (phone.length>13) {
        alert("Số điện thoại không được quá 12 ký tự!");
        document.getElementById("edt_phone").focus();
        return;
  }

  var date = document.getElementById("edt_date").value;
  if (date=="") {
    alert("Vui lòng nhập ngày!");
    document.getElementById("edt_address").focus();
    return;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onLoadAccountTableZ(id);
    }
  };
  var type = document.getElementById('type').value;
  xhttp.open("GET", "controllers/edt_account_controller.php?oid="+oid+"&name="+name+"&add="+add+"&phone="
    +phone+"&id="+id+"&date="+date+"&type="+type+"&cmnd="+cmnd, true);
  xhttp.send();
}

function onSaveAccountTypeEditButton() {
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var oid = document.getElementById("edt_oid").value; 
  var id = document.getElementById("edt_id").value;
  if (id == "") {
    alert("Vui lòng nhập mã gói cước");
    document.getElementById("edt_id").focus();
    return;
  }

 if (id.includes(" ")) {
        alert("Mã không được chứa khoản trắng!");
        document.getElementById("edt_id").focus();
        return;
  }


  if (id.length>10) {
        alert("Mã không được quá 10 ký tự!");
        document.getElementById("edt_id").focus();
        return;
  }
  if (!/\S/.test(id))
  {
    alert("Mã không được chứa toàn ký tự trống!");
        document.getElementById("edt_id").focus();
        return; 
  }

  if (format.test(id)) {
       alert("Mã không được chứa kí tự đặc biệt!");
        document.getElementById("edt_id").focus();
        return; 
  }

  var name = document.getElementById("edt_name").value;
  if (name == "") {
    alert("Vui lòng nhập tên gói cước");
    document.getElementById("edt_name").focus();
    return;
  }

     if (!/\S/.test(name))
  {
    alert("Tên không được chứa toàn ký tự trống!");
        document.getElementById("edt_name").focus();
        return; 
  }

  if (name.length>35) {
        alert("Tên không được quá 35 ký tự!");
        document.getElementById("edt_name").focus();
        return;
  }

  var fee = document.getElementById("edt_fee").value;
  if (fee == "") {
    alert("Vui lòng nhập mức phí hàng tháng");
    document.getElementById("edt_fee").focus();
    return;
  }

   if (!/^\d+$/.test(fee)) {
    alert("Tiền thuê bao chỉ chứa số!");
    document.getElementById("edt_fee").focus();
    return;
  }

  if (fee.length>35) {
        alert("Tiền thuê bao không được quá 35 ký tự!");
        document.getElementById("edt_fee").focus();
        return;
  }
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onLoadAccountTypeTableZ(id);
    }
  };
  xhttp.open("GET", "controllers/edt_account_type_controller.php?oid="+oid+"&name="+name+
    "&id="+id+"&fee="+fee,true);
  xhttp.send();
}

function onSaveUserEditButton() {
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var oUsername = document.getElementById("edt_oUsername").value; 
  var username = document.getElementById("edt_username").value;
  if (username == "") {
    alert("Vui lòng nhập username");
    document.getElementById("edt_username").focus();
    return;
  }

 if (username.includes(" ")) {
        alert("Username không được chứa khoảng trắng!");
        document.getElementById("edt_username").focus();
        return;
  }

  if (!/\S/.test(username))
  {
    alert("Username không được chứa toàn ký tự trống!");
        document.getElementById("edt_username").focus();
        return; 
  }

  if (format.test(username)) {
       alert("Username không được chứa kí tự đặc biệt!");
        document.getElementById("edt_username").focus();
        return; 
  }

  var password = document.getElementById("edt_password").value;
  if (password == "") {
    alert("Vui lòng nhập mật khẩu");
    document.getElementById("edt_password").focus();
    return;
  }

  var type;
  if (document.getElementById('admin_option').checked) {
    type = document.getElementById('admin_option').value;
  } else {
    type = document.getElementById('user_option').value;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onLoadUserTableZ(username);
    }
  };



  xhttp.open("GET", "controllers/edt_user_controller.php?oUsername="+oUsername+"&username="+username+
    "&password="+password+"&type="+type,true);
  xhttp.send();
}

//--------------------------------------------Add--------------------------------------------

function onAddAccountButton() {

  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var format2 = /[1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var id = document.getElementById("edt_id").value;
  if (id=="") {
    alert("Vui lòng nhập mã khách hàng!");
    document.getElementById("edt_id").focus();
    return;
  }
  
  if (id.includes(" ")) {
        alert("Mã không được chứa khoản trắng!");
        document.getElementById("edt_id").focus();
        return;
  }


  if (id.length>10) {
        alert("Mã không được quá 10 ký tự!");
        document.getElementById("edt_id").focus();
        return;
  }
  if (!/\S/.test(id))
  {
    alert("Mã không được chứa toàn ký tự trống!");
        document.getElementById("edt_id").focus();
        return; 
  }

  if (format.test(id)) {
       alert("Mã không được chứa kí tự đặc biệt!");
        document.getElementById("edt_id").focus();
        return; 
  }

  var name = document.getElementById("edt_name").value;
  if (name=="") {
    alert("Vui lòng nhập tên!");
    document.getElementById("edt_name").focus();
    return;
  }
  if (format2.test(name)) {
       alert("Tên không chứa số hoặc kí tự đặc biệt!");
        document.getElementById("edt_name").focus();
        return; 
  }
  
    if (!/\S/.test(name))
  {
    alert("Tên không được chứa toàn ký tự trống!");
        document.getElementById("edt_name").focus();
        return; 
  }
  if (name.length>35) {
        alert("Tên không được quá 35 ký tự!");
        document.getElementById("edt_name").focus();
        return;
  }

  var cmnd = document.getElementById("edt_cmnd").value;
  if (cmnd=="") {
    alert("Vui lòng nhập số CMND!");
    document.getElementById("edt_cmnd").focus();
    return;
  }
  if (!/^\d+$/.test(cmnd)) {
    alert("CMND chỉ chứa số, vui lòng nhập lại");
    document.getElementById("edt_cmnd").focus();
    return;
  }

  if (cmnd.length>20) {
        alert("CMND không được quá 20 ký tự!");
        document.getElementById("edt_cmnd").focus();
        return;
  }


  var add = document.getElementById("edt_address").value;
  if (add=="") {
    alert("Vui lòng nhập địa chỉ!");
    document.getElementById("edt_address").focus();
    return;
  }
   if (add.length>35) {
        alert("Địa chỉ không được quá 35 ký tự!");
        document.getElementById("edt_address").focus();
        return;
  }
   if (!/\S/.test(add))
  {
    alert("Địa chỉ không được chứa toàn ký tự trống!");
        document.getElementById("edt_address").focus();
        return; 
  }
  var phone = document.getElementById("edt_phone").value;
  if (phone=="") {
    alert("Vui lòng nhập số điện thoại!");
    document.getElementById("edt_phone").focus();
    return;
  }
  if (!/^\d+$/.test(phone)) {
    alert("Số điện thoại chỉ chứa số, vui lòng nhập lại");
    document.getElementById("edt_phone").focus();
    return;
  }
  if (phone.length>13) {
        alert("Số điện thoại không được quá 12 ký tự!");
        document.getElementById("edt_phone").focus();
        return;
  }

  var date = document.getElementById("edt_date").value;
  if (date=="") {
    alert("Vui lòng nhập ngày!");
    document.getElementById("edt_address").focus();
    return;
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onLoadAccountTableZ(id);
    }
  };
  var type = document.getElementById('type').value;
  xhttp.open("GET", "controllers/add_account_controller.php?name="+name+"&address="+add+"&phone="+phone+"&id="+id+"&date="+date+"&type="+type+"&cmnd="+cmnd,true);
  xhttp.send();
}

function onAddAccountTypeButton() {

   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var id = document.getElementById("edt_id").value;
  if (id == "") {
    alert("Vui lòng nhập mã gói cước");
    document.getElementById("edt_id").focus();
    return;
  }

 if (id.includes(" ")) {
        alert("Mã không được chứa khoản trắng!");
        document.getElementById("edt_id").focus();
        return;
  }


  if (id.length>10) {
        alert("Mã không được quá 10 ký tự!");
        document.getElementById("edt_id").focus();
        return;
  }
  if (!/\S/.test(id))
  {
    alert("Mã không được chứa toàn ký tự trống!");
        document.getElementById("edt_id").focus();
        return; 
  }

  if (format.test(id)) {
       alert("Mã không được chứa kí tự đặc biệt!");
        document.getElementById("edt_id").focus();
        return; 
  }

  var name = document.getElementById("edt_name").value;
  if (name == "") {
    alert("Vui lòng nhập tên gói cước");
    document.getElementById("edt_name").focus();
    return;
  }

     if (!/\S/.test(name))
  {
    alert("Tên không được chứa toàn ký tự trống!");
        document.getElementById("edt_name").focus();
        return; 
  }

  if (name.length>35) {
        alert("Tên không được quá 35 ký tự!");
        document.getElementById("edt_name").focus();
        return;
  }

  var fee = document.getElementById("edt_fee").value;
  if (fee == "") {
    alert("Vui lòng nhập mức phí hàng tháng");
    document.getElementById("edt_fee").focus();
    return;
  }

   if (!/^\d+$/.test(fee)) {
    alert("Tiền thuê bao chỉ chứa số!");
    document.getElementById("edt_fee").focus();
    return;
  }

  if (fee.length>35) {
        alert("Tiền thuê bao không được quá 35 ký tự!");
        document.getElementById("edt_fee").focus();
        return;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onLoadAccountTypeTableZ(id);
    }
  };

  xhttp.open("GET", "controllers/add_account_type_controller.php?name="+name+"&id="+id+
    "&fee="+fee, true);
  xhttp.send();
}

//--------------------------Delete------------------------------------------

function onDeleteAccountSelected() {   
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn thuê bao muốn xóa!");
    return;
  }
  if (!confirm("Bạn có chắc chắn xóa những thuê bao đã chọn?")) 
    return;
  var i;
  for(i=0; i<rowsSelected.length; i++) {
    var id = rowsSelected[i].getAttribute('name');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       onLoadAccountTable();
     }
   };
   xhttp.open("POST", "controllers/delete_account_controller.php",true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("id="+id);
 };
  alert("Đã xóa thành công");
}

function onDeleteAccountTypeSelected() {
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn gói cước muốn xóa!");
    return;
  }
  if (!confirm("Bạn có chắc chắn xóa những gói cước đã chọn?")) 
    return;
  var i;
  for(i=0; i<rowsSelected.length; i++) {
    var id = rowsSelected[i].getAttribute('name');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       onLoadAccountTypeTable();
     }
   };
   xhttp.open("POST", "controllers/delete_account_type_controller.php",true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("id="+id);
 };
  alert("Đã xóa thành công");
}

function onDeleteUserSelected() {
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn user muốn xóa!");
    return;
  }
  if (!confirm("Bạn có chắc chắn xóa những user đã chọn?")) 
    return;
  var i;
  for(i=0; i < rowsSelected.length; i++) {
    var username = rowsSelected[i].getAttribute('name');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       onLoadUserTable();
     }
   };
   xhttp.open("POST", "controllers/delete_user_controller.php",true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("username="+username);
 };
  alert("Đã xóa thành công");
}

function onDeleteAccountButton(id){
  var account_id =  document.getElementById(id).getAttribute("name");
  if (!confirm("Bạn có chắc chắn xóa thuê bao có mã: " + account_id)) 
    return;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadAccountTable();
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "controllers/delete_account_controller.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("id="+account_id);

};

function onDeleteAccountTypeButton(id){
  var type_id =  document.getElementById(id).getAttribute("name");
  if (!confirm("Bạn có chắc chắn xóa gói cước có mã: " + type_id)) 
    return;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadAccountTable();
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "controllers/delete_account_type_controller.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("id=" + type_id);
};

function onDeleteUserButton(key){
  var username =  document.getElementById(key).getAttribute("name");
  if (!confirm("Bạn có chắc chắn xóa user có tên: " + username)) 
    return;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadUserTable();
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "controllers/delete_user_controller.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("username=" + username);
};

function onAddUserButton() {

  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var u = document.getElementById("edt_username").value;
  if (u == "") {
    alert("Vui lòng nhập username");
    document.getElementById("edt_username").focus();
    return;
  }

  var p = document.getElementById("edt_password").value;
  if (p == "") {
    alert("Vui lòng nhập password");
    document.getElementById("edt_password").focus();
    return;
  }

 if (u.includes(" ")) {
        alert("Username không được chứa khoảng trắng!");
        document.getElementById("edt_username").focus();
        return;
  }

  if (!/\S/.test(u))
  {
    alert("Username không được chứa toàn ký tự trống!");
        document.getElementById("edt_username").focus();
        return; 
  }

  if (format.test(u)) {
       alert("Username không được chứa kí tự đặc biệt!");
        document.getElementById("edt_username").focus();
        return; 
  }

  var type;
  if (document.getElementById('admin_option').checked) {
    type = document.getElementById('admin_option').value;
  }
  if (document.getElementById('user_option').checked) {
    type = document.getElementById('user_option').value;
  }

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onLoadUserTableZ(u);
    }
  };

  xhttp.open("GET", "controllers/add_user_controller.php?u="+u+"&p="+p+"&type="+type, true);
  xhttp.send();
}

//--------------------------Delete------------------------------------------

function onDeleteAccountSelected() {   
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn thuê bao muốn xóa!");
    return;
  }
  if (!confirm("Bạn có chắc chắn xóa những thuê bao đã chọn?")) 
    return;
  var i;
  for(i=0; i<rowsSelected.length; i++) {
    var id = rowsSelected[i].getAttribute('name');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       onLoadAccountTable();
     }
   };
   xhttp.open("POST", "controllers/delete_account_controller.php",true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("id="+id);
 };
  alert("Đã xóa thành công");
}

function onDeleteAccountTypeSelected() {
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn gói cước muốn xóa!");
    return;
  }
  if (!confirm("Bạn có chắc chắn xóa những gói cước đã chọn?")) 
    return;
  var i;
  for(i=0; i<rowsSelected.length; i++) {
    var id = rowsSelected[i].getAttribute('name');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       onLoadAccountTypeTable();
     }
   };
   xhttp.open("POST", "controllers/delete_account_type_controller.php",true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("id="+id);
 };
  alert("Đã xóa thành công");
}

function onDeleteAccountButton(id){
  var account_id =  document.getElementById(id).getAttribute("name");
  if (!confirm("Bạn có chắc chắn xóa thuê bao có mã: " + account_id)) 
    return;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadAccountTable();
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "controllers/delete_account_controller.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("id="+account_id);

};

function onDeleteAccountTypeButton(id){
  var type_id =  document.getElementById(id).getAttribute("name");
  if (!confirm("Bạn có chắc chắn xóa gói cước có mã: " + type_id)) 
    return;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadAccountTable();
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "controllers/delete_account_type_controller.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("id=" + type_id);

};


//----------------------------------Load Tables-----------------------------------

function onLoadAccountTable() {
 var xhttp = new XMLHttpRequest();
 document.getElementById("maincontent").innerHTML ="";
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
};

xhttp.open("GET", "views/account_table.php?option=0&value=",true);
xhttp.send();

};

function onLoadAccountTypeTable() {
  var xhttp = new XMLHttpRequest();

  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "views/account_type_table.php?option=0&value=",true);
  xhttp.send();

};

function onLoadUserTable() {
  var xhttp = new XMLHttpRequest();

  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML = this.responseText;
    }
  };

  xhttp.open("GET", "views/user_table.php?s=",true);
  xhttp.send();
}


//------------------------------Select Rows-----------------------------------

function onRowSelected(id){

  if (document.getElementById(id).getAttribute("class")=="tr_active") {
    document.getElementById(id).setAttribute("class","tr_normal");
  } else{
    document.getElementById(id).setAttribute("class","tr_active");  
  }
}

function onUnSelectAll(){    
  var rowsSelected = document.getElementsByTagName('tr');
  var i;
  for(i=1;i<rowsSelected.length;i++){
    rowsSelected[i].setAttribute("class",'tr_normal');

  };
};

function onSelectAll(){   

  var rowsUnSelected = document.getElementsByTagName('tr');
  var j;
  for(j=1;j<rowsUnSelected.length;j++){
    rowsUnSelected[j].setAttribute("class",'tr_active');

  };
};

function onSelectChange(){   
  var option;
  var key = document.getElementById("account_type").value;
  if (key==-1){
    option=0;
  } else {
    option=4;
  }
  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML =
      this.responseText;
    }
  };

  xhttp.open("GET", "views/account_table.php?option="+option+"&value="+key, true);
  xhttp.send();

};

//--------------------------------Show Dialogs---------------------------------------

function showEditAccountDialog(id){
  var account_id =  document.getElementById(id).getAttribute("name");
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML =
      this.responseText;
      modal.style.display = "block";

    }
  };

  xhttp.open("GET", "views/edt_account_dialog.php?id="+account_id, true);
  xhttp.send();

};

function showEditAccountTypeDialog(id){
  var type_id =  document.getElementById(id).getAttribute("name");
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');

  modalcontent.innerHTML = "";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML = this.responseText;
      modal.style.display = "block";


    }
  };

  xhttp.open("GET", "views/edt_account_type_dialog.php?id=" + type_id, true);
  xhttp.send();

};

function showEditUserDialog(key){
  var username =  document.getElementById(key).getAttribute("name");
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');

  modalcontent.innerHTML = "";

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML = this.responseText;
      modal.style.display = "block";
    }
  };

  xhttp.open("GET", "views/edt_user_dialog.php?username=" + username, true);
  xhttp.send();

};

function showAddAccountDialog(){   
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML =
      this.responseText;
      modal.style.display = "block";

    }
  };

  xhttp.open("GET", "views/add_account_dialog.php", true);
  xhttp.send();
};

function showAddAccountTypeDialog(){   
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML =
      this.responseText;
      modal.style.display = "block";

    }
  };

  xhttp.open("GET", "views/add_account_type_dialog.php", true);
  xhttp.send();
};

function showAddUserDialog(){   
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML = this.responseText;
      modal.style.display = "block";
    }
  };

  xhttp.open("GET", "views/add_user_dialog.php", true);
  xhttp.send();
};

function closeDialog(){   
  var modal = document.getElementById('myModal');
  modal.style.display = "none";

};

function showPaymentDialog(id){ 

  var account_id =  document.getElementById(id).getAttribute("name");    
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML =
      this.responseText;
       modal.style.display = "block";
      onRowSelected(id);

    }
    };
    xhttp.open("GET", "views/payment_info_dialog.php?id="+account_id, true);
    xhttp.send();
  };

function payButton(){ 
  var account_id =  document.getElementById("un_pay").getAttribute("name");    
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML =
      this.responseText;

       modal.style.display = "block";

    }
    };
    

    xhttp.open("GET", "views/payment_dialog.php?id="+account_id, true);
    xhttp.send();
  };

function onShowAddBillButton(id){ 
  var account_id =  document.getElementById(id).getAttribute("name");    
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML =
      this.responseText;
       modal.style.display = "block";
        onRowSelected(id);

    }
    };
    

    xhttp.open("GET", "views/payment_dialog.php?id="+account_id, true);
    xhttp.send();
  };

function onAddBillButton() {
    
      var id = document.getElementById("edt_id").value;
    
      var monthFee = document.getElementById("edt_month_fee").value;
       
      var fromday= document.getElementById("lday").value;
      
      var today = document.getElementById("select_to_day").value;
     
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        closeDialog();
        onLoadAccountTableZ(id);
    }
    };
    xhttp.open("GET", "controllers/add_bill_controller.php?id="+id+"&fday="+fromday+"&tday="+today+"&fee="+monthFee,true);
    xhttp.send();
    };

function onSelectDateChange(){   
  
  var sl = document.getElementById("select_to_day");
  var index = sl.selectedIndex+1;
  var fee = document.getElementById("edt_month_fee").value;
  var sum = fee*index;
  var vat = parseInt(String(sum*10/100));
  var total = vat+sum;
  document.getElementById("sum").value = sum;
  document.getElementById("vat").value =  vat;
  document.getElementById("total").value = total;
  };
