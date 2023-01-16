import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-loading-skeleton/dist/skeleton.css'
import AuthProvider from './AuthProvider/AuthProvider'
axios.defaults.baseURL=('http://localhost:5000')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
