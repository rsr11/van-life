import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans'

import Income from "./Pages/Host/Income";
import Dashboard from "./Pages/Host/Dashboard";


import "./server"
import VanDetail from './Pages/VanDetail'
import Layout from './Components/Layout'
import HostLayout from './Components/HostLayout'
import Reviews from './Pages/Host/Reviews'
import VansDetail from './Pages/Host/VansDetail'
import VanHost from './Pages/Host/VanHost'



function App() {

  return (
    <>
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Layout/> }>
       <Route index element={<Home/>}  />
       <Route path='about' element={<About/>}  />
       <Route path='vans' element={<Vans/>}  />
       <Route path='vans/:id' element={<VanDetail/>}  />
       <Route path='host' element={<HostLayout/>}>
         <Route index element={<Dashboard/>} />
         <Route path='income' element={<Income/>} />  
         <Route path='reviews' element={<Reviews/>}  />
         <Route path='vans' element={<VanHost />}  />
         <Route path='vans/:id' element={<VansDetail />}  />
       </Route>
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
