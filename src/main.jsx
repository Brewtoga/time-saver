import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Amplify } from 'aws-amplify'

// Try to import outputs, but don't fail if it doesn't exist
let outputs = {}
try {
  outputs = await import('../amplify_outputs.json')
  Amplify.configure(outputs.default || outputs)
} catch (error) {
  console.log('No Amplify backend configured')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
