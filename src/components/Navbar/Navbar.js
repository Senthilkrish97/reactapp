import React from 'react'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <><div className='navbar'>
            <Link to='/'>Dashboard</Link> 
            <Link to='Login'>Login</Link>
        </div><Outlet /></>
    )
}

export default Navbar;