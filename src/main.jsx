import React from 'react';
import { createRoot } from 'react-dom/client';
import Accueil from './pages/Accueil';
import Logement from './pages/Logement'
import About from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/PageError';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Création de la racine
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/A_Propos" element={<About />} />
        <Route path="/location/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);