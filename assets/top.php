<header>
	<div id="logo" class="pull-left">
		<a href="/"><img src="<?php echo BASE_PATH ?>images/logo.png" width="171" height="41" alt="Logo"></a>
	</div>
	<button id="menuToogleButton" class="navbar-toggle pull-right" type="button" data-toggle="collapse" data-target="#menuToogle" aria-controls="menuToogle" aria-expanded="false" aria-label="Menu navigation">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <small class="txt hidden">MENU</small>
	</button>
	<button id="topContactButton" class="btn btn-default pull-right" type="button">
		Przywitaj się
		<span></span>
	</button>
	<div id="top"></div>
	<div  id="menuToogle" class="nav-menu menu-over text-center">
		<nav class="nav-menu">
			<div class="nav-animation">
				<?php
				if ($homepage == 1) {
				?>

					<a href="o-mnie"><span>T</span>ypek</a>
					<a href="portfolio">Portfolio</a>
					<a href="blog" class="disabled">Blog</a>
					<a href="#contact">Na<span>p</span>isz</a>

				<?php } else { ?>
					
					<a href="../o-mnie"<?php if ($menu2_active == 1) { ?> class="active"<?php } ?>><span>T</span>ypek</a>
					<a href="../portfolio"<?php if ($menu3_active == 1) { ?> class="active"<?php } ?>>Portfolio</a>
					<a href="../blog" class="disabled"<?php if ($menu4_active == 1) { ?> class="active"<?php } ?>>Blog</a>
					<a href="../#contact">Na<span>p</span>isz</a>

				<?php } ?>
			</div>
			
		</nav>
	</div>
</header>