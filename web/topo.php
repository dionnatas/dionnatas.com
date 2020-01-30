<!--Menu topo-->
<?php 
	$pagina = basename($_SERVER['PHP_SELF']);
?>
  	<div class="container-fluid">
		<div class="row teste">
			<div class="col-md-2"></div>
			<div class="col-xs-3 col-md-3">
				<h1>
					<font color="#337ab7" size="+5">
						<b>Dionnatas.com</b>
					</font>
				</h1>
				<p>
					<small>
						<font color="#E0FFFF" size="3" face="Courier">Systems Analyst and Development</font>
					</small>
				</p>
			</div>
			<div class="col-xs-3 col-md-2"></div>
			<div class="col-xs-4 col-md-3"><br><br><br><br>
				<ul class="nav nav-pills nav-justified">
					<li role="presentation" class="<?php if ($pagina == "index.php") echo 'active';?>"><a href="index.php">&nbsp;&nbsp;Home&nbsp;&nbsp;</a></li>
					<li role="presentation" class="<?php if ($pagina == "cv.php") echo 'active';?>"><a href="cv.php">&nbsp;&nbsp;&nbsp;&nbsp;CV&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
					<li role="presentation" class="<?php if ($pagina == "contato.php") echo 'active';?>"><a href="contato.php">Contato</a></li>
				</ul>
			</div>
		</div>
		<hr id="principal_hr">
	</div>
<!--Fim menu topo-->