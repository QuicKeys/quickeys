import React from 'react'
import { NavLink } from 'react-router-dom'

function UserNav() {
    const userId = localStorage.getItem('userId')

    return (
        <div>
            {userId ? (
                <NavLink to='/Profile'>
                    <img className='Nav-Icon opacity-50 hover:opacity-100' src='/src/assets/icons/NAV - User.png' alt='Profile'/>
                </NavLink>
            ) : (
                <NavLink to='/Log-In'>
                    <img className='Nav-Icon opacity-50 hover:opacity-100' src='/src/assets/icons/NAV - User.png' alt='Login'/>
                </NavLink>
            )}
        </div>
    )
}

export default UserNav