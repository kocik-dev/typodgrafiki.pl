<?php 
  define('BASE_PATH', '');
  $homepage = 1;
  $menu1_active = 1;
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Typ od grafiki - Grafik freelancer / Front-end Developer</title>
        <?php include (BASE_PATH.'assets/head.php'); ?>
        <link rel="stylesheet" type="text/css" href="css/homepage.css">
    </head>
    <body class="bg-white">
        <?php include (BASE_PATH.'assets/top.php'); ?>
        <section id="section1" class="section text-center">
            <div class="container">
                <h1 class="title">
                    Designer & Front-end Developer
                </h1>
                <p class="subtitle">
                    Projektuję piękne rzeczy, koduję i lubię to co robię.
                </p>
                <p>
                    <img class="img-profile img-responsive" src="images/my_face.jpg">
                </p>
                <p>
                    <img class="img-skills img-responsive" src="images/img-ui.png">
                </p>
            </div>
        </section>
        <section id="about-me" class="section text-center">
            <div class="container">
                <h3>Cześć! Jestem Grzegorz.</h3>
                <p>Moje urodziny datuje się na czas, w którym ludzie oglądali puste sklepowe półki, a Prypeć opustoszała zanim wybiła północ. Dziś jestem już dorosłym człowiekiem, lecz nadal wzruszam się patrząc na piękno przyrody, na to ile pięknych chwil omijamy na własne życzenie oraz uczę się, aby każdą z nich dostrzegać. Bo nauka to całe nasze życie, każdy dzień przynosi nam coś nowego, czasami wyzwania a czasem tylko nowe przemyślenia. Przemyślenia są bardzo ważne, bo to od nich zaczyna się każda idea. Idea na stworzenie czegoś, co da radość i szczęście, będzie cieszyć oko i dawać informację.</p>
                <p>Czas, jaki minął od lat 80-tych obfitował w wiele informacji, m.in. śmierć Freddiego, urodziny owcy Dolly czy rozwój internetu. I to ten ostatni punkt zajął moją ciekawość na dłużej. Droga ta zaprowadziła mnie na uczelnię artystyczną, gdzie oprócz projektowania zajmowaliśmy się również malarstwem, w którym realizuję się w zaciszu domowym. Projektowanie natomiast zajęło moją sferę zawodową, z czego jestem niezmiernie rad, ponieważ sprawia mi to ogromną radość. I tak nie możemy rozstać się po dziś dzień. Szczególnie bliskie mojemu sercu pozostaje projektowanie identyfikacji wizualnej wraz z Key Visual oraz stron internetowych zorientowanych na kreatywność i przejrzystą informację.</p>
            </div>
        </section>
        <section id="skils" class="section text-center">
            <div class="flex">
                <div class="thumbnail">
                    <h2>Designer</h2>
                    <img class="img-responsive" src="images/img-designer.png">
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
                    <img class="img-responsive" src="images/img-frontend.png">
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
                <h3>Przykładowe projekty</h3>
                <p>Przyjrzyj się zrealizowanym przeze mnie projektom.</p>
                <div class="flex">
                    <div class="thumbnail">
                        <img class="img-responsive" src="images/last-project/bulkibezbibulki.jpg">
                    </div>
                    <div class="thumbnail">
                        <img class="img-responsive" src="images/last-project/bulkibezbibulki.jpg">
                    </div>
                    <div class="thumbnail">
                        <img class="img-responsive" src="images/last-project/bulkibezbibulki.jpg">
                    </div>
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