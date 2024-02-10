import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import "../App.css";

const Layout = () => {
  return (
    <>
    <div className='site-wrapper'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default Layout
