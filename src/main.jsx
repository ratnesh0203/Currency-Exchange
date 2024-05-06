import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Main_context_Provider from './context/Main_context_Provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main_context_Provider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Main_context_Provider>
  </React.StrictMode>,
)
