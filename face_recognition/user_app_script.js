 
//--------------------------------Select Menu----------------------------------

function onMenuSelected(id) {

    //Log out
    /** 
    if (id==3) {
      window.location.href = "controllers/logoutcontroller.php";
      document.getElementById("lb_lophoc").setAttribute("class","normal");
      document.getElementById("lb_camera").setAttribute("class","normal");
      document.getElementById("lb_caidat").setAttribute("class","normal");
      document.getElementById("lb_logout").setAttribute("class","active");
      document.getElementById("lb_user").setAttribute("class","normal");

    }
    */
    if (id==4) {
      document.getElementById("lb_chuyencan").setAttribute("class","active");
      document.getElementById("lb_camera").setAttribute("class","normal");
     // document.getElementById("lb_caidat").setAttribute("class","normal");
     // document.getElementById("lb_logout").setAttribute("class","normal");
      document.getElementById("lb_lophoc").setAttribute("class","normal");
     // document.getElementById("lb_user").setAttribute("class","normal");

      var xhttp = new XMLHttpRequest();
 
      document.getElementById("main-content").innerHTML = "";
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("main-content").innerHTML = this.responseText;
          onLoadCCTable();
          document.getElementById("app_title").innerHTML="CHUYÊN CẦN";  
        }
      };
  
      xhttp.open("GET", "views/cc_manager.php", true);
      xhttp.send();
    }
    if (id==5) {
    //  document.getElementById("lb_user").setAttribute("class","active");
      document.getElementById("lb_chuyencan").setAttribute("class","normal");
      document.getElementById("lb_camera").setAttribute("class","normal");
   //   document.getElementById("lb_caidat").setAttribute("class","normal");
   //   document.getElementById("lb_logout").setAttribute("class","normal");
      document.getElementById("lb_lophoc").setAttribute("class","normal");
      var xhttp = new XMLHttpRequest();
 
      document.getElementById("main-content").innerHTML = "";
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("main-content").innerHTML = this.responseText;
          onLoadUserTable();
          document.getElementById("app_title").innerHTML="NGƯỜI DÙNG";  
        }
      };
  
      xhttp.open("GET", "views/user_manager.php", true);
      xhttp.send();
    }

    //Quan li khach hang
    if (id==0) {
    	document.getElementById("lb_lophoc").setAttribute("class","active");
     document.getElementById("lb_camera").setAttribute("class","normal");
  //   document.getElementById("lb_caidat").setAttribute("class","normal");
 //    document.getElementById("lb_logout").setAttribute("class","normal");
     document.getElementById("lb_chuyencan").setAttribute("class","normal");
  //   document.getElementById("lb_user").setAttribute("class","normal");

     var xhttp = new XMLHttpRequest();

     document.getElementById("main-content").innerHTML = "";

     xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main-content").innerHTML = this.responseText;
        onLoadAccountTable();
        document.getElementById("app_title").innerHTML="DANH SÁCH SINH VIÊN";  
      }
    };

    xhttp.open("GET", "views/student_manager.php", true);
    xhttp.send();
  }

    //Quan li goi cuoc
    if (id==1) {
     document.getElementById("lb_camera").setAttribute("class","active");
  //   document.getElementById("lb_caidat").setAttribute("class","normal");
     document.getElementById("lb_lophoc").setAttribute("class","normal");
  //   document.getElementById("lb_logout").setAttribute("class","normal");
     document.getElementById("lb_chuyencan").setAttribute("class","normal");
  //   document.getElementById("lb_user").setAttribute("class","normal");


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
  //    document.getElementById("lb_caidat").setAttribute("class","active");
      document.getElementById("lb_camera").setAttribute("class","normal");
      document.getElementById("lb_lophoc").setAttribute("class","normal");
  //    document.getElementById("lb_logout").setAttribute("class","normal");
      document.getElementById("lb_chuyencan").setAttribute("class","normal");
  //    document.getElementById("lb_user").setAttribute("class","normal");

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

  xhttp.open("GET", "views/student_table.php?option="+option+"&value="+key, true);
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
 
 xhttp.open("GET", "views/student_table.php?option=0&value=",true);
 xhttp.send();
 
 };

function onSaveAccountEditButton() {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var format2 = /[1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var old_id = document.getElementById("edt_oid").value; 
    var id = document.getElementById("edt_id_of_student").value;
    if (id=="") {
      alert("Vui lòng nhập mã sinh viên!");
      document.getElementById("edt_id_of_student").focus();
      return;
    }
    
    if (id.includes(" ")) {
          alert("Mã sinh viên không được chứa khoảng trắng!");
          document.getElementById("edt_id_of_student").focus();
          return;
    }
  
  
    if (id.length>15) {
          alert("Mã sinh viên không được quá 15 ký tự!");
          document.getElementById("edt_id_of_student").focus();
          return;
    }
    if (!/\S/.test(id))
    {
      alert("Mã sinh viên không được chứa toàn ký tự trống!");
          document.getElementById("edt_id_of_student").focus();
          return; 
    }
  
    if (format.test(id)) {
         alert("Mã sinh viên không được chứa kí tự đặc biệt!");
          document.getElementById("edt_id_of_student").focus();
          return; 
    }
  
    var name = document.getElementById("edt_name_of_student").value;
    if (name=="") {
      alert("Vui lòng nhập tên sinh viên!");
      document.getElementById("edt_name_of_student").focus();
      return;
    }
    if (format2.test(name)) {
         alert("Tên sinh viên không được chứa số hoặc kí tự đặc biệt!");
          document.getElementById("edt_name_of_student").focus();
          return; 
    }
    
      if (!/\S/.test(name))
    {
      alert("Tên sinh viên không được chứa toàn ký tự trống!");
          document.getElementById("edt_name_of_student").focus();
          return; 
    }
    if (name.length>35) {
          alert("Tên sinh viên không được quá 35 ký tự!");
          document.getElementById("edt_name_of_student").focus();
          return;
    }
  
    var cmnd = document.getElementById("edt_id").value;
    if (cmnd=="") {
      alert("Vui lòng nhập số CMND!");
      document.getElementById("edt_id").focus();
      return;
    }
    if (!/^\d+$/.test(cmnd)) {
      alert("CMND chỉ được chứa số");
      document.getElementById("edt_id").focus();
      return;
    }
  
    if (cmnd.length>20) {
          alert("CMND không được vượt quá 20 ký tự!");
          document.getElementById("edt_id").focus();
          return;
    }
    var date = document.getElementById("edt_date_of_birth").value;
    if (date=="") {
      alert("Vui lòng nhập ngày!");
      document.getElementById("edt_date_of_birth").focus();
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
    xhttp.open("GET", "controllers/edt_student_controller.php?name_of_student="+name+"&id_of_student="+id+"&date_of_birth="+date+"&id="+cmnd+"&old_id="+old_id,true);
    xhttp.send();
  }


//--------------------------------------------Add--------------------------------------------

function onAddAccountButton() {

  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var format2 = /[1234567890!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var id = document.getElementById("edt_id_of_student").value;
  if (id=="") {
    alert("Vui lòng nhập mã sinh viên!");
    document.getElementById("edt_id_of_student").focus();
    return;
  }
  
  if (id.includes(" ")) {
        alert("Mã sinh viên không được chứa khoản trắng!");
        document.getElementById("edt_id_of_student").focus();
        return;
  }


  if (id.length>15) {
        alert("Mã sinh viên không được quá 15 ký tự!");
        document.getElementById("edt_id_of_student").focus();
        return;
  }
  if (!/\S/.test(id))
  {
    alert("Mã sinh viên không được chứa toàn ký tự trống!");
        document.getElementById("edt_id_of_student").focus();
        return; 
  }

  if (format.test(id)) {
       alert("Mã sinh viên không được chứa kí tự đặc biệt!");
        document.getElementById("edt_id_of_student").focus();
        return; 
  }

  var name = document.getElementById("edt_name_of_student").value;
  if (name=="") {
    alert("Vui lòng nhập tên sinh viên!");
    document.getElementById("edt_name_of_student").focus();
    return;
  }
  if (format2.test(name)) {
       alert("Tên sinh viên không chứa số hoặc kí tự đặc biệt!");
        document.getElementById("edt_name_of_student").focus();
        return; 
  }
  
    if (!/\S/.test(name))
  {
    alert("Tên sinh viên không được chứa toàn ký tự trống!");
        document.getElementById("edt_name_of_student").focus();
        return; 
  }
  if (name.length>35) {
        alert("Tên sinh viên không được quá 35 ký tự!");
        document.getElementById("edt_name_of_student").focus();
        return;
  }

  var cmnd = document.getElementById("edt_id").value;
  if (cmnd=="") {
    alert("Vui lòng nhập số CMND!");
    document.getElementById("edt_id").focus();
    return;
  }
  if (!/^\d+$/.test(cmnd)) {
    alert("CMND chỉ được chứa số");
    document.getElementById("edt_id").focus();
    return;
  }

  if (cmnd.length>20) {
        alert("CMND không được quá 20 ký tự!");
        document.getElementById("edt_id").focus();
        return;
  }
  var date = document.getElementById("edt_date_of_birth").value;
  if (date=="") {
    alert("Vui lòng nhập ngày!");
    document.getElementById("edt_date_of_birth").focus();
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
  var formData = new FormData();
  var fileSelect = document.getElementById('f1');
  print(fileSelect.length);
  var files = fileSelect.files;
  // Loop through each of the selected files.
  for (var i = 0; i < files.length; i++) {
  var file = files[i];

  // Check the file type.
  if (!file.type.match('image.*')) {
    continue;
  }

  // Add the file to the request.
  formData.append('photo', file, file.name);
  } 
  formData.append('name_of_student',name);
  formData.append('id_of_student',id);
  formData.append('date_of_birth',date);
  formData.append('id',cmnd);
  xhttp.open("POST", "controllers/add_student_controller.php",true);
  xhttp.send(formData);

}

//--------------------------Delete------------------------------------------

function onDeleteAccountSelected() {   
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn sinh muốn xóa!");
    return;
  }
  if (!confirm("Bạn có chắc chắn xóa những sinh viên đã chọn?")) 
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
   xhttp.open("POST", "controllers/delete_student_controller.php",true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("id="+id);
 };
  alert("Đã xóa thành công");
}

function onDeleteAccountButton(id){
  var account_id =  document.getElementById(id).getAttribute("name");
  if (!confirm("Bạn có chắc chắn xóa sinh viên có mã: " + account_id)) 
    return;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadAccountTable();
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "controllers/delete_student_controller.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("id="+account_id);

};

//--------------------------Delete------------------------------------------

function onDeleteAccountSelected() {   
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn sinh viên muốn xóa!");
    return;
  }
  if (!confirm("Bạn có chắc chắn xóa những sinh viên đã chọn?")) 
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
   xhttp.open("POST", "controllers/delete_student_controller.php",true);
   xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   xhttp.send("id="+id);
 };
  alert("Đã xóa thành công");
}

function onDeleteAccountButton(id){
  var account_id =  document.getElementById(id).getAttribute("name");
  if (!confirm("Bạn có chắc chắn xóa sinh viên có mã: " + account_id)) 
    return;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadAccountTable();
      alert(this.responseText);
    }
  };
  xhttp.open("POST", "controllers/delete_student_controller.php",true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("id="+account_id);

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

xhttp.open("GET", "views/student_table.php?option=0&value=",true);
xhttp.send();

};
function onLoadCCTable() {
  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     document.getElementById("maincontent").innerHTML = this.responseText;
   }
 };
 
 xhttp.open("GET", "views/stat_table.php?option=0&value=",true);
 xhttp.send();
 
 };


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

  xhttp.open("GET", "views/student_table.php?option="+option+"&value="+key, true);
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

  xhttp.open("GET", "views/edt_student_dialog.php?id="+account_id, true);
  xhttp.send();

};

function onShowImage(id){
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

  xhttp.open("GET", "views/image_view_dialog.php?id="+account_id, true);
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

  xhttp.open("GET", "views/add_student_dialog.php", true);
  xhttp.send();
};

function closeDialog(){   
  var modal = document.getElementById('myModal');
  modal.style.display = "none";

};

