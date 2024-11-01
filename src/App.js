// src/App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Nouvelle page
import ContactPage from './pages/ContactPage'; // Nouvelle page
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        {/* Header affiché sur toutes les pages */}
        <Header />
        <Routes>
          {/* Route principale pour la page d'accueil */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> {/* Nouvelle route */}
          <Route path="/contact" element={<ContactPage />} /> {/* Nouvelle route */}
        </Routes>
        {/* Footer affiché sur toutes les pages */}
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
