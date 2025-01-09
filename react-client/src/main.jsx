import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
// for react-bootstrap
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
