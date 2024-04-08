import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
    return (
      <>
        <div className="Footer">
            <div className="flex flex-col items-center w-full lg:flex-row lg:justify-between ">
                <img className="w-[200px] h-[35px]" src="./src/assets/WORDMARK TM.png"/>
                <div className="flex py-[10px] lg:py-[0px]">
                    <NavLink className="Footer-Text" to="/"> Home </NavLink>
                    <NavLink className="Footer-Text" to="/Build"> Build </NavLink>
                    <NavLink className="Footer-Text" to="/Shop"> Shop </NavLink>
                    <NavLink className="Footer-Text" to="/About"> About </NavLink>
                    <NavLink className="Footer-Text" to="/Contact-Us"> Contact Us </NavLink>
                </div>
                <div className="opacity-50 pt-[5px] lg:w-[215px] lg:pt-[0px]">Built with passion for keyboard enthusiasts worldwide.</div>
            </div>
            <div className="h-[1px] w-full bg-[#D4D1CD] opacity-50 my-[20px]"/>
            <div className="flex h-full justify-between">
                <div className="flex items-center opacity-50">© 2024 QuicKeys. All rights reserved.</div>
                <div className="flex gap-[12px]">
                    <a href="https://github.com/QuicKeys"><img className="Icon" src="./src/assets/icons/ICON - Github.png" alt="Github"></img></a>
                    <a href="https://discord.gg/TW2QBe3pWR"><img className="Icon" src="./src/assets/icons/ICON - Discord.png" alt="Discord"></img></a>
                    <a href="https://www.facebook.com/PeysBuk.qwe"><img className="Icon" src="./src/assets/icons/ICON - Facebook.png" alt="Facebook"></img></a>
                    <a href="https://twitter.com/elonmusk"><img className="Icon" src="./src/assets/icons/ICON - X.png" alt="X"></img></a>
                </div>
            </div>
        </div>
      </>
    )
  }

export default Footer