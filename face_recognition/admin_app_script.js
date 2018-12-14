 
//--------------------------------Select Menu----------------------------------

var refreshCCTable;
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
      //refreshCCTable = setInterval(ccTimer, 1000);
      document.getElementById("lb_chuyencan").setAttribute("class","active");
    //  document.getElementById("lb_camera").setAttribute("class","normal");
      document.getElementById("lb_notification").setAttribute("class","normal");

      document.getElementById("lb_caidat").setAttribute("class","normal");
     // document.getElementById("lb_logout").setAttribute("class","normal");
      document.getElementById("lb_lophoc").setAttribute("class","normal");
      document.getElementById("lb_user").setAttribute("class","normal");
      var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd = '0'+dd
  } 

    if(mm<10) {
    mm = '0'+mm
      
    } 
    
    today = yyyy+'-' + mm + '-'+dd;
      var xhttp = new XMLHttpRequest();

      document.getElementById("main-content").innerHTML = "";
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("main-content").innerHTML = this.responseText;
          onLoadCCTable();
          document.getElementById("app_title").innerHTML="CHUYÊN CẦN";  
        }
      };
      
      xhttp.open("GET", "views/cc_manager.php?date="+today, true);
      xhttp.send();
    }
    if (id==5) {
      document.getElementById("lb_user").setAttribute("class","active");
      document.getElementById("lb_chuyencan").setAttribute("class","normal");
      document.getElementById("lb_notification").setAttribute("class","normal");

    //  document.getElementById("lb_camera").setAttribute("class","normal");
      document.getElementById("lb_caidat").setAttribute("class","normal");
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
   //  document.getElementById("lb_camera").setAttribute("class","normal");
     document.getElementById("lb_caidat").setAttribute("class","normal");
 //    document.getElementById("lb_logout").setAttribute("class","normal");
 document.getElementById("lb_notification").setAttribute("class","normal");

     document.getElementById("lb_chuyencan").setAttribute("class","normal");
     document.getElementById("lb_user").setAttribute("class","normal");

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
    showCamera();
  }

    //Quan li nguoi dung
    if (id==2){
      var xhttp = new XMLHttpRequest();
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
     xhttp.open("GET", "views/settings.php", true);
     xhttp.send();
   }

   if (id == 6){
    document.getElementById("lb_notification").setAttribute("class","active");
    document.getElementById("lb_user").setAttribute("class","normal");
    document.getElementById("lb_chuyencan").setAttribute("class","normal");
    // document.getElementById("lb_camera").setAttribute("class","normal");
    document.getElementById("lb_caidat").setAttribute("class","normal");
    // document.getElementById("lb_logout").setAttribute("class","normal");
    document.getElementById("lb_lophoc").setAttribute("class","normal");
    var xhttp = new XMLHttpRequest();

    document.getElementById("main-content").innerHTML = "";
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("main-content").innerHTML = this.responseText;
        onLoadNotificationTable();
        document.getElementById("app_title").innerHTML="THÔNG BÁO";  
      }
    };

    xhttp.open("GET", "views/notification_manager.php", true);
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
    var format3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    var password = document.getElementById("edt_password").value;
    if (password=="") {
      alert("Vui lòng nhập mật khẩu!");
      document.getElementById("edt_password").focus();
      return;
    }
    if (format3.test(name)) {
         alert("Mật khẩu không chứa kí tự đặc biệt!");
          document.getElementById("edt_password").focus();
          return; 
    }
    
      if (!/\S/.test(password))
    {
      alert("Mật khẩu không được chứa toàn ký tự trống!");
          document.getElementById("edt_password").focus();
          return; 
    }
    if (password.length>15) {
          alert("Tên không được quá 15 ký tự!");
          document.getElementById("edt_password").focus();
          return;
    }
    if (password.length<4) {
      alert("Tên không được bé hơn 4 ký tự!");
      document.getElementById("edt_password").focus();
      return;
  }
  
    var cmnd = document.getElementById("edt_id").value;
    if (cmnd=="") {
      alert("Vui lòng nhập số CMND!");
      document.getElementById("edt_id").focus();
      return;
    }
    if (!/^\d+$/.test(cmnd)) {
      alert("CMND chỉ chứa số, vui lòng nhập lại");
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
    xhttp.open("GET", "controllers/edt_student_controller.php?name_of_student="+name+"&id_of_student="+id+"&date_of_birth="+date+"&id="+cmnd+"&old_id="+old_id+"&password="+password,true);
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

  var format3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  var password = document.getElementById("edt_password").value;
  if (password=="") {
    alert("Vui lòng nhập mật khẩu!");
    document.getElementById("edt_password").focus();
    return;
  }
  if (format3.test(name)) {
       alert("Mật khẩu không được chứa kí tự đặc biệt!");
        document.getElementById("edt_password").focus();
        return; 
  }
  
    if (!/\S/.test(password))
  {
    alert("Mật khẩu không được chứa toàn ký tự trống!");
        document.getElementById("edt_password").focus();
        return; 
  }
  if (password.length>15) {
        alert("Tên sinh viên không được quá 15 ký tự!");
        document.getElementById("edt_password").focus();
        return;
  }
  if (password.length<4) {
    alert("Tên sinh viên không được bé hơn 4 ký tự!");
    document.getElementById("edt_password").focus();
    return;
}

  var cmnd = document.getElementById("edt_id").value;
  if (cmnd=="") {
    alert("Vui lòng nhập số CMND!");
    document.getElementById("edt_id").focus();
    return;
  }
  if (!/^\d+$/.test(cmnd)) {
    alert("CMND chỉ chứa số, vui lòng nhập lại");
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
  var fileSelect1 = document.getElementById('f1');
  var fileSelect2 = document.getElementById('f2');
  var fileSelect3 = document.getElementById('f3');
  var files1 = fileSelect1.files;
  var files2 = fileSelect2.files;
  var files3 = fileSelect3.files;
  if (files1.length==0||files2.length==0||files3.length==0){
    alert("Vui lòng chọn đủ 3 file ảnh");
    return;
  }

  // Loop through each of the selected files.
  var file1 = files1[0];
  var file2 = files2[0];
  var file3 = files3[0];


  // Check the file type.
  if (!file1.type.match('image.*')||!file2.type.match('image.*')||!file3.type.match('image.*')) {
    alert("File ảnh định dạng JPG");
    return;
  }

  // Add the file to the request.
  formData.append('photo1', file1, file1.name);
  formData.append('photo2', file2, file2.name);
  formData.append('photo3', file3, file3.name);
  formData.append('name_of_student',name);
  formData.append('id_of_student',id);
  formData.append('date_of_birth',date);
  formData.append('id',cmnd);
  formData.append('password',password);
  xhttp.open("POST", "controllers/add_student_controller.php",true);
  xhttp.send(formData);

}

//--------------------------Delete------------------------------------------

function onDeleteAccountSelected() {   
  var rowsSelected = document.getElementsByClassName("tr_active");
  if (rowsSelected.length==0){
    alert("Vui lòng chọn thuê bao muốn xóa!");
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
  if (!confirm("Bạn có chắc chắn xóa thuê bao có mã: " + account_id)) 
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
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd = '0'+dd
  } 

    if(mm<10) {
    mm = '0'+mm
      
    } 
    
    today = yyyy+'-' + mm + '-'+dd;
  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     document.getElementById("maincontent").innerHTML = this.responseText;
   }
 };
 
 xhttp.open("GET", "views/stat_table.php?option=0&value=0&date="+today,true);
 xhttp.send();
 
 };
 function onLoadCCTableZ(date) {

  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     document.getElementById("maincontent").innerHTML = this.responseText;
   }
 };
 
 xhttp.open("GET", "views/stat_table.php?option=0&value=0&date="+date,true);
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
  var key = document.getElementById("sl_date").value;
  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("maincontent").innerHTML =
      this.responseText;
    }
  };

  xhttp.open("GET", "views/stat_table.php?option=0&value=0&date="+key,true);
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
function onShowCaptureImage(id){
  var key = document.getElementById("sl_date").value;
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

  

xhttp.open("GET", "views/capture_image_viewer_dialog.php?id="+account_id+"&date="+key, true);
xhttp.send();

};

function onRecognized(id){
  var key = document.getElementById("sl_date").value;
  var account_id =  document.getElementById(id).getAttribute("name");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      onLoadCCTableZ(key);

    }
  };

  

xhttp.open("GET", "controllers/set_recognized.php?id="+account_id+"&date="+key, true);
xhttp.send();

};

function onAddDate(){
  var date = document.getElementById("sl_date").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      onLoadCCTableZ(date);

    }
  };

xhttp.open("GET", "controllers/add_date.php?&date="+date, true);
xhttp.send();

};

function onUnrecognized(id){
  var key = document.getElementById("sl_date").value;
  var account_id =  document.getElementById(id).getAttribute("name");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      onLoadCCTableZ(key);
    }
  };

  

xhttp.open("GET", "controllers/set_unrecognized.php?id="+account_id+"&date="+key, true);
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
function onSearchStat(){
  var date = document.getElementById("sl_date").value;
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

  xhttp.open("GET", "views/stat_table.php?option="+option+"&value="+key+"&date="+date, true);
  xhttp.send();
}
//------------------------timer------------------------------


function ccTimer() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd = '0'+dd
  } 

    if(mm<10) {
    mm = '0'+mm
      
    } 
    
    
    today = yyyy+'-' + mm + '-'+dd;
  var xhttp = new XMLHttpRequest();
  var old = document.getElementById("maincontent").innerHTML;
 // document.getElementById("maincontent").innerHTML="";
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    if (this.responseText!=old) {
    document.getElementById("maincontent").innerHTML = this.responseText;
   }
   }
 };
 
 xhttp.open("GET", "views/stat_table.php?option=0&value=0&date="+today,true);
 xhttp.send();
 
}


function onSaveSettingButton() {
  
  var minscore = document.getElementById("min_score").value; 
  
  if (minscore == "") {
    alert("Vui lòng nhập vào min_score");
    document.getElementById("min_score").focus();
    return;
  }
  if (isNaN(minscore)){
    alert("Vui lòng nhập vào một số trong khoảng (0,1)");
    document.getElementById("min_score").focus();
    return;
  }
  else{
    if (!(minscore>0&&minscore<1)){
      alert("Vui lòng nhập vào một số trong khoảng (0,1)");
    document.getElementById("min_score").focus();
    return;
    }
  }
  var type ="";
  if (document.getElementById('t2').checked) {
    type = type + document.getElementById('t2').value+",";
  }
  if (document.getElementById('t3').checked) {
    type = type + document.getElementById('t3').value+",";
  }
  if (document.getElementById('t4').checked) {
    type = type + document.getElementById('t4').value+",";
  }
  if (document.getElementById('t5').checked) {
    type = type + document.getElementById('t5').value+",";
  }
  if (document.getElementById('t6').checked) {
    type = type + document.getElementById('t6').value+",";
  }
  if (document.getElementById('t7').checked) {
    type = type + document.getElementById('t7').value+",";
  }
  if (type.length>0){
    type = type.substring(0,type.length-1);
  }
  var startTime = document.getElementById("start_time").value;
  var stopTime = document.getElementById("stop_time").value;
  if (startTime==""){
    alert("Vui lòng nhập thời gian bắt đầu");
    document.getElementById("start_time").focus();
    return;
  }
  if (stopTime==""){
    alert("Vui lòng nhập thời gian kết thúc");
    document.getElementById("stop_time").focus();
    return;
  }
  if (startTime>=stopTime){
    alert("Thời gian kết thúc phải lớn hơn thời gian bắt đầu");
    document.getElementById("stop_time").focus();
    return;
  }
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
    
    }
  };

  xhttp.open("GET", "controllers/edt_setting_controller.php?minscore="+minscore+"&work_days="+type+
    "&start_time="+startTime+"&stop_time="+stopTime,true);
  xhttp.send();
}

function onSummarySelected(){
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

  xhttp.open("GET", "views/sumary_table.php?option=0&value=", true);
  xhttp.send();
}


function showCamera(){   
  var modal = document.getElementById('myModal');
  var modalcontent = document.getElementById('modalcontent');
  modalcontent.innerHTML="";
  modal.style.display = "block";
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      modalcontent.innerHTML = this.responseText;
      
    }
  };

  xhttp.open("GET", "views/camera_view.php", true);
  xhttp.send();
};

function onShowNoteEdit(a){   
  var id =  document.getElementById(a).getAttribute("name");
  var date = document.getElementById("sl_date").value;
  
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

  xhttp.open("GET", "views/note_edit.php?id="+id+"&date="+date, true);
  xhttp.send();
};
function onSaveNoteButton() {
  
  var date = document.getElementById("date_of_note").value;
  var id = document.getElementById("student_id").value;
  var note = document.getElementById("note_txt").value;
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onSelectChange();
    }
  };

  xhttp.open("GET", "controllers/note_controller.php?id="+id+"&date="+date+"&note="+note,true);
  xhttp.send();
}
// notification manager

function showAddNotificationDialog(){   
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

  xhttp.open("GET", "views/add_notification_dialog.php", true);
  xhttp.send();
};
function onLoadNotificationTable() {
  var xhttp = new XMLHttpRequest();
  document.getElementById("maincontent").innerHTML ="";
  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     document.getElementById("maincontent").innerHTML = this.responseText;
   }
 };
 
 xhttp.open("GET", "views/notification_table.php",true);
 xhttp.send();
 
 };


function onAddNotificationButton() {

  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var title = document.getElementById("edt_title").value;
  if (title == "") {
    alert("Vui lòng nhập tiêu đề cho thông báo");
    document.getElementById("edt_title").focus();
    return;
  }

  var content = document.getElementById("edt_content").value;
  if (content == "") {
    alert("Vui lòng nhập nội dung thông báo");
    document.getElementById("edt_content").focus();
    return;
  }
  content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      closeDialog();
      onLoadNotificationTable();
      
    }
  };

  xhttp.open("GET", "controllers/add_notification_controller.php?title="+title+"&content="+content, true);
  xhttp.send();
}
