<script async src="https://www.googletagmanager.com/gtag/js?id=UA-141388303-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-141388303-1');
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" /> 
<meta http-equiv="content-type" content="text/html; charset=utf-8" />

<meta name="author" content="Grzegorz Kocik" />
<meta name="description" content="Grafik freelancer, Front-end Developer, projektant stron intermetowych. Potrzebujesz webdesignera, który stworzy intuicyjną, ładną, oraz używalną stronę intentetową? Zapraszam do kontaktu." />
<meta name="keywords"  content="
front-end developer, kodowanie stron internetowych, html, css, strona internetowa, psd to html, grafik, web developer, web designer, typodgrafiki, Grzegorz Kocik, frontend developer, freelancer" />
<link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<link rel="stylesheet" type="text/css" href="<?php echo BASE_PATH ?>css/reset.css">
<link rel="stylesheet" type="text/css" href="<?php echo BASE_PATH ?>css/style.css">

<link href="https://fonts.googleapis.com/css?family=Poppins:400,600&amp;subset=latin-ext" rel="stylesheet">
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script type="text/javascript">
	function parallaxMenu(){
         var scrolled = $(window).scrollTop();
         $('#top').css('background-position', 'center '+ (scrolled*(-1))+'px');
    };

	jQuery(function($) {
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });

		$( "#menuToogleButton, #menuToogleButton2" ).click(function() {
		  	$('#menuToogleButton').toggleClass('open');
		  	$('body').toggleClass('open-menu');
		});

		$( "#menuToogle .nav-menu a[href='#contact']" ).click(function() {
		  	$('#menuToogleButton').toggleClass('open');
		  	$('body').toggleClass('open-menu');
		});
	});
</script>