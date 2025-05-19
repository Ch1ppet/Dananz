import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './pages/Main.jsx';
import About from "./pages/About.jsx";
import Header from "./modules/header/Header.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;