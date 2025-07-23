import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Clients from './Pages/Clients.jsx'
import Navbar from './Pages/Navbar.jsx'
import Projects from './Pages/Projects.jsx'
import Sidebar from './Pages/Sidebar.jsx'
import Skills from './Pages/Skills.jsx'
import About from './Pages/About.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>

    <Route path='/' element={<App/>}>

    <Route index element={<About/>}/>
    <Route path='/skills' element={<Skills/>}/>
    <Route path='/clients' element={<Clients/>}/>
    <Route path='/projects' element={<Projects/>}/>
    




    </Route>




  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
