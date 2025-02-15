import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Paper,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';

const CV = () => {
  const skills = [
    { name: 'React', icon: <CodeIcon />, category: 'Frontend' },
    { name: 'TypeScript', icon: <CodeIcon />, category: 'Frontend' },
    { name: 'Kotlin', icon: <CodeIcon />, category: 'Mobile' },
    { name: 'Java/Android Native', icon: <CodeIcon />, category: 'Mobile' },
    { name: 'Jetpack Compose', icon: <CodeIcon />, category: 'Mobile' },
    { name: 'Node.js', icon: <CodeIcon />, category: 'Backend' },
    { name: 'Microserviços', icon: <CodeIcon />, category: 'Architecture' },
    { name: 'AWS Lambda', icon: <StorageIcon />, category: 'Cloud' },
    { name: 'Escalabilidade', icon: <StorageIcon />, category: 'Architecture' },
    { name: 'SQL', icon: <StorageIcon />, category: 'Database' },
    { name: 'NoSQL', icon: <StorageIcon />, category: 'Database' },
    { name: 'Docker', icon: <StorageIcon />, category: 'DevOps' },
    { name: 'Redis', icon: <StorageIcon />, category: 'Database' },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Cabeçalho */}
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
          Currículo
        </Typography>

        {/* Informações Pessoais */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Informações Pessoais
          </Typography>
          <Paper 
            elevation={0}
            sx={{ 
              p: 3,
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PersonIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Nome Completo
                    </Typography>
                    <Typography variant="body1">
                      Dionnatas Santa fe Filho
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CakeIcon color="primary" />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Data de Nascimento
                    </Typography>
                    <Typography variant="body1">
                      26/05/1985
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Educação */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Formação Acadêmica
          </Typography>
          <Timeline position="right">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      Análise e Desenvolvimento de Sistemas
                    </Typography>
                    <Typography color="text.secondary">
                      Universidade Anhembi Morumbi
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Concluído em Jun/2016
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Card>
                  <CardContent>
                    <Typography variant="h6">
                      Técnico em Informática
                    </Typography>
                    <Typography color="text.secondary">
                      Senac São Paulo
                    </Typography>
                    <Typography variant="body2" color="primary">
                      2012 - 2013
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Formação técnica em Tecnologia da Informação
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        {/* Experiência */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Experiência Profissional
          </Typography>
          <Timeline position="right">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      TechLead
                    </Typography>
                    <Typography color="text.secondary">
                      Payface
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Dez/2023 - Presente
                    </Typography>
                    <Typography variant="body2">
                      • Liderança técnica no desenvolvimento de soluções inovadoras
                      <br />
                      • Desenvolvimento de aplicações de reconhecimento facial
                      <br />
                      • Implementação de sistemas em SmartPOS
                      <br />
                      • Desenvolvimento de SDKs e bibliotecas para integração de pagamentos
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      Desenvolvedor de Software
                    </Typography>
                    <Typography color="text.secondary">
                      Payface
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Mai/2023 - Abr/2024
                    </Typography>
                    <Typography variant="body2">
                      • Pesquisa e desenvolvimento de aplicações para SmartPOS
                      <br />
                      • Implementação de sistemas de reconhecimento facial em dispositivos móveis
                      <br />
                      • Desenvolvimento de SDKs para integração de sistemas de pagamentos
                      <br />
                      • Análise de funcionalidades e oportunidades no segmento de pagamentos
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      Desenvolvedor de Software
                    </Typography>
                    <Typography color="text.secondary">
                      SKYTEF
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Out/2020 - Mai/2023
                    </Typography>
                    <Typography variant="body2">
                      • Desenvolvimento de aplicações Android para Smart POS
                      <br />
                      • Integração com sistemas de pagamentos (TEF, POS e APIs)
                      <br />
                      • Desenvolvimento de gateways com persistência e replicação
                      <br />
                      • Implementação de sistema MDM para gerenciamento remoto de dispositivos
                      <br />
                      • Desenvolvimento backend para aplicações de retaguarda
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      Analista de Sistemas e Integrações Pleno
                    </Typography>
                    <Typography color="text.secondary">
                      PDVend
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Mar/2019 - Abr/2020
                    </Typography>
                    <Typography variant="body2">
                      • Planejamento e gestão de integrações com parceiros
                      <br />
                      • Desenvolvimento e manutenção de integrações
                      <br />
                      • Gestão de relacionamento com fornecedores de software
                      <br />
                      • Implementação de soluções fiscais (NF-e, NFC-e e SAT)
                      <br />
                      • Diagnóstico e resolução de problemas de integração
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="h6">
                      Analista de Monitoração e Incidentes - TI
                    </Typography>
                    <Typography color="text.secondary">
                      Teleperformance Brasil
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Mai/2013 - Set/2018
                    </Typography>
                    <Typography variant="body2">
                      • Gestão de ambiente de datacenter
                      <br />
                      • Monitoramento de servidores e sistemas (MVS-JES2, Z/OS)
                      <br />
                      • Administração de redes e infraestrutura
                      <br />
                      • Gestão de rotinas de backup e CPD
                      <br />
                      • Suporte a plataformas de serviços (DAC, URA, Rede)
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Card>
                  <CardContent>
                    <Typography variant="h6">
                      Promotor Líder
                    </Typography>
                    <Typography color="text.secondary">
                      Unilever
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      Abr/2010 - Jan/2013
                    </Typography>
                    <Typography variant="body2">
                      • Gestão de equipe de promotores
                      <br />
                      • Negociação com gerentes e compradores
                      <br />
                      • Implementação de estratégias de merchandising
                      <br />
                      • Montagem de pontos extras
                      <br />
                      • Gestão de campanhas promocionais
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>

        {/* Habilidades */}
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            Habilidades Técnicas
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Frontend & Mobile
              </Typography>
              <Stack spacing={1}>
                {skills
                  .filter(skill => ['Frontend', 'Mobile'].includes(skill.category))
                  .map((skill, index) => (
                    <Chip
                      key={index}
                      icon={skill.icon}
                      label={skill.name}
                      variant="outlined"
                      sx={{
                        borderRadius: '16px',
                        '&:hover': {
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          borderColor: 'primary.main',
                        },
                      }}
                    />
                  ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Backend & Arquitetura
              </Typography>
              <Stack spacing={1}>
                {skills
                  .filter(skill => ['Backend', 'Architecture', 'Cloud'].includes(skill.category))
                  .map((skill, index) => (
                    <Chip
                      key={index}
                      icon={skill.icon}
                      label={skill.name}
                      variant="outlined"
                      sx={{
                        borderRadius: '16px',
                        '&:hover': {
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          borderColor: 'primary.main',
                        },
                      }}
                    />
                  ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" color="primary" gutterBottom>
                Database & DevOps
              </Typography>
              <Stack spacing={1}>
                {skills
                  .filter(skill => ['Database', 'DevOps'].includes(skill.category))
                  .map((skill, index) => (
                    <Chip
                      key={index}
                      icon={skill.icon}
                      label={skill.name}
                      variant="outlined"
                      sx={{
                        borderRadius: '16px',
                        '&:hover': {
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          borderColor: 'primary.main',
                        },
                      }}
                    />
                  ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CV;
