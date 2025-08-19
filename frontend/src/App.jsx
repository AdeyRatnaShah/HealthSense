import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/pages/Layout';
import About from './components/pages/About'
import Login from './components/pages/Login'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Services from './components/pages/Services'



function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "services",
        element: <Services/>,
      },
    ],
    path : '/',
    element :<Home/>,
    

  },
]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
