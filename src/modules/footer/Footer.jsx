import React from "react";
import FooterRight from "../../components/footer/FooterRight.jsx";
import FooterLeft from "../../components/footer/FooterLeft.jsx";
import "../../styles/footer/footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <FooterLeft />
                <FooterRight />
            </div>
        </footer>
    );
};

export default Footer;