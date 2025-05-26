import React, { useState, useId } from "react";
import ArrowRight from "../../accordion/ArrowRight.jsx";
import ArrowDown from "../../accordion/ArrowDown.jsx";

const AccordionItem = ({ number, text, defaultOpen = false }) => {

    const id = useId();
    const contentId = `accordion-content-${id}`;
    const headerId = `accordion-header-${id}`;

    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <li className="service__accordion-item" >
            <div className="service__accordion-header" 
            aria-expanded={isOpen} 
            onClick={toggleAccordion} 
            role="button"
            aria-controls={contentId}
            id={headerId}
            >
                <div className="service__accordion-number bold">{number}</div>
                <div className="service__accordion-text bold">{text}</div>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                    {isOpen ? <ArrowDown /> : <ArrowRight />}
                </span>
            </div>
            <div 
            className={`accordion-content ${isOpen ? 'open' : ''}`}
            aria-labelledby={headerId}
            id={contentId}
            role="region"
            >
                <div className="accordion-content-inner">
                    the use of simple and limited elements to get the best effect or impression.
                </div>
            </div>
        </li>
    );
};

export default AccordionItem;