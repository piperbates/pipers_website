import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App/';
import reportWebVitals from './reportWebVitals';
import "./custom-font/stylesheet.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
