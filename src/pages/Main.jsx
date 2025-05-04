import React from "react";
import Header from '../modules/header/Header.jsx';
import Hero from "../modules/hero/Hero.jsx";
import About from "../modules/about/About.jsx";
const Main = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <About />
        </div>
    );
};

export default Main;