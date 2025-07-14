import {
  createBrowserRouter
} from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Covarage from "../Pages/Coverage/Covarage";
import PrivetRoute from "../Route/PrivetRoute";
import SendParcel from "../Pages/SendParcel/SendParcel";


export const router = createBrowserRouter([
  {
    path: "/",
   Component : Layout,

   children : [
    {
        index : true,
        Component : Home

    },
    {
       path : "coverage",
        Component : Covarage

    },
    {
       path : "sendparcel",
        element : <PrivetRoute><SendParcel></SendParcel></PrivetRoute> 

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