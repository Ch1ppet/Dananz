import React from "react";
import Hero from "../modules/hero/Hero.jsx";
import About from "../modules/about/About.jsx";
import Service from "../modules/service/Service.jsx";
const Main = () => {
    return (
        <div className="app">
            <Hero />
            <About />
            <Service />
        </div>
    );
};

export default Main;