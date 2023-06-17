import React, { useState } from 'react';
import data from './navData';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isNav, setIsNav] = useState(false)

    const ontoggle = () => {
        setIsNav(!isNav)
    }
    return (
        <div className='navbar'>
            <p className='all-menu' onClick={ontoggle}>menu</p>
            <nav className={isNav ? 'on' : ''}>
                <ul>
                    {
                        data.map((item, index) => <li key={index}>
                            <Link to={item.path}>{item.title}</Link>
                            </li>)
                    }
                </ul>
                <p className='close' onClick={() => setIsNav(false)}>X</p>
            </nav>
        </div>
    );
};

export default NavBar;