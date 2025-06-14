import React from "react";
import Logo from '../../ui/logo/Logo.jsx';
import HeaderNavBar from "./HeaderNavBar.jsx";
import DefaultBtn from "../../ui/buttons/DefaultBtn.jsx";

const HeaderNav = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <Logo section="header"/>
                <HeaderNavBar />
                <DefaultBtn text="Contact Us" link="contactus" section="header"/>
            </div>
        </header>
    );
};

export default HeaderNav;