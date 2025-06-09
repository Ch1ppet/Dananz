import React from "react";
import Hero from "../modules/hero/Hero.jsx";
import About from "../modules/about/About.jsx";
import Service from "../modules/service/Service.jsx";
import Product from "../modules/product/Product.jsx";
import Material from "../modules/material/Material.jsx";
import Contact from "../modules/contact/Contact.jsx";

const Main = () => {
    return (
        <div className="app">
            <Hero />
            <About />
            <Service />
            <Product />
            <Material />
            <Contact />
        </div>
    );
};

export default Main;