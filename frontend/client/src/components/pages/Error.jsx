import React from 'react'
import { Reveal } from '../Reveal'
import { NavLink } from 'react-router-dom'

import transition from '../Transition'

function Error() {
    return (
      <>
        <div className="flex justify-center items-center w-screen h-[90vh]  p-[15px]">
          <div className="mt-[-5%]">
            <p className="text-QKGreen text-[140px] sm:text-[250px] text-center font-semibold transition-all duration-300">404</p>
            <p className="text-[22.5px] sm:text-[40px] text-center font-semibold mt-[-35px] sm:mt-[-75px] transition-all duration-300">OOPS! PAGE NOT FOUND</p>
            <p className="text-[18px] sm:text-[20px] text-center transition-all duration-300">You’re not supposed to be here. C'mon, let's get you back on track!</p>
            <NavLink className="flex justify-center mt-[25px]" to="/">
                <div className="group text-center w-[250px] px-[50px] py-[10px] border-[3px] border-QKGreen hover:bg-QKGreen rounded-full transition-all duration-200">
                    <p className="text-[18px] sm:text-[20px] text-QKGreen group-hover:text-BGMain">
                        Back to Home
                    </p>
                </div>
            </NavLink>
          </div>
        </div>
      </>
    )
  }

export default transition(Error);