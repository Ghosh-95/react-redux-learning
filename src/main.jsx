import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

import store from '../store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <main>
    <Provider store={store}>
      <App />
    </Provider>
  </main>
);