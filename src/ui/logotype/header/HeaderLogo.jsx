import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../../public/images/header/logo.svg';

const HeaderLogo = () => {
    return (
        <Link to="/">
            <img className="header__logo" src={Logo} alt="logotype" />
        </Link>
    );
};

export default HeaderLogo;