import React from "react";
import GreyText from "../../ui/texts/common/GreyText.jsx";
import DefaultBtn from "../../ui/buttons/DefaultBtn.jsx";

const ContactRight = () => {
    return (
        <div className="contact__right">
            <GreyText section="contact" children="Contact us below to work together to build your amazing interior"/>
            <DefaultBtn text="Contact Us" link="/" section="contact"/>
        </div>
    );
};

export default ContactRight;