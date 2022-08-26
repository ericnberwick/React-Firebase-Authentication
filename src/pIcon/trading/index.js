import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './TApp';
//import '../node_modules/bootstrap/dist/css/bootstrap.css'; //makes buttons look nice

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

