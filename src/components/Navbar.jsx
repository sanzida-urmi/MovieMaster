import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import logo from "../assets/logo.png";

function Navbar() {
      const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

      useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


      const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }

    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
     <li><NavLink to="/allmovies">All Movies</NavLink></li></>

  return (
    <div className="navbar  bg-base-100 shadow-sm border-1 border-red-800 rounded-2xl mb-20">
  <div className="navbar-start navv">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img className='h-20' src={logo} alt="" />
    <a className="btn btn-ghost text-xl">movieMaster</a>
  </div>
  <div className="navbar-center navv hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    
    
    <button className="btn btn-outline btn-error mr-3" >
        <NavLink to="/login">Login</NavLink>
    </button>

    <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
  </div>
</div>
  )
}

export default Navbar
