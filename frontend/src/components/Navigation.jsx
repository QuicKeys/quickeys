import React from 'react'
import Logo from './Logo'

const Navigation = () => {
  return (
    <>
        <div className='flex w-100 items-center justify-between px-[2%]'>
            <Logo />
            <div className='flex'>
                <h1 className='px-10'>Build</h1>
                <h1 className='px-10'>Shop</h1>
                <h1 className='px-10'>About</h1>
                <h1 className='px-10'>Contact Us</h1>
            </div>
            <h1>
                Login
            </h1>
        </div>
    </>    
  )
}

export default Navigation