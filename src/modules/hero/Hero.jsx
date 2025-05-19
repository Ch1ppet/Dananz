import React from "react";
import HeroTop from "../../components/hero/HeroTop.jsx";
import HeroBottom from "../../components/hero/HeroBottom.jsx";
import '../../styles/hero/hero.scss';

const Hero = () => {
    return (
        <section className="hero section">
            <div className="container hero__container">
                <HeroTop />
                <HeroBottom />
            </div>
        </section>
    );
};

export default Hero;
