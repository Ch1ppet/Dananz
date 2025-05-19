import React from "react";
import manImg from "../../../public/images/about/man.png";

const AboutCard = () => {
    return (
        <div className="about__card">
            <div className="about__card-wrapper">
                <img src={manImg} alt="" className="about__card-img" />
                <div className="about__card-text-wrap">
                    <div className="about__card-text-wrap--name">
                        Arga Danaan
                    </div>
                    <div className="about__card-text-wrap--profession">
                        CEO of Dananz
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;