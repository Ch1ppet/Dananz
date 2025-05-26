import React from "react";
import ServiceTexts from "../../components/service/ServiceTexts.jsx";
import Accordion from "../../components/service/Accordion.jsx";
import ServiceImgBottom from "../../components/service/ServiceImgBottom.jsx";
import '../../styles/service/service.scss';

const Service = () => {
    return (
        <section className="service">
            <div className="container service__container">
                <ServiceTexts />
                <Accordion />
                <ServiceImgBottom />
            </div>
        </section>
    );
};

export default Service;