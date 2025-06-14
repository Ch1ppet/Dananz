import React from "react";
import { Link } from "react-router-dom";
import LogoImg from '../../public/images/Main/header/logo.svg';

const Logo = ({ section }) => {
    return (
        <Link to="/">
            <img className={`${section}__logo logo`} src={LogoImg} alt="logotype" />
        </Link>
    );
};

export default Logo;