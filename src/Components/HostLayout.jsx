import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import "../App.jsx";

const HostLayout = () => {
  return (
    <>
      <nav className='mx-10 py-5'>
        <ul className='flex sm:gap-20' >
            <li><NavLink to="/host" end>Dashboard</NavLink></li>
            <li><NavLink to="/host/income">Income</NavLink></li>
            <li><NavLink to="/host/vans">Vans</NavLink></li>
            <li><NavLink to="/host/reviews">Reviews</NavLink></li>

        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default HostLayout
