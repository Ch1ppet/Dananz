import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavBar = () => {

    return (
        <nav className="nav header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-list-item">
                    <NavLink to="/"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Home
                    </NavLink>
                </li>
                <li className="header__nav-list-item">
                    <NavLink to="/about"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        About Us
                    </NavLink>
                </li>
                <li className="header__nav-list-item">
                    <NavLink to="/services"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Services
                    </NavLink>
                </li>
                <li className="header__nav-list-item">
                    <NavLink to="/ourteams"
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                        Our Teams
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavBar;