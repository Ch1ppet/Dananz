import React from "react";
import FooterSMIcon from "../../ui/list-items/icons/FooterSMIcon.jsx";
import FacebookImg from "../../public/images/Main/footer/facebook.svg";
import InstImg from "../../public/images/Main/footer/instagram.svg";
import TikTokImg from "../../public/images/Main/footer/tiktok.svg";
import YoutubeImg from "../../public/images/Main/footer/youtube.svg";

const FooterSocialMedia = () => {
    return (
        <div className="footer__social-media">
            <div className="footer__social-media-text">
                Follow us On
            </div>
            <ul className="footer__social-media-icons">
                <FooterSMIcon img={FacebookImg} alt="facebook"/>
                <FooterSMIcon img={InstImg} alt="inst"/>
                <FooterSMIcon img={TikTokImg} alt="tiktok"/>
                <FooterSMIcon img={YoutubeImg} alt="youtube"/>
            </ul>
        </div>
    );
};

export default FooterSocialMedia;