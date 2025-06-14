import React from "react";
import UnderTitleText from "../../ui/texts/common/UnderTitleText.jsx";
import GreyText from "../../ui/texts/common/GreyText.jsx";
import MaterialBtn from "../../ui/buttons/material/MaterialBtn.jsx";

const MaterialTextInfo = () => {
    return (
        <div className="material__text-info">
            <UnderTitleText section="material" children="choice of materials for quality furniture."/>
            <GreyText section="material" children="You can custom the material as desired. And our furniture uses the best materials and selected quality materials."/>
            <MaterialBtn />
        </div>
    );
};

export default MaterialTextInfo;