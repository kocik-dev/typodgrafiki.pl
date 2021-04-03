<header>
    <div id="logo" class="pull-left">
        <h2 class="hidden">Typodgrafiki - Designer & Front-end Developer</h2>
        <a href="/">
            <img src="<?php echo BASE_PATH ?>images/logo-typodgrafiki.png" width="171" height="41"
                alt="Typodgrafiki - UI Designer & Front-end Developer"
                title="Typodgrafiki - UI Designer & Front-end Developer">
        </a>
    </div>

    <button id="menuToogleButton" class="navbar-toggle pull-right" type="button" data-toggle="collapse" data-target="#menuToogle" aria-controls="menuToogle" aria-expanded="false" aria-label="Menu navigation">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	</button>


    <?php
	if ($homepage == 1) {
	?>
    <a href="kontakt" id="topContactButton" class="btn btn-default pull-right">
        Napisz do mnie
        <span></span>
    </a>

    <?php } elseif ($menu5_active == 1) { ?>

    <a href="../" id="topContactButton" class="close pull-right"></a>

    <?php } elseif ($form_success == 1) { ?>

    <?php } else { ?>
    <a href="../kontakt" id="topContactButton" class="btn btn-default pull-right">
        Napisz do mnie
        <span></span>
    </a>
    <?php } ?>

    <div id="top"></div>
    <div  id="menuToogle" class="nav-menu menu-over text-center">
		<nav class="nav-menu">
			<div class="nav-animation">
                <h3 class="hidden">Poznaj UI Designera</h3>
				<?php
				if ($homepage == 1) {
				?>

					<a href="o-mnie"><span>T</span>ypek</a>
					<a href="portfolio">Portfolio</a>
					<a href="blog" class="disabled">Blog</a>
					<a href="kontakt">Na<span>p</span>isz</a>

				<?php } else { ?>

					<a href="../o-mnie"<?php if ($menu2_active == 1) { ?> class="active"<?php } ?>><span>T</span>ypek</a>
					<a href="../portfolio"<?php if ($menu3_active == 1) { ?> class="active"<?php } ?>>Portfolio</a>
					<a href="../blog" class="disabled"<?php if ($menu4_active == 1) { ?> class="active"<?php } ?>>Blog</a>
					<a href="../kontakt">Na<span>p</span>isz</a>

				<?php } ?>
			</div>
			<?php include ('social.php'); ?>
		</nav>
	</div>
</header>