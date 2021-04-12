<?php
    define('BASE_PATH', '');
    include (BASE_PATH.'assets/reset_var.php');
    $homepage = 1;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html lang="pl-PL">
    <head>
        <title>Typ od grafiki Ups!</title>
        <?php include (BASE_PATH.'assets/head.php'); ?>
    </head>
    <body>
        <?php include (BASE_PATH.'assets/top.php'); ?>
        <div id="error404" class="clearfix bg-white text-center">

                <h1>Ups!</h1>
                <p>
                    <a href="/" class="btn btn-primary">
                        Strona główna<span></span>
                    </a>
                </p>

        </div>

        <?php include (BASE_PATH.'assets/copyright.php'); ?>

    </body>
</html>