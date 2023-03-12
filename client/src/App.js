import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import Error from './components/Error';

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export const Approuter = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        errorElement : <Error/>,
        children: [
          {
            path: '/',
            element : <HomePage />
        },
        {
          path: '/register',
          element : <div>Register Route</div>
      },
        ]
    },
    
])





