import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId='405621159710-0hth002r3erdd01aqu8euqq59nik8ul7.apps.googleusercontent.com' >

    <App />
</GoogleOAuthProvider>
  </BrowserRouter>
  ,
)
