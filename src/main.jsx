import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Cto from './components/Cto/Cto.jsx'
import Footer from './components/Footer/Footer.jsx'
import BentoGridServices from './components/BentoGridServices/BentoGridServices.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <h1>404 Page not Found</h1>
  },
  {
    path: "/aboutUs",
    element: <Cto></Cto>
  },
  {
    path: "/service",
    element: <BentoGridServices></BentoGridServices>
  }, {
    path: "/contactUs",
    element: <Footer></Footer>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
