import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='Navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/soda'>Soda</NavLink>
            <NavLink to='/chips'>Chips</NavLink>
            <NavLink to='/snickers'>Snickers</NavLink>
        </nav>
    );
}


export default Navbar;