import React from "react";
import { Link } from "react-router-dom";

const FooterSMIcon = ({ img, alt, link }) => {
    return (
        <li className="footer__social-media-item">
            <Link to={link}>
                <img src={img} alt={alt} />
            </Link>
        </li>
    );
};

export default FooterSMIcon;