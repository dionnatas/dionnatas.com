import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Tooltip,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme as useCustomTheme } from '../context/ThemeContext';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { darkMode, toggleTheme } = useCustomTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'Currículo' },
    { path: '/contato', label: 'Contato' },
  ];

  const renderMenuItems = () => (
    menuItems.map((item) => (
      <Button
        key={item.path}
        component={NavLink}
        to={item.path}
        onClick={() => isMobile && handleDrawerToggle()}
        sx={{
          color: 'text.primary',
          fontWeight: 500,
          px: 2,
          py: 1,
          minWidth: 'auto',
          '&:hover': {
            color: 'primary.main',
            backgroundColor: 'rgba(37, 99, 235, 0.04)',
          },
          '&.active': {
            color: 'primary.main',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '2px',
              backgroundColor: 'primary.main',
              borderRadius: '2px',
            },
          },
        }}
      >
        {item.label}
      </Button>
    ))
  );

  const drawer = (
    <Box sx={{ width: 240, pt: 2 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.path}
            component={NavLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              py: 1.5,
              px: 3,
              color: 'text.primary',
              '&.active': {
                color: 'primary.main',
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                borderRight: '3px solid',
                borderColor: 'primary.main',
              },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontWeight: 500,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar 
            disableGutters 
            sx={{ 
              minHeight: { xs: '56px', sm: '64px' },
              px: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant="h6"
              component={NavLink}
              to="/"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                textDecoration: 'none',
                flexGrow: 1,
                letterSpacing: '-0.5px',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
              }}
            >
              Dionnatas
            </Typography>

            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              {!isMobile && renderMenuItems()}
              
              <Tooltip title={darkMode ? "Modo claro" : "Modo escuro"}>
                <IconButton
                  onClick={toggleTheme}
                  color="inherit"
                  sx={{ 
                    ml: 1,
                    color: 'text.primary',
                  }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>

              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    ml: 1,
                    color: 'text.primary',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar sx={{ minHeight: { xs: '56px', sm: '64px' } }} />

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 240,
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;