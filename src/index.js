// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import PokemonDetalle from './PokemonDetalle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemonDetalle/:nombre" element={<PokemonDetalle />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
