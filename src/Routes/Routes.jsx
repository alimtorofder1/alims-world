import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Signin from "../pages/SignIn/Signin";
import SignUp from "../pages/SignUp/SignUp";
import AllProducts from "../pages/AllProducts/AllProducts";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signin',
            element:<Signin></Signin>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
           path:'/allproducts',
           element:<AllProducts></AllProducts>
        },
        {
          path: '/humidifier',
          
        }
      ]
    },
  ]);