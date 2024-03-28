import React from 'react'
import Logo from './Logo'

const Navigation = () => {
  return (
    <>
        <div className='flex w-100 items-center justify-between px-[2%]'>
            <Logo />
            <div className='flex'>
                <h1 className='px-10 bg-red-300'>Build</h1>
                <h1 className='px-10 bg-red-300'>Shop</h1>
                <h1 className='px-10 bg-red-300'>About</h1>
                <h1 className='px-10 bg-red-300'>Contact Us</h1>
            </div>
            <h1>
                Login
            </h1>
            <Logo />
        </div>
    </>    
  )
}

export default Navigation