import React from "react";
import Title from "../../ui/titles/Title.jsx";
import MaterialTextInfo from "../../components/material/MaterialTextInfo.jsx";
import MaterialImages from "../../components/material/MaterialImages.jsx";
import "../../styles/material/material.scss";


const Material = () => {
    return (
        <section className="material">
            <div className="container material__container">
                <Title text="MATERIAL"/>
                <div className="material__flex-container">
                    <MaterialTextInfo />
                    <MaterialImages />
                </div>
            </div>
        </section>
    );
};

export default Material;