import React from "react";
import { Link } from "react-router-dom";

const HeaderBtn = ({ text }) => {
    return (
        <button className="header__btn btn">
            <Link to="contactus">
                {text}
            </Link>
        </button>
    );
};

export default HeaderBtn;