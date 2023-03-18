import { Footer, Navbar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default NotFound
