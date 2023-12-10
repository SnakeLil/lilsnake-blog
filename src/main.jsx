import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import router from '@/router/index.jsx'
import './main.scss'
import Cursor from '@/components/cursor/Cursor'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cursor/>
   <RouterProvider router={router} >

   </RouterProvider>
  </React.StrictMode>,
)
