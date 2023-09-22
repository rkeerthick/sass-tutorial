import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './component/Index';
import './scss/style.scss'
import './scss/globals/_boilerplate.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

