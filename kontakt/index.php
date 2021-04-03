<?php
    define('BASE_PATH', '../');
    include (BASE_PATH.'assets/reset_var.php');
    $menu5_active = 1;
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Kontakt - Typ od grafiki</title>
    <?php include (BASE_PATH.'assets/head.php'); ?>
    <link rel="stylesheet" type="text/css" href="<?php echo BASE_PATH ?>css/contact.css">
</head>

<body>
    <?php include (BASE_PATH.'assets/top.php'); ?>
    <div id="contact" class="section container">
        <form role="form" id="contactForm" class="contact-form" data-toggle="validator" class="shake">
            <div class="text-center">
                <p>
                    <picture>
                        <source type="image/webp" srcset="../images/typodgrafiki-profilowe.webp">
                        <source type="image/jpeg" srcset="../images/typodgrafiki-profilowe.jpg">
                        <img class="img-profile img-responsive" src="../images/typodgrafiki-profilowe.jpg" width="110" height="110" alt="Typodgrafiki - Zdjęcie profilowe" title="Typodgrafiki - Zdjęcie profilowe">
                    </picture>
                </p>
                <h1 class="title">
                    Kontakt
                </h1>
                <p class="subtitle">
                    Dziękuję za poświęcenie mi czasu. Jak mogę Ci dzisiaj pomóc?
                </p>
            </div>
            <div class="row form-content">
                <div class="col-xs-12 col-md-6 form-group">
                    <label for="name">Imię i nazwisko</label>
                    <div class="help-block with-errors"></div>
                    <input type="text" id="name" class="form-control" placeholder="Jan Kowalski" required
                        data-error="Wpisz swoje imię">
                </div>
                <div class="col-xs-12 col-md-6 form-group">
                    <label for="email">Email</label>
                    <div class="help-block with-errors"></div>
                    <input type="email" class="email form-control" id="email" placeholder="email@domain.com" required
                        data-error="Wpisz swój email">

                </div>
                <div class="col-xs-12 col-md-12 form-group">
                    <label for="message">Wiadomość</label>
                    <div class="help-block with-errors"></div>
                    <textarea id="message" rows="7" placeholder="Cześć, piszę do Ciebie..." class="form-control"
                        required data-error="Wpisz treść wiadomości"></textarea>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" id="submit" class="btn btn-success">Wyślij wiadomość<span></span></button>
                <div id="msgSubmit"></div>
            </div>
        </form>
    </div>
    <?php include (BASE_PATH.'assets/copyright.php'); ?>
    <script type="text/javascript" src="js/form-validator.min.js"></script>
    <script type="text/javascript" src="js/contact-form-script.js"></script>
</body>

</html>