import {
  createBrowserRouter
} from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";


export const router = createBrowserRouter([
  {
    path: "/",
   Component : Layout,

   children : [
    {
        index : true,
        Component : Home

    }
   ]
  },

  {
    path: "/",
   Component : AuthLayout,

   children : [
    {
       path : 'Login',
        Component : Login

    },
    {
       path : 'register',
        Component : Register

    },
   ]
  },
]);