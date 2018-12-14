<?php
    date_default_timezone_set('Asia/Ho_Chi_Minh');

    $t = microtime(true);
    $micro = sprintf("%06d",($t - floor($t)) * 1000000);
    $d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );
    print $d->format("Y-m-d H:i:s.u"); // note at point on "u"
    ?>