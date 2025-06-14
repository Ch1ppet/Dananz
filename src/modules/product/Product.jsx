import React from "react";
import SectionTitle from "../../ui/titles/SectionTitle.jsx";
import Accordion from "../../components/product/Accordion.jsx";
import ProductTop from "../../components/product/ProductTop.jsx";
import "../../styles/product/product.scss"

const Product = () => {
    return (
        <section className="product">
            <div className="container product__container">
                <SectionTitle text="PRODUCT"/>
                <ProductTop />
                <Accordion />
            </div>
        </section>
    );
};

export default Product;