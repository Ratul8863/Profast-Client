import React from 'react'
import logo from '../../../assets/logo.png'  
import { Link } from 'react-router'

function ProfastLogo() {
  return (
    <Link to={"/"}>
      <div className='flex items-center'>
        <img className='mb-4' src={logo} alt="" />
       
    </div>
    </Link>
  )
}

export default ProfastLogo