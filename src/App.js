// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Header affiché sur toutes les pages */}
      <Header />

      <Routes>
        {/* Route principale pour la page d'accueil */}
        <Route path="/" element={<HomePage />} />
        {/* D'autres routes pour les différentes pages */}
      </Routes>

      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </Router>
  );
}

export default App;
