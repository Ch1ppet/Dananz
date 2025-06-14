import React from "react";
import ContactRight from "../../components/contact/ContactRight.jsx";
import UnderTitleText from "../../ui/texts/common/UnderTitleText.jsx";
import "../../styles/contact/contact.scss";

const Contact = () => {
    return (
        <section className="contact">
            <div className="container contact__container">
                <UnderTitleText section="contact" children=" let's discuss making your interior like a dream place!"/>
                <ContactRight />
            </div>
        </section>
    );
};

export default Contact;