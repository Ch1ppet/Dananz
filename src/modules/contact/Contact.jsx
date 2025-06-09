import React from "react";
import ContactBoldText from "../../ui/texts/contact/MaterialUnderTitleText.jsx";
import "../../styles/contact/contact.scss";
import ContactRight from "../../components/contact/ContactRight.jsx";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container contact__container">
                <ContactBoldText />
                <ContactRight />
            </div>
        </section>
    );
};

export default Contact;