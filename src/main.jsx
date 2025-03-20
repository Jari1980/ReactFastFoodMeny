import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import Meny from './components/Meny'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NavbarComp />
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/meny' element={<Meny />} />
  </Routes>
  </BrowserRouter>
)
