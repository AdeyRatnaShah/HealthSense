import { createContext, useState } from 'react'
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
import CKD from './components/predict/CKD'
import Diabetes from './components/predict/Diabetes'
import SignUp from './components/pages/SignUp'
import Profile from './components/pages/Profile';
// import ScrollToTop from './components/layouts/ScrollTop';

export const LoggedInContext = createContext();
export const UserInfoContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element:isLoggedIn ? <Home /> : <Login/> },
        { path: "about", element:isLoggedIn ? <About />:<Login/> },
        { path: "contact", element: isLoggedIn ? <Contact /> :<Login/>},
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "services", element: isLoggedIn ? <Services />:<Login/> },
        { path: "predict/ckd", element:isLoggedIn ? <CKD />:<Login/>  },
        { path: "predict/diabetes", element:isLoggedIn ? <Diabetes />:<Login/>  },
        {
          path : 'profile',
          element : <Profile/>,
        }
      ],
    },
  ]);

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
        <RouterProvider router={router} />
      </UserInfoContext.Provider>
    </LoggedInContext.Provider>
  )
}

export default App
