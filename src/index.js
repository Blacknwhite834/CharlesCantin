import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Switch, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Gallerie from './pages/gallerie/gallerie';
import Tarifs from './pages/tarifs/tarifs';
import Contact from './pages/contact/contact';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallerie" element={<Gallerie />} />
      <Route path="/tarifs" element={<Tarifs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
