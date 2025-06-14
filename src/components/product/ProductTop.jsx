import React from "react";
import UnderTitleText from "../../ui/texts/common/UnderTitleText.jsx";
import GreyText from "../../ui/texts/common/GreyText.jsx";


const ProductTop = () => {
    return (
        <div className="product__top">
            <UnderTitleText section="product" children="Choose your product themes."/>
            <GreyText section="product" children="Find the theme you want. If our choice of theme is not what you want, you can customize it as you want."/>
        </div>
    );
};

export default ProductTop;