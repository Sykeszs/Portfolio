import './index.css'; // Make sure this matches your file's location
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'slick-carousel/slick/slick.css'; // Slick base styles
import 'slick-carousel/slick/slick-theme.css'; // Slick theme styles

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
