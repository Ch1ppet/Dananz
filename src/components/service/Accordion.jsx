import React from "react";
import AccordionItem from "../../ui/accordion/AccordionItem.jsx";

const Accordion = () => {
    return (
        <ul className="service__accordion">
            <AccordionItem number="01" text="Interior Design" link="/services/#InteriorDesign" children="the use of simple and limited elements to get the best effect or impression."
            section="service"/>
            <AccordionItem number="02" text="Consultant" link="/services/#Consultant" children="the use of simple and limited elements to get the best effect or impression."
            section="service"/>
            <AccordionItem number="03" text="Construction Consultant" link="/services/#constructionConsultant" children="the use of simple and limited elements to get the best effect or impression."
            section="service"/>
        </ul>
    );
};

export default Accordion;