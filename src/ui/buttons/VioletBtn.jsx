import React from "react";
import { Link } from "react-router-dom";

const HeaderBtn = ({ text, link }) => {
    return (
        <button className="header__btn btn">
            <Link to={link}>
                {text}
            </Link>
        </button>
    );
};

export default HeaderBtn;