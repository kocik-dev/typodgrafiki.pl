<header>
	<div id="logo" class="pull-left">
		<a href="/"><img src="<?php echo BASE_PATH ?>images/logo.png" width="171" height="41" alt="Logo"></a>
	</div>
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
</header>