import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './layouts/App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './Services/i18n.js'
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Router>
      <App />
    </Router>

    // </React.StrictMode>
)
