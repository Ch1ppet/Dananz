import React from "react";
import AccordionItem from "../../ui/accordion/AccordionItem.jsx";

const Accordion = () => {
    return (
        <ul className="product__accordion">
            <AccordionItem number="01" text="Vintage" 
            children="the use of simple and limited elements to get the best effect or impression."
            section="product"/>
            <AccordionItem number="02" text="Minimalist" 
            children="the use of simple and limited elements to get the best effect or impression."
            section="product"/>
            <AccordionItem number="03" text="Modern" 
            children="the use of simple and limited elements to get the best effect or impression."
            section="product"/>
            <AccordionItem number="04" text="transitional" 
            children="the use of simple and limited elements to get the best effect or impression."
            section="product"/>
        </ul>
    );
};

export default Accordion;