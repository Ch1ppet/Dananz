import React from "react";

const UnderTitleText = ({ section, children }) => {
    return (
        <div className={`${section}__under-title-text under-title-text`}>
            {children}
        </div>
    );
};

export default UnderTitleText;