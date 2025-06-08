import React from "react";
import MaterialFirstImg from "../../public/images/material/material1.jpg";
import MaterialSecondImg from "../../public/images/material/material2.jpg";
import MaterialThirdImg from "../../public/images/material/material3.jpg";

const MaterialImages = () => {
    return (
        <div className="material__image-wrapper">
            <img src={MaterialFirstImg} alt="1" className="material__first-img"/>
            <div className="material__right-images-wrapper">
                <img src={MaterialSecondImg} alt="2" className="material__second-img"/>
                <img src={MaterialThirdImg} alt="3" className="material__third-img"/>
            </div>
        </div>
    );
};

export default MaterialImages;