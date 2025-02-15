import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Stack,
  useTheme,
  useMediaQuery,
  Alert,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Por favor, preencha todos os campos obrigatórios.',
        severity: 'error'
      });
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.send(
        'service_3q36vhi', // Substitua pelo seu Service ID do EmailJS
        'template_yvh2d79', // Substitua pelo seu Template ID do EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Dionnatas',
          reply_to: formData.email,
        },
        '6H2yPPRpIAjMRpTof' // Substitua pela sua Public Key do EmailJS
      );

      setSnackbar({
        open: true,
        message: 'Mensagem enviada com sucesso! Retornarei em breve.',
        severity: 'success'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSnackbar({
        open: true,
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" />,
      title: 'Email',
      value: 'dionnatas@dionnatas.com',
      link: 'mailto:dionnatas@dionnatas.com',
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: 'Telefone',
      value: '11 9 8624 7663',
      link: 'tel:+5511986247663',
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/dionnatas',
      link: 'https://linkedin.com/in/dionnatas',
    },
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: 'Localização',
      value: 'São Paulo, SP',
      link: null,
    },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 800,
            mb: 4,
            background: 'linear-gradient(45deg, #2563eb 30%, #10b981 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Contato
        </Typography>

        <Grid container spacing={4}>
          {/* Informações de Contato */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Informações de Contato
            </Typography>
            <Grid container spacing={2}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent>
                      <Stack spacing={2} alignItems="center" textAlign="center">
                        <Box sx={{ color: 'primary.main' }}>{info.icon}</Box>
                        <Typography variant="h6">{info.title}</Typography>
                        {info.link ? (
                          <Typography
                            component="a"
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            sx={{
                              color: 'text.secondary',
                              textDecoration: 'none',
                              '&:hover': {
                                color: 'primary.main',
                              },
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography color="text.secondary">
                            {info.value}
                          </Typography>
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Formulário de Contato */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Envie uma Mensagem
            </Typography>
            <Card>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label="Nome"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      variant="outlined"
                      type="email"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Assunto"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Mensagem"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={loading}
                      sx={{
                        borderRadius: '12px',
                        py: 1.5,
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Enviar Mensagem'
                      )}
                    </Button>
                  </Stack>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
