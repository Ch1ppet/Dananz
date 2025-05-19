import React from "react";
import Title from "../../ui/titles/Title.jsx";
import ServiceUnderTitleText from "../../ui/texts/service/SericeUnderTitleText.jsx";
import ServiceParagraph from "../../ui/texts/service/ServiceParagraph.jsx";

const ServiceTexts = () => {
    return (
        <div>
            <Title text='SERVICE'/>
            <ServiceUnderTitleText />
            <ServiceParagraph />
        </div>
    );
};

export default ServiceTexts;