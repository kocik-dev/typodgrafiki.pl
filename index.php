<?php 
  define('BASE_PATH', '');
  $homepage = 1;
  $menu1_active = 1;
  include (BASE_PATH.'assets/contact-form/mail.php');   
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Typ od grafiki - Grafik freelancer / Front-end Developer</title>
        <?php include (BASE_PATH.'assets/head.php'); ?>
        <!-- <link rel="stylesheet" type="text/css" href="css/homepage.css"> -->
    </head>
    <body>
        <?php include (BASE_PATH.'assets/top.php'); ?>
        <section class="section">
            <div class="container">
                <h1 class="title">
                    Hello World
                </h1>
                <p class="subtitle">
                    My first website with <strong>Bulma</strong>!
                </p>
            </div>
        </section>
        <?php include (BASE_PATH.'assets/copyright.php'); ?>
    </body>
</html>