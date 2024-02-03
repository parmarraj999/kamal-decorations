import React from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <div className='nav-container'>
            <div className='nav'>

                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/about' className='nav-link'>About</NavLink>
                <div className='logo-container'>
                    <img src='../image/logo.png' />
                </div>
                <NavLink to='/gallary' className='nav-link'>Gallary</NavLink>
                <NavLink to='/contact' className='nav-link'>Contact</NavLink>
                <div className='menu-icon'>
                  <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    )
}

export default Nav