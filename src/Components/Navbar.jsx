import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='flex justify-between sm:px-20 px-5 bg-[#FFF7ED] py-10' >
        <Link to={"/"}>
      <h1 className=' text-2xl sm:text-4xl font-extrabold' >#VANLIFE</h1>
        </Link>
      <ul className='flex sm:gap-10 gap-2 items-center text-[#4D4D4D] text-md sm:text-xl font-normal' >
        <li><NavLink to={"/host"}>Host</NavLink></li>
        <li><NavLink to={"/about"} >About</NavLink> </li>
        <li> <NavLink to={"/vans"} >Vans</NavLink></li>
      </ul>
    </header>
  )
}

export default Navbar
