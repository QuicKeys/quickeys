import React from 'react'
import { NavLink } from "react-router-dom";
import LogoutButton from './LogOutButton';


function Navigation() {
    return (
      <>
        <div className="bg-gradient-to-b from-BGMain to-transparent h-[100px]">
          <div className="Navigation">
            <NavLink to="/"> <img className="transition-all w-[75px]" src="./src/assets/QuicKeys LOGOMARK [Trademark].svg"/> </NavLink>
            <div className="hidden nm:block">
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/"> Home </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/Build"> Build </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/Shop"> Shop </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/About"> About </NavLink>
              <NavLink className="Navigation-Text opacity-50 hover:opacity-100" to="/Contact-Us"> Contact Us </NavLink>
            </div>
            <div className="flex gap-[20px]">
              <NavLink to="/Cart"> <img className="Nav-Icon opacity-50 hover:opacity-100" src="./src/assets/icons/NAV - Cart.png" alt="Cart"/> </NavLink>
              <NavLink to="/Log-In"> <img className="Nav-Icon opacity-50 hover:opacity-100" src="./src/assets/icons/NAV - User.png" alt="Login"/> </NavLink>
            </div>
          </div>
        </div>
      </>
    )
  }

export default Navigation