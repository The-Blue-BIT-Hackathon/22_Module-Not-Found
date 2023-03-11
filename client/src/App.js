import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import Error from './components/Error';

const router = createBrowserRouter([
    {
        path : '/',
        element : <HomePage/>,
        errorElement : <Error/>
    },
    {
        path: '/register',
        element : <div>Register Route</div>
    },
])

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
