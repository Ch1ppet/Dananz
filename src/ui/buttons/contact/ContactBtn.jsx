import React from "react";
import { Link } from "react-router-dom";

const ContactBtn = ({ text, link }) => {
    return (
        <button className="contact__btn">
            <Link>
                Contact Us
            </Link>
        </button>
    );
};

export default ContactBtn;