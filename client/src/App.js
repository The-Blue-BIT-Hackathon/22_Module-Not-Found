import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import Error from './components/Error';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Username from './components/Username';

// const router = createBrowserRouter([
//     {
//         path : '/',
//         element : <HomePage/>
        
//     },
//     {
//         path: '/register',
//         element : <Register></Register>
//     },
//     {
//         path: '/password',
//         element : <Password></Password>
//     },
//     {
//         path: '/profile',
//         element : <Profile></Profile>
//     },
//     {
//         path: '/recovery',
//         element : <Recovery></Recovery>
//     },
//     {
//         path: '/reset',
//         element : <Reset></Reset>
//     },
//     {
//         path: '/username',
//         element : <Username></Username>
//     },
//     {
//         path: '*',
//         element: <PageNotFound></PageNotFound>
//     },
// ])

export default function App() {
  return (
    <>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <Navbar/>
      <Outlet/>
      <Footer/>
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





