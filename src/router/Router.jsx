import { createBrowserRouter } from "react-router";
// import App from "../App";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Layout from "../pages/layout/Layout";



export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  
  {
    path: "/home",
    element:<Home />,
  },
   
  {
    path:"/about",
    element:<About/>
  },


])