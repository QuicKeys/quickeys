import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function LogIn() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  // BOX ANIMATIONS
  // Password
  const [passwordActive, setPasswordActive] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  // Email
  const [emailActive, setEmailActive] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const handleLogIn = () => {
    // DUMMY
    if (credentials.username === 'user' && credentials.password === '123') {
      // JWT AUTHENTICATION
      console.log('Username:', credentials.username);
      console.log('Password:', credentials.password);
      navigate('/');
    }
    else {
      console.log('Invalid credentials');
    }
  }

  return (
    
    <>
      <div className="flex justify-center items-center h-[100vh] w-[100vw]">
        <div>

          <div className="flex justify-center text-[50px] font-bold py-[10px]">Log In</div>

          {/* EMAIL */}
          <div className="flex justify-center py-[5px]">
            <div className="relative">
              {/* Email Input Box */}
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                onFocus={() => {setEmailActive(true); setEmailFocused(true);}} onBlur={() => {setEmailActive(false); setEmailFocused(false);}}
                className={`transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-[400px] 
                  ${(emailFocused) && 'border-[#00FF8A]'}`}
              />
              {/* Text Animation */}
              <label
                className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                  ${(emailActive || credentials.username) && 'text-xs transform translate-y-[-30%]'} 
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
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                onFocus={() => {setPasswordActive(true); setPasswordFocused(true);}} onBlur={() => {setPasswordActive(false); setPasswordFocused(false);}}
                className={`transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-[400px] font-extrabold
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

          <div className="flex justify-end text-xs">
            <span className="text-[#00FF8A] hover:underline">Forgot password?</span>
          </div>

          <div className="flex justify-center pt-[20px]">
            <button onClick={handleLogIn} className="transition-all duration-100 h-[50px] w-[225px] 
              bg-[#00FF8A] hover:bg-[#00ff88d6] text-[#252525] 
              text-[20px] font-medium rounded-full"> Sign In 
            </button>
          </div>

          <div className="flex justify-center text-xs py-[5px]">
            Don't have an account?
            <span className="pl-1"><Link to="/Sign-up" className="text-[#00FF8A] hover:underline">Sign Up </Link></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default LogIn