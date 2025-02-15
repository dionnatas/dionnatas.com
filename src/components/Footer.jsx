import React from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
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
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Dionnatas. Todos os direitos reservados.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              aria-label="LinkedIn"
              href="https://linkedin.com/in/dionnatas"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
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