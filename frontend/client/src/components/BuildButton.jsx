import React from 'react'
import { NavLink } from 'react-router-dom'

function BuildButton() {
    return (
        <>
        <NavLink to="/Build">
            <div className="group text-center w-[100%] lg:w-[300px] px-[50px] py-[10px] border-[3px] border-QKGreen hover:bg-QKGreen rounded-full transition-all duration-200">
                <p className="text-[20px] lg:text-[25px] text-QKGreen group-hover:text-BGMain">
                    Start Building
                </p>
            </div>
        </NavLink>
        </>
    )
}

export default BuildButton