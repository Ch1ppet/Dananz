import React from "react";
import FooterInput from "../../ui/forms/FooterInput.jsx";
import FooterSocialMedia from "./FooterSocialMedia.jsx";


const FooterRight = () => {
    return (
        <div className="footer__right">
            <FooterInput />
            <FooterSocialMedia />
        </div>
    );
};

export default FooterRight;