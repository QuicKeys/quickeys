import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function SignUp() {
  // First Name
  const [first, setFirst] = useState('');
  const [firstActive, setFirstActive] = useState(false);
  const [firstFocused, setFirstFocused] = useState(false);

  // Last Name
  const [last, setLast] = useState('');
  const [lastActive, setLastActive] = useState(false);
  const [lastFocused, setLastFocused] = useState(false);

  // Email
  const [email, setEmail] = useState('');
  const [emailActive, setEmailActive] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  // Password
  const [password, setPassword] = useState('');
  const [passwordActive, setPasswordActive] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center h-[90vh] w-screen py-[250px]">
        <div>

          <div className="flex justify-center text-[50px] font-bold py-[10px]">CREATE ACCOUNT</div>

          {/* FIRST & LAST NAMEs */}
          <div className="flex justify-center gap-[10px]">
            {/* FIRST NAME */}
            <div className="flex py-[5px]">
              <div className="relative">
                {/* First Name Input Box */}
                <input
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  onFocus={() => {setFirstActive(true); setFirstFocused(true);}} onBlur={() => {setFirstActive(false); setFirstFocused(false);}}
                  className={`transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-[250px] 
                    ${(firstFocused) && 'border-[#00FF8A]'}`}
                />
                {/* Text Animation */}
                <label
                  className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                    ${(firstActive || first) && 'text-xs transform translate-y-[-30%]'} 
                    ${(firstFocused) && 'text-[#00FF8A]'}`}
                >
                  First Name
                </label>
              </div>
            </div>
            {/* LAST NAME */}
            <div className="flex py-[5px]">
              <div className="relative">
                {/* Last Name Input Box */}
                <input
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  onFocus={() => {setLastActive(true); setLastFocused(true);}} onBlur={() => {setLastActive(false); setLastFocused(false);}}
                  className={`transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-[250px] 
                    ${(lastFocused) && 'border-[#00FF8A]'}`}
                />
                {/* Text Animation */}
                <label
                  className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                    ${(lastActive || last) && 'text-xs transform translate-y-[-30%]'} 
                    ${(lastFocused) && 'text-[#00FF8A]'}`}
                >
                  Last Name
                </label>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex justify-center py-[5px]">
            <div className="relative">
              {/* Email Input Box */}
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => {setEmailActive(true); setEmailFocused(true);}} onBlur={() => {setEmailActive(false); setEmailFocused(false);}}
                className={`transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-[510px] 
                  ${(emailFocused) && 'border-[#00FF8A]'}`}
              />
              {/* Text Animation */}
              <label
                className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                  ${(emailActive || email) && 'text-xs transform translate-y-[-30%]'} 
                  ${(emailFocused) && 'text-[#00FF8A]'}`}
              >
                Email
              </label>
            </div>
          </div>

          {/* PASSWORD */}
          <div className="flex justify-center py-[5px]">
            <div className="relative">
              {/* Password Input Box */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => {setPasswordActive(true); setPasswordFocused(true);}} onBlur={() => {setPasswordActive(false); setPasswordFocused(false);}}
                className={`transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none font-extrabold w-[510px] 
                  ${(passwordFocused) && 'border-[#00FF8A]'}`}
              />
              {/* Text Animation */}
              <label
                className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                  ${(passwordActive || password) && 'text-xs transform translate-y-[-30%]'} 
                  ${(passwordFocused) && 'text-[#00FF8A]'}`}
              >
                Password
              </label>
            </div>
          </div>

          <div className="flex justify-center pt-[20px] pb-[5px]">
            <button className="transition-all duration-100 h-[50px] w-[225px] 
              bg-[#00FF8A] hover:bg-[#00ff88d6] text-[#252525] 
              text-[20px] font-medium rounded-full"> Sign Up 
            </button>
          </div>

          <div className="flex justify-center text-xs py-[2px]">
            Already have an account?
            <span className="pl-1"><NavLink to="/Log-In" className="text-[#00FF8A] hover:underline">Log In</NavLink></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default SignUp