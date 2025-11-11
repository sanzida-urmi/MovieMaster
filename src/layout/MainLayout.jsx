import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

function MainLayout() {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <Navbar></Navbar>
      <div className=' flex-grow'>
        <div className=' grid grid-cols-12'>
        <div className='col-span-1'></div>

        <div className='col-span-10 ' >
        <Outlet></Outlet>
      </div>

<div className='col-span-1'></div>

      </div>
      </div>
      <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  )
}

export default MainLayout
