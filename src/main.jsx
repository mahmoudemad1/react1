import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import"./Component/Home/Home.css"
import"./Component/About/About.css"
import"./Component/Contact/Contact.css"
import"./Component/Portfolio/Portfolio.jsx"
import"./Component/Portfolio/Portfolio.css"
import"./Component/Notfound/Notfound.jsx"
import"./Component/Footer/Footer.css"
import"../node_modules/bootstrap/dist/css/bootstrap.css"
import"../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "@fortawesome/fontawesome-free/css/all.min.css";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
