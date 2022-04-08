import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {creatRoots} from 'react-dom/client';

// const container = document.getElementById('root');
// const root = createRoot(container);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);


reportWebVitals();
