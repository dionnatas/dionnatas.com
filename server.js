const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou outro serviço de e-mail
  auth: {
    user: 'maldmais@gmail.com',
    pass: 'Penha3793'
  }
});

// Endpoint para enviar e-mail
app.post('/api/enviar', (req, res) => {
  const { nome, email, telefone, msg } = req.body;

  const mailOptions = {
    from: 'maldmais@gmail.com',
    to: 'dionnatas@dionnatas.com',
    subject: 'Você recebeu um novo contato através do seu site',
    html: `
      <h1>Detalhes do Contato</h1>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Mensagem:</strong> ${msg}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return res.status(500).send('Erro ao enviar e-mail');
    }
    console.log('E-mail enviado:', info.response);
    res.status(200).send('E-mail enviado com sucesso');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 