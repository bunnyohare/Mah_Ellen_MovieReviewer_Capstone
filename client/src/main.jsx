import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoginValidate } from './LoginContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginValidate>
      <App />
    </LoginValidate>
  </React.StrictMode>
)
