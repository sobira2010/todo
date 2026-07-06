import { createBrowserRouter } from "react-router";
// import App from "../App";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";



export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  
])