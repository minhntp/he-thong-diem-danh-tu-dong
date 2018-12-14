<?php
  require_once "../session.php";
  require "../models/notification.php";
  $title = $_GET['title'];
  $content = $_GET['content'];
  date_default_timezone_set('Asia/Ho_Chi_Minh');
    $t = microtime(true);
    $micro = sprintf("%06d",($t - floor($t)) * 1000000);
    $d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );
  $datetime =  $d->format("Y-m-d H:i:s.u"); // note at point on "u"

  $bool = Notification::insert($title,nl2br($content),$datetime);

  if ($bool==true) {
    echo "Tạo thông báo thành công";
  }
  else{
    echo "Tạo thông báo thành công";
  }
?>

