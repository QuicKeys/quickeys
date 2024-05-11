import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import LogoutButton from './LogOutButton';


function Navigation() {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="bg-gradient-to-b from-BGMain to-transparent h-[100px]">
        <div className={`Navigation ${toggle ? 'bg-BGMain nm:bg-transparent' : ''}`}>
          <button className="w-[80px] nm:hidden">
            <img className="h-[25px]" onClick={toggleNav} src="/src/assets/icons/ICON - Hamburger.png" alt="Hamburger Collapse"/>
          </button>
          <NavLink to="/"> <img className="transition-all w-[75px]" src="/src/assets/QuicKeys LOGOMARK [MAIN].svg"/> </NavLink>
          <div className="hidden nm:block">
            <NavLink className="Navigation-Text" to="/"> Home </NavLink>
            <NavLink className="Navigation-Text" to="/Build"> Build </NavLink>
            <NavLink className="Navigation-Text" to="/Shop"> Shop </NavLink>
            <NavLink className="Navigation-Text" to="/About"> About </NavLink>
            <NavLink className="Navigation-Text" to="/Contact-Us"> Contact Us </NavLink>
          </div>
          <div className="flex gap-[20px]">
            <NavLink to="/Cart"> <img className="Nav-Icon opacity-50 hover:opacity-100" src="/src/assets/icons/NAV - Cart.png" alt="Cart"/> </NavLink>
            <NavLink to="/Log-In"> <img className="Nav-Icon opacity-50 hover:opacity-100" src="/src/assets/icons/NAV - User.png" alt="Login"/> </NavLink>
            {/* <NavLink to="/Profile"> <img className="Nav-Icon opacity-50 hover:opacity-100" src="/src/assets/icons/NAV - User.png" alt="Profile"/> </NavLink> */}
            {/* <NavLink to="/Log-In" onClick={LogoutButton}>LOGOUT</NavLink> */}
          </div>
        </div>
        {toggle && (
          <div className="flex flex-col nm:hidden bg-BGMain pb-[20px] shadow-2xl">
            <NavLink className="Navigation-Text py-[7px]" to="/"> Home </NavLink>
            <NavLink className="Navigation-Text py-[7px]" to="/Build"> Build </NavLink>
            <NavLink className="Navigation-Text py-[7px]" to="/Shop"> Shop </NavLink>
            <NavLink className="Navigation-Text py-[7px]" to="/About"> About </NavLink>
            <NavLink className="Navigation-Text py-[7px]" to="/Contact-Us"> Contact Us </NavLink>
          </div>
        )}
        <div className={`Navigation-Overlay transition-all duration-500 ${toggle ? 'opacity-1 backdrop-blur-sm' : 'opacity-0 pointer-events-none'}`} onClick={toggleNav}/>
      </div>
    </>
  )
}

export default Navigation