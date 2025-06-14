import React from "react";
import SectionTitle from "../../ui/titles/SectionTitle.jsx";
import UnderTitleText from "../../ui/texts/common/UnderTitleText.jsx";
import GreyText from "../../ui/texts/common/GreyText.jsx";

const ServiceTexts = () => {
    return (
        <div>
            <SectionTitle text='SERVICE'/>
            <UnderTitleText section="service" children="attractive furniture with the best quality."/>
            <GreyText section="service" children="Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations."/>
        </div>
    );
};

export default ServiceTexts;