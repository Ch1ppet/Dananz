import React from "react";
import Title from "../../ui/titles/Title.jsx";
import AboutBottom from "../../components/about/AboutBottom.jsx";
import AboutUnderTitleText from "../../ui/texts/about/AboutUnderTitleText.jsx";
import '../../styles/about/about.scss';

const About = () => {
    return (
        <section className="about section">
            <div className="container about__container">
                <Title text="ABOUT"/>
                <AboutUnderTitleText />
                <AboutBottom />
            </div>
        </section>
    );
};

export default About;
