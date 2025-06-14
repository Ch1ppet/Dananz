import React from "react";
import { Link } from "react-router-dom";

const DefaultBtn = ({ text, link, section }) => {
    return (
        <button className={`${section}__btn btn`}>
            <Link to={link}>
                {text}
            </Link>
        </button>
    );
};

export default DefaultBtn;