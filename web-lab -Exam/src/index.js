import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import customeRouter from './routing';
import './style.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <RouterProvider router={customeRouter} />

);