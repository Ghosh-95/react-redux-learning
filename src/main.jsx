import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from '../store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <main>
    <App store={store} />
  </main>
);