import React from "react";
import { Link } from "react-router-dom";

const HeaderNavBar = () => {
    return (
        <nav className="nav header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-list-item">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="header__nav-list-item">
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li className="header__nav-list-item">
                    <Link to="/services">
                        Services
                    </Link>
                </li>
                <li className="header__nav-list-item">
                    <Link to="/ourteams">
                        Our Teams
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderNavBar;