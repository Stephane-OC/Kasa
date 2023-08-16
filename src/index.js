import React from 'react';
import { createRoot } from 'react-dom/client';
import Accueil from './pages/Accueil';
import Logement from './pages/Logement'
import About from './pages/About';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Error from './pages/PageError';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/A_Propos" element={<About/>} />
        <Route path="/location/:id" element={<Logement/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();