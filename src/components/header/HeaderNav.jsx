import React from "react";
import HeaderLogo from '../../ui/logotype/header/HeaderLogo.jsx';
import HeaderBtn from '../../ui/buttons/VioletBtn.jsx';
import HeaderNavBar from "../../ui/navbars/header/HeaderNavBar.jsx";

const HeaderNav = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <HeaderLogo />
                <HeaderNavBar />
                <HeaderBtn text="Contact Us"/>
            </div>
        </header>
    );
};

export default HeaderNav;