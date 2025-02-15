import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  Stack,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BugReportIcon from '@mui/icons-material/BugReport';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const skills = [
    { 
      name: 'Frontend',
      icon: <CodeIcon />,
      technologies: ['React', 'TypeScript']
    },
    { 
      name: 'Mobile',
      icon: <CodeIcon />,
      technologies: ['Java/Android Native', 'Kotlin', 'Jetpack Compose']
    },
    { 
      name: 'Backend',
      icon: <CodeIcon />,
      technologies: ['Node.js', 'Microserviços', 'AWS Lambda']
    },
    { 
      name: 'Arquitetura',
      icon: <StorageIcon />,
      technologies: ['Microserviços', 'Escalabilidade', 'AWS']
    },
    { 
      name: 'Database',
      icon: <StorageIcon />,
      technologies: ['SQL', 'NoSQL', 'Redis']
    },
    { 
      name: 'DevOps',
      icon: <StorageIcon />,
      technologies: ['Docker', 'AWS Lambda']
    },
    { 
      name: 'Integrações',
      icon: <StorageIcon />,
      technologies: ['APIs', 'Sistemas de Pagamento']
    }
  ];

  const experiences = [
    {
      title: 'TechLead',
      company: 'Payface',
      period: 'Dez/2023 - Presente',
      description: 'Liderança técnica no desenvolvimento de soluções inovadoras com foco em reconhecimento facial e sistemas de pagamento.',
    },
    {
      title: 'Desenvolvedor de Software',
      company: 'Payface',
      period: 'Mai/2023 - Abr/2024',
      description: 'Desenvolvimento de aplicações de reconhecimento facial e SDKs para integração com sistemas de pagamento.',
    },
    {
      title: 'Desenvolvedor de Software',
      company: 'SKYTEF',
      period: 'Out/2020 - Mai/2023',
      description: 'Desenvolvimento de aplicações Android para Smart POS e integração com sistemas de pagamento.',
    },
  ];

  return (
    <Box sx={{ pt: { xs: 4, md: 8 }, pb: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Box
                component="img"
                src="/images/Dionn_Proff.jpg"
                alt="Dionnatas"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=Dionnatas&size=400&background=2563eb&color=fff`;
                }}
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(0deg) scale(1.02)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: isMobile ? 20 : -20,
                  backgroundColor: 'primary.main',
                  color: 'white',
                  py: 2,
                  px: 3,
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(37, 99, 235, 0.2)',
                  zIndex: 1,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Disponível para Projetos
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(45deg, #2563eb 30%, #10b981 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Olá! 👋
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
              Sou TechLead & Desenvolvedor Full Stack
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Especializado em desenvolvimento de soluções inovadoras, com foco em arquiteturas escaláveis e microserviços.
              Experiência sólida em desenvolvimento mobile e cloud computing, atualmente liderando projetos na Payface.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                href="mailto:dionnatas@dionnatas.com"
                startIcon={<EmailIcon />}
                sx={{ borderRadius: '12px' }}
              >
                Contato
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/cv"
                sx={{ borderRadius: '12px' }}
              >
                Ver Currículo
              </Button>
            </Stack>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Habilidades
          </Typography>
          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box sx={{ color: 'primary.main', mb: 1 }}>{skill.icon}</Box>
                  <Typography variant="body1" align="center" gutterBottom>
                    {skill.name}
                  </Typography>
                  <Typography variant="caption" align="center" color="text.secondary">
                    {skill.technologies.join(' • ')}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
            Experiência
          </Typography>
          <Grid container spacing={3}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={4} key={index}>
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
                    <Typography variant="h6" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {exp.period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
            Vamos Conversar?
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
            Estou disponível para novos projetos e oportunidades
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <IconButton
              aria-label="LinkedIn"
              href="https://linkedin.com/in/dionnatas"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#0A66C2',
                backgroundColor: '#fff',
                border: '2px solid #0A66C2',
                borderRadius: '8px',
                padding: '8px',
                width: '48px',
                height: '48px',
                '&:hover': {
                  backgroundColor: '#0A66C2',
                  color: '#fff',
                },
              }}
            >
              <LinkedInIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
            <Button
              variant="contained"
              href="mailto:dionnatas@dionnatas.com"
              startIcon={<EmailIcon />}
              sx={{ 
                borderRadius: '8px',
                padding: '12px 24px',
                height: '48px',
                backgroundColor: '#2563eb',
                '&:hover': {
                  backgroundColor: '#1d4ed8',
                },
              }}
            >
              dionnatas@dionnatas.com
            </Button>
            <Button
              variant="outlined"
              href="tel:11 9 8624 7663"
              startIcon={<PhoneIcon />}
              sx={{ 
                borderRadius: '8px',
                padding: '12px 24px',
                height: '48px',
                borderColor: '#2563eb',
                color: '#2563eb',
                '&:hover': {
                  borderColor: '#1d4ed8',
                  backgroundColor: 'rgba(37, 99, 235, 0.04)',
                },
              }}
            >
              11 9 8624 7663
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
