import React from 'react'
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <>
        <div className="h-[100px] bg-gradient-to-b from-[#252525] to-transparent">
          <div className="Navigation">
            <NavLink to="/"> <img className="Logomark" src="./src/assets/LOGOMARK.png"/> </NavLink>
            <div>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/"> Home </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/Build"> Build </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/Shop"> Shop </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/About"> About </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/Contact-Us"> Contact Us </NavLink>
            </div>
            <div className="flex gap-[20px]">
              <NavLink to="/Log-In"> <img className="w-[30px] opacity-50  hover:opacity-100" src="./src/assets/icons/NAV - User.png" alt="Login"/> </NavLink>
              <NavLink to="/Cart" className="relative group">
                <div className="absolute top-[7.5px] text-[15px] w-full opacity-50 group-hover:opacity-100"><span className="flex justify-center items-center">0</span></div>
                <img className="w-[30px] opacity-50 hover:opacity-100" src="./src/assets/icons/NAV - Cart.png" alt="Cart"/>
              </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }

export default Navigation