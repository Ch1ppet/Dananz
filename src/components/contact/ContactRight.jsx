import React from "react";
import ContactBtn from "../../ui/buttons/contact/ContactBtn.jsx";
import GreyText from "../../ui/texts/common/GreyText.jsx";

const ContactRight = () => {
    return (
        <div className="contact__right">
            <GreyText section="contact" children="Contact us below to work together to build your amazing interior"/>
            <ContactBtn />
        </div>
    );
};

export default ContactRight;