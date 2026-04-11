import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider1 from './contexts/ContextProvider1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider1>
      <App />
    </ContextProvider1>
  </StrictMode>,
)
