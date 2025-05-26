import React from "react";
import AccordionItem from "../../ui/list-items/service/AccordionItem.jsx";

const Accordion = () => {
    return (
        <ul className="service__accordion">
            <AccordionItem number="01" text="Interior Design" link="/services/#InteriorDesign"/>
            <AccordionItem number="02" text="Consultant" link="/services/#Consultant"/>
            <AccordionItem number="03" text="Construction Consultant" link="/services/#constructionConsultant"/>
        </ul>
    );
};

export default Accordion;