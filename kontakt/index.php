<?php 
    define('BASE_PATH', '../');
    $menu5_active = 1;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Kontakt - Typ od grafiki</title>
        <?php include (BASE_PATH.'assets/head.php'); ?>
    </head>
    <body>
        <?php include (BASE_PATH.'assets/top.php'); ?>
        <div id="contact" class="section text-center container bg-white">

          <form role="form" id="contactForm" class="contact-form" data-toggle="validator" class="shake">
              <div class="form-group">
                <div class="controls">
                  <input type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name">
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="form-group">
                <div class="controls">
                  <input type="email" class="email form-control" id="email" placeholder="Email" required data-error="Please enter your email">
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="form-group">
                <div class="controls">
                  <input type="text" id="msg_subject" class="form-control" placeholder="Subject" required data-error="Please enter your message subject">
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="form-group">
                <div class="controls">
                  <textarea id="message" rows="7" placeholder="Massage" class="form-control" required data-error="Write your message"></textarea>
                  <div class="help-block with-errors"></div>
                </div>  
              </div>

              <button type="submit" id="submit" class="btn btn-success"></i> Send Message</button>
              <div id="msgSubmit" class="h3 text-center hidden"></div> 
              <div class="clearfix"></div>   

            </form>  

            <script type="text/javascript" src="js/form-validator.min.js"></script>  
            <script type="text/javascript" src="js/contact-form-script.js"></script>

        </div>    
        <?php include (BASE_PATH.'assets/copyright.php'); ?>
    </body>
</html>