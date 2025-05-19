import React from "react";
import AboutCard from '../../ui/cards/about/AboutCard.jsx';
import VioletBtn from '../../ui/buttons/VioletBtn.jsx';
import AboutRightBottomText from "../../ui/texts/about/AboutRightBottomText.jsx";
import mainImg from "../../public/images/about/mainImg.jpg";

const AboutBottom = () => {
    return (
        <div className="about__bottom">
            <div className="about__bottom-left-wrap">
                <img src={mainImg} alt="" className="about__bottom-img" />
                <AboutCard />
            </div>
            <div className="about__bottom-right-wrap">
                <AboutRightBottomText />
                <VioletBtn text="Learn More"/> 
            </div>
        </div>
    );
};

export default AboutBottom;