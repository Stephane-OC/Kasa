import React from 'react';
import ReactDOM from 'react-dom';
import Accueil from './pages/Accueil';
import Logement from './pages/Logement'
import APropos from './pages/About';
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/A_Propos" element={<APropos/>} />
        <Route path="/location/:id" element={<Logement/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
