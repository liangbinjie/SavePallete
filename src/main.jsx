import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { PalleteContextProvider } from './context/PalleteContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PalleteContextProvider>
    <App />
 </PalleteContextProvider>
)
