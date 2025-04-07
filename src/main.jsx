import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Color from './Color.jsx'
import Tip from './Tip.jsx'
import Subscribe from './Subscribe.jsx'
import File from './File.jsx'
import Dashboard from './Dashboard.jsx'
import Counter from './Counter.jsx'
import { BrowserRouter } from 'react-router-dom'
import Input from './Input.jsx'
import Date from './Date.jsx'
import Emoji from './Emoji.jsx'
import Otp from './Otp.jsx'
import Main from './components/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
  </StrictMode>,
  
)
