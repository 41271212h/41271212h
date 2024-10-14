import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, if you have this file
import App from './App'; // Import your App component once

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component here */}
  </React.StrictMode>,
  document.getElementById('root')
);
