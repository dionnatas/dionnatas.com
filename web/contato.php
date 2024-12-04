	<?php
		require('tags.php');
		require('topo.php');
	?>
	<amp-auto-ads type="adsense" data-ad-client="ca-pub-3200144414894590">
	</amp-auto-ads>

	<div class="container-fluid">
		<div class="row">
		<div class="col-md-2"></div>
    	<div class="col-md-8">	
		<div class="container-fluid">
                    <h1><B><font size="+4">Dionnatas S. F. Filho</font></B></h1>
                </div>
			<div class="row">
			 	<div class="col-xs-6 col-md-3">
				<!--<h1><B><font size="+4">Dionnatas S. F. Filho</font></B></h1>-->
				<!--<h3 class="text-success">Dionnatas S. F. Filho</h3>-->
				<br><br>
				<p>R. Igarapé Água Azul, 173 Apt. 32C<br>
				St. Etelvina, São Paulo - SP</p>
				<br>
				<p>Tel: 11 2559 0855<br>
				Cel: 11 9 8624 7663</p>
				<br>
				<p>Email: <a href="mailto:dionnatas@dionnatas.com?Subject=Olá%20Dionnatas" target="_top">dionnatas@dionnatas.com</a><br>
				Site: <a href="http://dionnatas.com">dionnatas.com</a></p>
				<p>	
				<br>
					<a href="http://www.plus.google.com"><img src="images/plus.png"></a>
					<a href="http://www.twitter.com"><img src="images/twitter.png"><a/>
					<a href="https://www.facebook.com/"><img src="images/face.png"></a>
					<a href="https://www.linkedin.com/in/dionnatas"><img src="images/linkedin.png"></a>
				</p>
			  	</div>
				<div class="col-md-9">
					<br>
					<!--<p><h4 class="text-right">Estou ansioso pelo seu e-mail.</h4></p>-->
					<br>
					<form action="enviar.php" name="form_contato" method="post">
					  <div class="form-group">
						<input type="text" class="form-control" name="nome" placeholder="Nome">
					  </div>
					  <div class="form-group">
						<input type="email" class="form-control" name="email" placeholder="E-mail">
					  </div>
					  <div class="form-group">
						<input type="text" class="form-control" name="telefone" placeholder="Telefone">
					  </div>
					  <div class="form-group">
						<textarea class="form-control" name="msg" placeholder="Mensagem" rows="6"></textarea>
					  </div>
					  <input type="submit" class="btn btn-default pull-right" align="right" value="Enviar" />
					</form>
				</div>
			</div>	
		</div>
		<div class="col-md-2">

		</div>
	</div>
	</div>


<?php 
	require ('scripts.php');
	require ('rodape.php');
?>		