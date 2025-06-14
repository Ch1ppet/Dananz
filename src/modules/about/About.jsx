import React from "react";
import SectionTitle from "../../ui/titles/SectionTitle.jsx";
import AboutBottom from "../../components/about/AboutBottom.jsx";
import UnderTitleText from "../../ui/texts/common/UnderTitleText.jsx";
import '../../styles/about/about.scss';

const About = () => {
    return (
        <section className="about section">
            <div className="container about__container">
                <SectionTitle text="ABOUT"/>
                <UnderTitleText section="about" children="“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”"/>
                <AboutBottom />
            </div>
        </section>
    );
};

export default About;
