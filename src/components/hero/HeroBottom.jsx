import React from "react";
import HeroCard from "../../ui/cards/hero/HeroCard.jsx";
import HeroImg from '../../public/images/hero/HeroImg.jpg';

const HeroBottom = () => {
    return (
        <div className="hero__bottom">
            <HeroCard />
            <img className="hero__img" src={HeroImg} alt="" />
        </div>
    );
};  

export default HeroBottom;