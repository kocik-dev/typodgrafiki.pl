<?php 
  define('BASE_PATH', '');
  $homepage = 1;
  $menu1_active = 1;
  include (BASE_PATH.'assets/contact-form/mail.php');   
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Typ od grafiki - Typek</title>
        <?php include (BASE_PATH.'assets/head.php'); ?>
        <link rel="stylesheet" type="text/css" href="css/homepage.css">
        <script type="text/javascript">    
            jQuery(function($) {
                $(window).scroll(function($){
                    parallaxMenu();
                });
                $(document).ready(function($){
                    parallaxMenu();

                    <?php if(!empty($emailSent)): ?>
                        $('html, body').animate({
                           'scrollTop':   $('#contact').offset().top
                         }, 500);
                    <?php endif; ?>
                });
            });
        </script>             
    </head>
    <body>

        <?php include (BASE_PATH.'assets/top.php'); ?>
        <div id="section1" class="section">
            <div class="flex">
                <div class="xs-flex-end sm-flex-center">
                    <h1>Cześć! Jestem typem.</h1>
                    <h2>Grafik freelancer</h2>
                    <p>Projektant interaktywny po szkole artystycznej. Na co dzień pracuję z projektami dla internetu. Uwielbiam budować kompleksowe doświadczenia projektowe, które poprawiają codzienne życie użytkownika.</p>
                    <p class="visible-lg">
                        Mało Ci? 
                         <a href="o-mnie" class="btn btn-primary">O mnie<span></span></a>
                         <a href="portfolio" class="btn btn-primary">Portfolio<span></span></a>
                        <!--<a id="menuToogleButton2" href="#" class="btn btn-primary">
                            Otwórz menu<span></span>
                        </a>-->
                    </p>
                </div>
            </div>
        </div>
        <div id="contact" class="section text-center container">
            <?php if(!empty($emailSent)): ?>
                <h3>Wysłane</h3>
                <div class="alert alert-success text-center"><?php echo $config->get('messages.success'); ?></div>
            <?php else: ?>
                <h3>Napisz</h3>
                <?php if(!empty($hasError)): ?>
                    <div class="alert alert-danger text-center"><?php echo $config->get('messages.error'); ?></div>
                <?php endif; ?>
                <form action="<?php echo $_SERVER['REQUEST_URI']; ?>" enctype="application/x-www-form-urlencoded" id="contact-form" method="POST">
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

            <script type="text/javascript" src="assets/contact-form/contact-form.js"></script>
            <script type="text/javascript">
                new ContactForm('#contact-form');
            </script>

        </div>        

        <?php include (BASE_PATH.'assets/copyright.php'); ?>

    </body>
</html>