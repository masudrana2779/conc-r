import  React from 'react';
import InnerBanner from "../../common/sections/innerBanner/innerBanner";
import ContactInfo from "./contactInfo";
import ContactInfoForm from "./ContactInfoForm";
import ContactMap from "./ContactMap";

const Contact = () => {
    return (
        <div className={'contactWrap'}>
            <InnerBanner title={'Contact Us'}/>
            <ContactInfo />
            <ContactInfoForm />
            <ContactMap />
        </div>
    )
}
export default Contact;