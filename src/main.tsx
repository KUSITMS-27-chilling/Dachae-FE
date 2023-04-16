import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter,Route } from 'react-router-dom';
import Login from './Login';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
)