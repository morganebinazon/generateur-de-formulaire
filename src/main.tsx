import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Assure-toi que tu as un fichier de styles CSS
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
