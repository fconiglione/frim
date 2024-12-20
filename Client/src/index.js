import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/normalize.css";
import "./assets/styles/App.css";
import './assets/styles/index.css';
import App from './config/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
