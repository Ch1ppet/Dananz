import React from "react";

const GreyText = ({ section, children }) => {
    return (
        <div className={`${section}__grey-text grey-text`}>
            {children}
        </div>
    );
};

export default GreyText;