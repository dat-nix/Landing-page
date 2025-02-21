import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MenuItems } from './MenuItems';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"><img src={process.env.PUBLIC_URL + '/logo.png'} alt='RMIT Kendo club logo'></img></h1>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((items, index) => (
                    <li key={index}>
                        <a className={items.cName} href={items.url}>
                            {items.title}     
                        </a>
                    </li>
                ))}    
            </ul>
        </nav>
    );
}

export default Navbar;
