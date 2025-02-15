import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from './context/ThemeContext';
import getTheme from './theme/theme';
import Header from './components/Header';
import Home from './components/Home';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme as useCustomTheme } from './context/ThemeContext';

const ThemedApp = () => {
  const { darkMode } = useCustomTheme();
  const theme = getTheme(darkMode ? 'dark' : 'light');

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
        }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;