import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

function MainLayout() {
  return (
    <div>
      <div className='flex flex-col min-h-screen'>

<div className='sticky top-0 z-50'>
        <Navbar></Navbar>
      </div>

      <div className=' flex-grow'>
        <div className=' grid grid-cols-12'>
        <div className='col-span-1'></div>

        <div className='col-span-10 pt-10' >
        <Outlet></Outlet>
      </div>

<div className='col-span-1'></div>

      </div>
      </div>


      <div className='bg-base-300 mt-10'>
        <div className='w-10/12 mx-auto'>
        <Footer></Footer>
      </div>

      </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default MainLayout
