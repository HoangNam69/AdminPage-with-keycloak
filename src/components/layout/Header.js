import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className='container header'>
            <Link to="/" className='header__logo'>Admin Page</Link>
            <Link to="/register" className='header__signup'>Sign Up</Link>
            <Link to="/login" className='header__login'>Login</Link>
        </div>
    );
}

export default Header;