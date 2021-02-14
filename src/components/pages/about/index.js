import React, {Component} from 'react';
import AboutSection from "../../common/sections/about";
import LatestWork from "../../common/sections/latestWork";
import ClientFeedBack from "../../common/sections/clientFeedback";
import ContactSection from "../../common/sections/contact";
import InnerBanner from "../../common/sections/innerBanner/innerBanner";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={'aboutPageWrap'}>
                <InnerBanner title={'About Us'} />
                <AboutSection />
                <ClientFeedBack />
                <LatestWork />
                <ContactSection />

            </div>
        );
    }
}

export default About;