// main.jsx
// import { createRoot } from 'react-dom/client'

// Update your import to this
import React, { useState, StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

/*root.render(
  <>
    <h1>Hello World!</h1>
    <h1>Hi Again</h1>
  </>  
)
*/

