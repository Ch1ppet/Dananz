import React from "react";
import { NavLink } from "react-router-dom";
import HeaderNavbarItem from "../../ui/list-items/header/HeaderNavbarItem.jsx"

const HeaderNavBar = () => {

    return (
        <nav className="nav header__nav">
            <ul className="header__nav-list">
                <HeaderNavbarItem link="/" text="Home"/>
                <HeaderNavbarItem link="/about" text="About Us"/>
                <HeaderNavbarItem link="/services" text="Services"/>
                <HeaderNavbarItem link="/ourteams" text="Our Teams"/>
            </ul>
        </nav>
    );
};

export default HeaderNavBar;