<?php 
    define('BASE_PATH', '../');
    $menu5_active = 1;
    include (BASE_PATH.'assets/contact-form/mail.php');
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

            <?php if(!empty($emailSent)): ?>
                <h3>Wysłane</h3>
                <div class="alert alert-success text-center"><?php echo $config->get('messages.success'); ?></div>
            <?php else: ?>
                <h3>Napisz</h3>
                <?php if(!empty($hasError)): ?>
                    <div class="alert alert-danger text-center"><?php echo $config->get('messages.error'); ?></div>
                <?php endif; ?>
                <form action="<?php echo BASE_PATH ?><?php echo $_SERVER['REQUEST_URI']; ?>" enctype="application/x-www-form-urlencoded" id="contact-form" method="POST">
                  <div class="row">
                      <div class="col-xs-12 col-md-6">
                          <input type="text" class="form-control" id="form-name" name="form-name" placeholder="<?php echo $config->get('fields.name'); ?>" required>  
                      </div>
                      <div class="col-xs-12 col-md-6">
                          <input type="email" class="form-control" id="form-email" name="form-email" placeholder="<?php echo $config->get('fields.email'); ?>" required>
                      </div>
                  </div>
                  <textarea class="form-control"  id="form-message" name="form-message" placeholder="<?php echo $config->get('fields.message'); ?>" required></textarea>
                  <label class="checkbox">
                      <input type="checkbox" checked="checked" required>
                      <span class="checkmark"></span>
                      Zgoda na wszystko zawiązane z RODO, FBI i NASA.
                  </label>
                  <button class="btn" type="submit">
                      <span></span>
                      <span></span>
                      <?php echo $config->get('fields.btn-send'); ?>
                  </button>
                </form>
            <?php endif; ?>

            <script type="text/javascript" src="<?php echo BASE_PATH ?>assets/contact-form/contact-form.js"></script>
            <script type="text/javascript">
                new ContactForm('#contact-form');
            </script>

        </div>    
        <?php include (BASE_PATH.'assets/copyright.php'); ?>
    </body>
</html>