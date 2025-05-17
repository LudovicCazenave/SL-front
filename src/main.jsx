import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { AuthProvider } from './contexts/AuthContext.jsx';


import App from './App/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
)
