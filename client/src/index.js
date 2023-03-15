import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
import { router } from './App.js';
import { RouterProvider } from 'react-router-dom';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <RouterProvider router={router}/>
    <App/>
)