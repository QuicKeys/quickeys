import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiClient } from '../../utils/ApiClient';
import transition from '../Transition';

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

  // Confirm Password
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordActive, setConfirmPasswordActive] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  // Password Validation
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  // Submit Error Animation
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setPasswordMatchError(true);

      setClicked(true);

      setTimeout(() => {
        setClicked(false);
      }, 500);

      return;
    }
    else {
      setPasswordMatchError(false);
    }

    try {
      const response = await apiClient.post('accounts/signup/',
      {
        first_name: first,
        last_name: last,
        email: email,
        password: password,
      })
      navigate('/Log-In')
      console.log(response.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-full w-full py-[10%]">
        <div className="flex flex-col items-center w-full p-[15px] min-h-[520px]">

          <div className="flex justify-center text-[50px] font-bold py-[10px] text-center">CREATE ACCOUNT</div>

          {/* FIRST & LAST NAMEs */}
          <div className="flex flex-col justify-center items-center py-[5px] w-full gap-[10px] sm:flex-row">
            {/* FIRST NAME */}
            <div className="flex w-full max-w-[510px] sm:flex-row sm:max-w-[250px]">
              <div className="relative flex w-full">
                {/* First Name Input Box */}
                <input
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                  onFocus={() => {setFirstActive(true); setFirstFocused(true);}} onBlur={() => {setFirstActive(false); setFirstFocused(false);}}
                  className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-full 
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
            <div className="flex w-full max-w-[510px] sm:flex-row sm:max-w-[250px]">
              <div className="relative flex w-full">
                {/* Last Name Input Box */}
                <input
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                  onFocus={() => {setLastActive(true); setLastFocused(true);}} onBlur={() => {setLastActive(false); setLastFocused(false);}}
                  className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-full
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
          <div className="flex justify-center py-[5px] w-full">
            <div className="relative flex justify-center w-full max-w-[510px]">
              {/* Email Input Box */}
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => {setEmailActive(true); setEmailFocused(true);}} onBlur={() => {setEmailActive(false); setEmailFocused(false);}}
                className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none w-full 
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
          <div className="flex justify-center py-[5px] w-full">
            <div className="relative flex justify-center w-full max-w-[510px]">
              {/* Password Input Box */}
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => {setPasswordActive(true); setPasswordFocused(true);}} onBlur={() => {setPasswordActive(false); setPasswordFocused(false);}}
                className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none font-extrabold w-full 
                  ${(passwordFocused) && 'border-[#00FF8A]'}
                  ${(passwordMatchError && !passwordFocused) && 'border-[#FF005E]'}`}
              />
              {/* Text Animation */}
              <label
                className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                  ${(passwordActive || password) && 'text-xs transform translate-y-[-30%]'} 
                  ${(passwordFocused) && 'text-[#00FF8A]'}
                  ${(passwordMatchError) && 'text-[#FF005E]'}`}
              >
                Password
              </label>
            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="flex justify-center py-[5px] w-full">
            <div className="relative flex justify-center w-full max-w-[510px]">
              {/* Confirm Password Input Box */}
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => {setConfirmPasswordActive(true); setConfirmPasswordFocused(true);}} onBlur={() => {setConfirmPasswordActive(false); setConfirmPasswordFocused(false);}}
                className={`flex transition-all duration-200 bg-transparent border-2 px-3 pt-4 pb-1 outline-none font-extrabold w-full
                  ${(confirmPasswordFocused) && 'border-[#00FF8A]'}
                  ${(passwordMatchError && !confirmPasswordFocused) && 'border-[#FF005E]'}`}
              />
              {/* Text Animation */}
              <label
                className={`absolute transition-all duration-200 top-[12px] left-[12px] z-[-1]
                  ${(confirmPasswordActive || confirmPassword) && 'text-xs transform translate-y-[-30%]'} 
                  ${(confirmPasswordFocused) && 'text-[#00FF8A]'}
                  ${(passwordMatchError) && 'text-[#FF005E]'}`}
              >
                Confirm Password
              </label>
            </div>
          </div>

          {/* Error message for password mismatch */}
          {passwordMatchError && (
            <div className="flex justify-center py-[2px] text-[#FF005E] text-sm" style={clicked ? { animation: 'shake 0.3s ease-in-out' } : {}}>
              Passwords do not match!
            </div>
          )}

          <div className="flex justify-center pt-[20px] pb-[5px]">
            <button
              className="transition-all duration-100 h-[50px] w-[225px] bg-[#00FF8A] hover:bg-[#00ff88d6] text-[#252525] text-[20px] font-medium rounded-full"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>

          <div className="flex justify-center text-sm py-[2px]">
            Already have an account?
            <span className="pl-1"><NavLink to="/Log-In" className="text-[#00FF8A] hover:underline">Log In</NavLink></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default transition(SignUp);