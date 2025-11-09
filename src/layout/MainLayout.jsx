import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

function MainLayout() {
  return (
    <div className='my-0'>
      <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
      <div className='my-10'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      </div>
      <ToastContainer />
    </div>
  )
}

export default MainLayout
