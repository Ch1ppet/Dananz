import React from "react";
import ServiceListItem from "../../ui/list-items/service/ServiceListItem.jsx";

const ServiceHashLinks = () => {
    return (
        <ul className="hashlinks-list">
            <ServiceListItem number="01" text="Interior Design" link="/services/#InteriorDesign"/>
            <ServiceListItem number="02" text="Consultant" link="/services/#Consultant"/>
            <ServiceListItem number="03" text="Construction Consultant" link="/services/#constructionConsultant"/>
        </ul>
    );
};

export default ServiceHashLinks;