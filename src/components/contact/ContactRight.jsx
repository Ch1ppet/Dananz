import React from "react";
import ContactParagraphText from "../../ui/texts/contact/MaterialParagraphText.jsx";
import ContactBtn from "../../ui/buttons/contact/ContactBtn.jsx";

const ContactRight = () => {
    return (
        <div className="contact__right">
            <ContactParagraphText />
            <ContactBtn />
        </div>
    );
};

export default ContactRight;