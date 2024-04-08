import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
    return (
      <>
        <div className="Footer">
            <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between ">
                <img className="min-w-[200px] h-[35px]" src="./src/assets/QuicKeys WORDMARK [Trademark].svg"/>
                <div className="flex flex-col py-[10px] sm:flex-row lg:py-[0px]">
                    <NavLink className="Footer-Text text-center py-[5px]" to="/"> Home </NavLink>
                    <NavLink className="Footer-Text text-center py-[5px]" to="/Build"> Build </NavLink>
                    <NavLink className="Footer-Text text-center py-[5px]" to="/Shop"> Shop </NavLink>
                    <NavLink className="Footer-Text text-center py-[5px]" to="/About"> About </NavLink>
                    <NavLink className="Footer-Text text-center py-[5px]" to="/Contact-Us"> Contact Us </NavLink>
                </div>
                <p className="text-center opacity-50 pt-[5px] lg:w-[215px] lg:pt-[0px] lg:text-left">Built with passion for keyboard enthusiasts worldwide.</p>
            </div>
            <div className="h-[1px] w-full bg-[#D4D1CD] opacity-50 my-[20px]"/>
            <div className="flex h-full justify-between gap-[25px]">
                <p className="flex items-center opacity-50">© 2024 QuicKeys. All rights reserved.</p>
                <div className="flex gap-[12px] min-w-[120px]">
                    <a href="https://github.com/QuicKeys"><img className="Icon" src="./src/assets/icons/ICON - Github.png"></img></a>
                    <a href="https://discord.gg/TW2QBe3pWR"><img className="Icon" src="./src/assets/icons/ICON - Discord.png"></img></a>
                    <a><img className="Icon" src="./src/assets/icons/ICON - Facebook.png"></img></a>
                    <a><img className="Icon" src="./src/assets/icons/ICON - X.png"></img></a>
                </div>
            </div>
        </div>
      </>
    )
  }

export default Footer