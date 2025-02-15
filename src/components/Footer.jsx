import React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2, 
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2 }} 
          justifyContent="center" 
          alignItems="center"
        >
          <Typography 
            variant="caption" 
            color="text.secondary"
            sx={{ textAlign: 'center' }} 
          >
            &copy; {new Date().getFullYear()} Dionnatas. Todos os direitos reservados.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/dionnatas/"
              target="_blank"
              rel="noopener noreferrer"
              size="small" 
            >
              <LinkedInIcon fontSize="small" /> 
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;