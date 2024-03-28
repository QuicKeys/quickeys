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
            <NavLink to="/Log-In"> Log In </NavLink>
          </div>
        </div>
      </>
    )
  }

export default Navigation