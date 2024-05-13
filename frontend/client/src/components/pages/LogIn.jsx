import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiClient, setAuthToken } from '../../utils/ApiClient';
import transition from '../Transition';


function LogIn() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  
  // BOX ANIMATIONS
  // Email
  const [emailActive, setEmailActive] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  // Password
  const [passwordActive, setPasswordActive] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault()

    try {
      const response = await apiClient.post('accounts/login/',
      {
        username: credentials.email,
        password: credentials.password
      },)
      
      const accessResponse = await apiClient.post('accounts/retrieve-access/')
      setAuthToken(accessResponse.data.access)
      navigate('/')
      console.log(response.data.message)
    } catch (error) {
      console.error("Login failed", error)
    }
  }

  return (
    
    <>
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex flex-col justify-center items-center w-screen h-screen p-[15px] min-h-[520px]">
          
          <div className="flex justify-center text-[50px] font-bold py-[10px] text-center">LOG IN</div>

          {/* EMAIL */}
          <div className="flex justify-center py-[5px] w-full">
            <div className="relative flex justify-center w-full max-w-[400px]">
              {/* Email Input Box */}
              <input
                type="text"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                onFocus={() => {setEmailActive(true); setEmailFocused(true);}} onBlur={() => {setEmailActive(false); setEmailFocused(false);}}
                className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-full
                  ${(emailFocused) && 'border-[#00FF8A]'}`}
              />
              {/* Text Animation */}
              <label
                className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                  ${(emailActive || credentials.email) && 'text-xs transform translate-y-[-30%]'} 
                  ${(emailFocused) && 'text-[#00FF8A]'}`}
              >
                Email
              </label>
            </div>
          </div>

          {/* PASSWORD */}
          <div className="flex justify-center py-[5px] w-full">
            <div className="relative flex justify-center w-full max-w-[400px]">
              {/* Password Input Box */}
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                onFocus={() => {setPasswordActive(true); setPasswordFocused(true);}} onBlur={() => {setPasswordActive(false); setPasswordFocused(false);}}
                className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-full font-extrabold
                  ${(passwordFocused) && 'border-[#00FF8A]'}`}
              />
              {/* Text Animation */}
              <label
                className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                  ${(passwordActive || credentials.password) && 'text-xs transform translate-y-[-30%]'} 
                  ${(passwordFocused) && 'text-[#00FF8A]'}`}
              >
                Password
              </label>
            </div>
          </div>

          <div className="flex justify-center text-sm py-[2px] w-full">
            <span className="text-[#00FF8A] flex justify-end w-full max-w-[400px] hover:underline">Forgot password?</span>
          </div>

          <div className="flex justify-center pt-[20px] pb-[5px]">
            <button onClick={handleLogIn} className="transition-all duration-100 h-[50px] w-[225px] 
              bg-[#00FF8A] hover:bg-[#00ff88d6] text-[#252525] 
              text-[20px] font-medium rounded-full"> Sign In 
            </button>
          </div>

          <div className="flex justify-center text-sm py-[2px]">
            Don't have an account?
            <span className="pl-1"><NavLink to="/Sign-Up" className="text-[#00FF8A] hover:underline">Sign Up</NavLink></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default transition(LogIn);