import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeEmailJS } from './services/emailService'
import { initPerformanceMonitoring } from './utils/performance'

// Initialize services
initializeEmailJS()
initPerformanceMonitoring()

// Create root and render app
const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
