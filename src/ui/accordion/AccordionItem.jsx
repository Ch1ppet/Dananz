import React, { useState, useId } from "react";
import ArrowRight from "./ArrowRight.jsx";
import ArrowDown from "./ArrowDown.jsx";

const AccordionItem = ({ number, text, defaultOpen = false, children, section }) => {

    const id = useId();
    const contentId = `accordion-content-${id}`;
    const headerId = `accordion-header-${id}`;

    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <li className={`${section}__accordion-item accordion-item`} >
            <div className={`${section}__accordion-header accordion-header`} 
            aria-expanded={isOpen} 
            onClick={toggleAccordion} 
            role="button"
            aria-controls={contentId}
            id={headerId}
            >
                <div className={`${section}__accordion-number bold`}>{number}</div>
                <div className={`${section}__accordion-text bold`}>{text}</div>
                <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
                    {isOpen ? <ArrowDown section={section}/> : <ArrowRight section={section}/>}
                </span>
            </div>
            <div 
            className={`${section}__accordion-content ${isOpen ? 'open' : ''} accordion-content`}
            aria-labelledby={headerId}
            id={contentId}
            role="region"
            >
                <div className={`${section}__accordion-content-inner`}>
                    {children}
                </div>
            </div>
        </li>
    );
};

export default AccordionItem;