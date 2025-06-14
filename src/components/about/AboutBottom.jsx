import React from "react";
import AboutCard from '../../ui/cards/about/AboutCard.jsx';
import mainImg from "../../public/images/Main/about/mainImg.jpg";
import GreyText from "../../ui/texts/common/GreyText.jsx";
import DefaultBtn from "../../ui/buttons/DefaultBtn.jsx";

const AboutBottom = () => {
    return (
        <div className="about__bottom">
            <div className="about__bottom-left-wrap">
                <img src={mainImg} alt="" className="about__bottom-img" />
                <AboutCard />
            </div>
            <div className="about__bottom-right-wrap">
                <GreyText section="about" children="Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere."/>
                <DefaultBtn text="Learn More" section="about" link="/"/> 
            </div>
        </div>
    );
};

export default AboutBottom;