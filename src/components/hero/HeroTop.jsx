import React from "react";
import HeroTitle from "../../ui/titles/HeroTitle.jsx";
import HeroInvertedText from "../../ui/texts/hero/HeroInvertedText.jsx";

const HeroTop = () => {
    return (
        <div className="hero__top">
            <HeroTitle />
            <HeroInvertedText />
        </div>
    );
};  

export default HeroTop;