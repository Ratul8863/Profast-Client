import React from 'react'
import logo from '../../../assets/logo.png'  
import { Link } from 'react-router'

function ProfastLogo() {
  return (
    <Link to={"/"}>
      <div className='flex items-center'>
        <img className='mb-4' src={logo} alt="" />
        <p className='text-3xl -ml-4 font-extrabold'>ProFast</p>
    </div>
    </Link>
  )
}

export default ProfastLogo