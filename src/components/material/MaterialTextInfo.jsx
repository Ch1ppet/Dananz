import React from "react";
import MaterialUnderTitleText from "../../ui/texts/material/MaterialUnderTitleText.jsx";
import MaterialParagraphText from "../../ui/texts/material/MaterialParagraphText.jsx";
import MaterialBtn from "../../ui/buttons/material/MaterialBtn.jsx";

const MaterialTextInfo = () => {
    return (
        <div className="material__text-info">
            <MaterialUnderTitleText />
            <MaterialParagraphText />
            <MaterialBtn />
        </div>
    );
};

export default MaterialTextInfo;