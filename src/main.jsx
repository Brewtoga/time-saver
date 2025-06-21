import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

// Configure Amplify only if outputs exist
async function configureAmplify() {
  try {
    const { default: outputs } = await import('../amplify_outputs.json')
    Amplify.configure(outputs)
    console.log('Amplify configured')
  } catch (error) {
    console.log('No Amplify backend configured')
  }
}

configureAmplify()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
