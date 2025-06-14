import React from "react";
import ArrowImg from "../../public/images/Main/footer/FooterArrow.svg";

const FooterInput = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="footer__form" onSubmit={handleSubmit}>
            <label 
            for="email"
            className="footer__input-label">
                Enter  your email to get the latest news
            </label>
            <div className="footer__input-wrap">
                <input 
                className="footer__input" 
                type="email" 
                id="email" 
                req 
                placeholder="Email Address"/>
                <button type="submit">
                    <img src={ArrowImg} alt="arrow" />
                </button>
            </div>
        </form>
    );
};

export default FooterInput;