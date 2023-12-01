import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import { BrowserRouter  } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <BrowserRouter>
   
    <Navbar/>
    <App />
    <Footer/>
   </BrowserRouter>
  </React.StrictMode>,
)
