import React from 'react'
import logo from '../../../assets/logo.png'  

function ProfastLogo() {
  return (
    <div className='flex items-center'>
        <img className='mb-4' src={logo} alt="" />
        <p className='text-3xl -ml-4 font-extrabold'>ProFast</p>
    </div>
  )
}

export default ProfastLogo