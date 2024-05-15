import React, { useEffect } from 'react'
import { Reveal } from '../Reveal'
import transition from '../Transition'
import { NavLink } from 'react-router-dom';

function Successful() {
    return (
        <>
        <div className="flex justify-center items-center w-full h-[90vh]">
            <Reveal>
                <p className="text-[50px] font-medium">Thank you for placing an <span className="text-QKGreen">order</span>!</p>
                <NavLink className="flex justify-center mt-[25px]" to="/">
                    <div className="group text-center w-[250px] px-[50px] py-[10px] border-[3px] border-QKGreen hover:bg-QKGreen rounded-full transition-all duration-200">
                        <p className="text-[16px] sm:text-[18px] text-QKGreen group-hover:text-BGMain">
                            Back to Home
                        </p>
                    </div>
                </NavLink>
            </Reveal>
        </div>
        </>
    )
}

export default transition(Successful);