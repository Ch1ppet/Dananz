import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./modules/header/Header.jsx";
import Main from './pages/Main.jsx';
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import OurTeams from "./pages/OurTeams.jsx";
import Footer from "./modules/footer/Footer.jsx";
import ContactUs from "./pages/ContactUs.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/ourteams" element={<OurTeams />}/>
                <Route path="/contactus" element={<ContactUs />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;