<?php 
    define('BASE_PATH', '../')
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Typ od grafiki - Portfolio (Geo Somatic)</title>
        <?php include (BASE_PATH.'assets/head.php'); ?>
        <link rel="stylesheet" type="text/css" href="<?php echo BASE_PATH ?>css/portfolio/portfolio.css">
        <style type="text/css">
            .description
            {
                background-color: #1f1e23;
            }

            .bg-dark
            {
                background-color: #212121;
            }

            @media (max-width: 899px) {
                .description .container
                {
                    text-align: left;
                    padding:  0 14%;
                }
            }

            @media (min-width: 900px) {
                .bg-dark
                {
                    padding-bottom: 110px;
                }
            }
        </style>
    </head>
    <body>
        <?php include (BASE_PATH.'assets/top-portfolio.php'); ?>
        <div id="portfolio-show" class="clearfix bg-white portfolio text-center">
            <div class="bg-dark">
                <img class="img-responsive visible-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/font1_01.jpg" width="1900" height="1139" alt="GS1">
                <img class="img-responsive hidden-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/mobile/font1_01_xs.jpg" width="900" height="539" alt="GS1">
                <div class="description">
                    <div class="container text-center">
                        <h1 class="hidden">Geo Somatic</h1>
                        <p>Geo Somatic to krój pisma bezszeryfowy z zastosowaniem litery jednoelementowej .Inspiracją do powstania fontu była geometria ludzkiego układu krążenia. Połączenie różnorodnej geometryczności z liniami o jednakowej grubości. Dzięki temu krój pisma posiada charakterystyczne dla siebie elementy. Czcionka składa się z minuskuł a forma pozwala na instalację w systemie operacyjnym lub wykorzystanie na stronie internetowej.</p>
                    </div>
                </div>
                <img class="img-responsive visible-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/font1_02.jpg" width="1900" height="1346" alt="GS2">
                <img class="img-responsive visible-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/font1_03.jpg" width="1900" height="1222" alt="GS3">
                <img class="img-responsive visible-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/font1_04.jpg" width="1900" height="882" alt="GS4">
                <img class="img-responsive visible-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/font1_05.jpg" width="1900" height="1629" alt="GS5">
                <img class="img-responsive visible-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/font1_06.jpg" width="1900" height="636" alt="GS6">

                <img class="img-responsive hidden-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/mobile/font1_02_xs.jpg" width="900" height="637" alt="GS2">
                <img class="img-responsive hidden-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/mobile/font1_03_xs.jpg" width="900" height="578" alt="GS3">
                <img class="img-responsive hidden-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/mobile/font1_04_xs.jpg" width="900" height="417" alt="GS4">
                <img class="img-responsive hidden-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/mobile/font1_05_xs.jpg" width="900" height="771" alt="GS5">
                <img class="img-responsive hidden-md" src="<?php echo BASE_PATH ?>images/portfolio/geo-somatic/mobile/font1_06_xs.jpg" width="900" height="927" alt="GS6">
            </div>
            <div class="back-section">
                <a class="btn btn-primary" href="/portfolio#geo-somatic">Powrót<span></span></a>
           </div>
        </div>
    </body>
</html>