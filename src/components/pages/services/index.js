import React, {Component} from 'react';
import AboutSection from "../../common/sections/about";
import LatestWork from "../../common/sections/latestWork";
import ClientFeedBack from "../../common/sections/clientFeedback";
import ContactSection from "../../common/sections/contact";
import InnerBanner from "../../common/sections/innerBanner/innerBanner";
import ServiceSectionWrap from "../../common/sections/services";
import ServicesDetailsContent from "../../common/sections/services/servicesDetailsContent";
import ServiceList from "./serviceList";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={'serviceWrap'}>
                <InnerBanner title={'Services'}/>
                <br/>
                <br/>
                <br/>
                <ServicesDetailsContent/>
                <ServiceList/>
                <br/>
                <br/>
                <br/>
                <br/>
                <ContactSection/>

            </div>
        );
    }
}

export default Service;