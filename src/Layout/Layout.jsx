import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer'

function Layout() {
  return (
    <div>

          <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

    </div>
  )
}

export default Layout