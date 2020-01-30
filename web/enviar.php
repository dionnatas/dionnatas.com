<?php
//Variáveis

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
//$opcoes = $_POST['escolhas'];
$mensagem = $_POST['msg'];
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');

// Compo E-mail
  $arquivo = "
  <style type='text/css'>
  body {
  margin:0px;
  font-family:Verdane;
  font-size:12px;
  color: #666666;
  }
  a{
  color: #666666;
  text-decoration: none;
  }
  a:hover {
  color: #FF0000;
  text-decoration: none;
  }
  </style>
    <html>
        <table width='510' border='1' cellpadding='1' cellspacing='1' bgcolor='#CCCCCC'>
            <tr>
              <td>
  <tr>
                 <td width='500'>Nome:$nome</td>
                </tr>
                <tr>
                  <td width='320'>E-mail:<b>$email</b></td>
     </tr>
      <tr>
                  <td width='320'>Telefone:<b>$telefone</b></td>
                </tr>

                <tr>
                  <td width='320'>Mensagem:$mensagem</td>
                </tr>
            </td>
          </tr>  
          <tr>
            <td>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></td>
          </tr>
        </table>
    </html>
  ";
  
  //enviar
  
  // emails para quem será enviado o formulário
  $emailenviar = "dionnatas@dionnatas.com";
  $destino = $emailenviar;
  $assunto = "Voce recebeu um novo contato atraves do seu site";

  // É necessário indicar que o formato do e-mail é html
  $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= 'From: Dionnatas.com <contato@dionnatas.com>';
  //$headers .= "Bcc: $EmailPadrao\r\n";
  
  $enviaremail = mail($destino, $assunto, $arquivo, $headers);
  if($enviaremail){
	$mgm = "E-MAIL ENVIADO COM SUCESSO! <br> O link será enviado para o e-mail fornecido no formulário";
	?>
        <div class="container-fluid" >
			<div class="row">
				<div class="col-md-4">
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-xs-4 col-md-1">
							<blockquote>
								&nbsp;
							</blockquote>
						</div>
						<div class="col-xs-4 col-md-4">
							<blockquote>
								<h1><B><font size="+4">E-mail enviado com sucesso!</font></B></h1>
							</blockquote>
						</div>
						<div class="col-xs-4 col-md-1">
							<blockquote>
								&nbsp;
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</div>
		<meta http-equiv='refresh' content='3;URL=index.php'>
    <?php
  } else {
	$mgm = "ERRO AO ENVIAR E-MAIL!";
		?>
        <div class="container-fluid" >
			<div class="row">
				<div class="col-md-4">
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-xs-4 col-md-1">
							<blockquote>
								&nbsp;
							</blockquote>
						</div>
						<div class="col-xs-4 col-md-4">
							<blockquote>
								<h1><B><font size="+4">Haaa, houve uma falha no envio!</font></h1>
								<br><h2>Por favor, tente entrar em contato atraves do telefone.</h2></B>
							</blockquote>
						</div>
						<div class="col-xs-4 col-md-1">
							<blockquote>
								&nbsp;
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</div>
		<meta http-equiv='refresh' content='6;URL=contato.php'>
    <?php
  }
?>