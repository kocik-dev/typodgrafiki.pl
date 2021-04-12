<?php
    define('BASE_PATH', '');
    include (BASE_PATH.'assets/reset_var.php');
    $homepage = 1;
    $menu1_active = 1;
?>
<!DOCTYPE html>
<html lang="pl-PL">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Typ od grafiki - UI Designer / Frontend Developer</title>
    <?php include (BASE_PATH.'assets/head.php'); ?>
    <link rel="stylesheet" type="text/css" href="css/homepage.css">
</head>

<body class="bg-white">
    <div id="animationLoad"></div>
    <script type="text/javascript" src="js/onload.js"></script>
    <?php include (BASE_PATH.'assets/top.php'); ?>
    <section id="section1" class="section text-center">
        <div class="container">
            <h1 class="title">
                UI Designer & <span class="nowrap">Front-end</span> Developer
            </h1>
            <p class="subtitle">
                Projektuję piękne rzeczy, koduję i lubię to co robię.
            </p>
            <p>
                <picture>
                    <source type="image/webp" srcset="images/typodgrafiki-profilowe.webp">
                    <source type="image/jpeg" srcset="images/typodgrafiki-profilowe.jpg">
                    <img class="img-profile img-responsive" src="images/typodgrafiki-profilowe.jpg" width="178" height="178" alt="Typodgrafiki - Zdjęcie profilowe" title="Typodgrafiki - Zdjęcie profilowe">
                </picture>
            </p>
        </div>
        <p>
            <picture>
                <source type="image/webp" srcset="images/ui-designer-skils.webp">
                <source type="image/png" srcset="images/ui-designer-skils.png">
                <img class="hidden-xs img-skills img-responsive" src="images/ui-designer-skils.png" width="1037" height="395" alt="Typodgrafiki - UI Designer & Front-end Developera" title="Typodgrafiki - UI & Front-end Developera">
            </picture>
            <picture>
                <source type="image/webp" srcset="images/ui-designer-skils-xs.webp">
                <source type="image/png" srcset="images/ui-designer-skils-xs.png">
                <img class="visible-xs img-skills img-responsive" src="images/ui-designer-skils-xs.png" width="750" height="515" alt="Typodgrafiki - UI & Front-end Developera" title="Typodgrafiki - UI & Front-end Developera">
            </picture>
        </p>
    </section>
    <section id="about-me" class="section text-center">
        <div class="container">
            <h3>Cześć! Jestem Grzegorz.</h3>
            <p>Moje urodziny datuje się na czas, w którym ludzie oglądali puste sklepowe półki, a Prypeć opustoszała
                zanim wybiła północ. Dziś jestem już dorosłym człowiekiem, lecz nadal wzruszam się patrząc na piękno
                przyrody, na to ile pięknych chwil omijamy na własne życzenie oraz uczę się, aby każdą z nich
                dostrzegać. Bo nauka to całe nasze życie, każdy dzień przynosi nam coś nowego, czasami wyzwania a czasem
                tylko nowe przemyślenia. Przemyślenia są bardzo ważne, bo to od nich zaczyna się każda idea. Idea na
                stworzenie czegoś, co da radość i szczęście, będzie cieszyć oko i dawać informację.</p>
            <p>Czas, jaki minął od lat 80-tych obfitował w wiele informacji, m.in. śmierć Freddiego, urodziny owcy Dolly
                czy rozwój internetu. I to ten ostatni punkt zajął moją ciekawość na dłużej. Droga ta zaprowadziła mnie
                na uczelnię artystyczną, gdzie oprócz projektowania zajmowaliśmy się również malarstwem, w którym
                realizuję się w zaciszu domowym. Projektowanie natomiast zajęło moją sferę zawodową, z czego jestem
                niezmiernie rad, ponieważ sprawia mi to ogromną radość. I tak nie możemy rozstać się po dziś dzień.
                Szczególnie bliskie mojemu sercu pozostaje projektowanie identyfikacji wizualnej wraz z Key Visual oraz
                stron internetowych zorientowanych na kreatywność i przejrzystą informację.</p>
        </div>
    </section>
    <section id="skils" class="section text-center">
        <div class="flex">
            <div class="thumbnail">
                <h2>Designer</h2>
                <picture>
                    <source type="image/webp" srcset="images/typodgrafiki-web-designer.webp">
                    <source type="image/png" srcset="images/typodgrafiki-web-designer.png">
                    <img class="img-responsive" src="images/typodgrafiki-web-designer.png" width="104" height="52" alt="Typodgrafiki - Web Designer, UI Designer" title="Typodgrafiki - Web Designer, UI Designer">
                </picture>

                <p>Cenię prostą strukturę treści, czyste wzorce projektowe i przemyślane interakcje.</p>
                <h4>Lubię projektować</h4>
                <p>UI, Web, Apps, Logo, Key Visual</p>
                <h4>Narzędzia projektowe</h4>
                <ul>
                    <li>Kartka i ołówek</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Indesign</li>
                    <li>Balsamiq Mockups</li>
                    <li>Invision</li>
                </ul>
            </div>
            <div class="thumbnail">
                <h2>Front-end Developer</h2>
                <picture>
                    <source type="image/webp" srcset="images/typodgrafiki-frontend-developer.webp">
                    <source type="image/png" srcset="images/typodgrafiki-frontend-developer.png">
                    <img class="img-responsive" src="images/typodgrafiki-frontend-developer.png" width="104" height="52" alt="Typodgrafiki - Front-end Developer" title="Typodgrafiki - Front-end Developer">
                </picture>
                <p>Lubię kodować rzeczy od podstaw i cieszyć się wprowadzaniem pomysłów w życie.</p>
                <h4>Używane technologie</h4>
                <p>HTML, CSS, jQuery, Less</p>
                <h4>Narzędzia developerskie</h4>
                <ul>
                    <li>Sublime Text</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>Codepen</li>
                    <li>Github</li>
                </ul>

            </div>
        </div>
    </section>
    <section id="last-projects" class="section text-center">
        <div class="container">
            <h3>Ostatnie projekty</h3>
            <p>Przyjrzyj się zrealizowanym przeze mnie projektom.</p>
            <div class="flex">
                <article class="thumbnail">
                    <picture>
                        <source type="image/webp" srcset="images/last-project/mountain-bag.webp">
                        <source type="image/jpeg" srcset="images/last-project/mountain-bag.jpg">
                        <img class="img-responsive" src="images/last-project/mountain-bag.jpg" alt="Projekt - Mountain Bag" title="Projekt - Mountain Bag" width="385" height="267">
                    </picture>
                    <div class="caption">
                        <h4>Mountain Bag</h4>
                        <a href="portfolio/mountain" class="btn btn-default">zobacz<span></span></a>
                    </div>
                </article>
                <article class="thumbnail">
                    <picture>
                        <source type="image/webp" srcset="images/last-project/bulki-bez-bibulki.webp">
                        <source type="image/jpeg" srcset="images/last-project/bulki-bez-bibulki.jpg">
                        <img class="img-responsive" src="images/last-project/bulki-bez-bibulki.jpg" alt="Projekt - Bułki bez bibułki" title="Projekt - Bułki bez bibułki" width="385" height="267">
                    </picture>
                    <div class="caption">
                        <h4>Bułki Bez Bibułki</h4>
                        <a href="portfolio/bulkibezbibulki" class="btn btn-default">zobacz<span></span></a>
                    </div>
                </article>
                <article class="thumbnail">
                    <picture>
                        <source type="image/webp" srcset="images/last-project/sincere-feelings.webp">
                        <source type="image/jpeg" srcset="images/last-project/sincere-feelings.jpg">
                        <img class="img-responsive" src="images/last-project/sincere-feelings.jpg" alt="Projekt - Sincere Feelings" title="Projekt - Sincere Feelings" width="385" height="267">
                    </picture>
                    <div class="caption">
                        <h4>Sincere Feelings</h4>
                        <a href="portfolio/sincere-feelings" class="btn btn-default">zobacz<span></span></a>
                    </div>
                </article>
            </div>
            <p>
                <a href="https://www.behance.net/grzegorz-kocik" target="_blank" class="btn btn-primary">Zobacz więcej na <b>Behance</b><span></span></a>
            </p>
        </div>
    </section>
    <?php include (BASE_PATH.'assets/start-project.php'); ?>
    <?php include (BASE_PATH.'assets/copyright.php'); ?>
</body>

</html>