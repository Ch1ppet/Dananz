import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNavbarItem = ({ link, text }) => {
    return (
        <li className="header__nav-list-item">
            <NavLink to={link}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                {text}
            </NavLink>
        </li>
    );
};

export default HeaderNavbarItem;