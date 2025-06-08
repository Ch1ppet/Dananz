import React from "react";
import Title from "../../ui/titles/Title.jsx";
import Accordion from "../../components/product/Accordion.jsx";
import ProductTop from "../../components/product/ProductTop.jsx";
import "../../styles/product/product.scss"

const Product = () => {
    return (
        <section className="product">
            <div className="container product__container">
                <Title text="PRODUCT"/>
                <ProductTop />
                <Accordion />
            </div>
        </section>
    );
};

export default Product;