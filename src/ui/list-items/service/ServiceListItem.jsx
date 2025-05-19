import React from "react";
import { HashLink } from "react-router-hash-link";

const ServiceListItem = ({ link, number, text }) => {
    return (
        <li className="hashlinks-list__item">
            <div className="hashlinks-list__item-number">{number}</div>
            <HashLink to={link}>{text}</HashLink>
        </li>
    );
};

export default ServiceListItem;