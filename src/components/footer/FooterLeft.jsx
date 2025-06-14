import React from "react";
import Logo from "../../ui/logo/Logo.jsx";
import UnderTitleText from "../../ui/texts/common/UnderTitleText.jsx"

const FooterLeft = () => {
    return (
        <div className="footer__left">
            <Logo section="footer" />
            <UnderTitleText section="footer" children="One of the best furniture agency."/>
        </div>
    );
};

export default FooterLeft;