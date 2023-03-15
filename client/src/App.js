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
import Travel from './components/Travel';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './components/Weather';
import LandingPage from './pages/LandingPage';
import Stay from './components/Stay';
import RoutePaths from './components/RoutePaths';
import SomethingWentWrong from './components/SomethingWentWrong';
import SearchResult from './components/SearchResult';
// import city from './city';




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);


// export const router = createBrowserRouter([
//     {
//         path : '/',
//         element: <HomePage/>,
//         children:[
//           {
//             path: "/city",
//             element: <Navbar/>,
//           }
//         ],  
//     },
//     ])
//         {
//         path: '/register',
//         element : <Register/>
//     },
//     {
//         path: '/password',
//         element : <Password/>
//     },
//     {
//         path: '/profile',
//         element : <Profile/>
//     },
//     {
//         path: '/recovery',
//         element : <Recovery/>
//     },
//     {
//         path: '/reset',
//         element : <Reset/>
//     },
//     {
//         path: '/username',
//         element : <Username/>
//     },
//     {
//         path: '*',
//         element: <PageNotFound/>
//     },
// ])

export default function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} >
              <Route index element = {<HomePage/>}/>
              <Route path='/travel' element={<Travel/>} />
              <Route path='/hotel' element={<Stay/>} />
              <Route path='/route' element={<RoutePaths/>} />
              <Route path='/error' element={<SomethingWentWrong/>} />
              <Route path='/search' element={<SearchResult/>} />

          </Route>
        </Routes>
        {/* <Footer/> */}
    </Router>
    </>
  )
}





