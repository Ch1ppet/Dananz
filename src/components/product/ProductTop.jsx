import React from "react";
import ProductUnderTitleText from "../../ui/texts/product/ProductUnderTitleText.jsx";
import ProductParagraph from "../../ui/texts/product/ProductParagraph.jsx";


const ProductTop = () => {
    return (
        <div className="product__top">
            <ProductUnderTitleText />
            <ProductParagraph />
        </div>
    );
};

export default ProductTop;