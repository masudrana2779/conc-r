import React, {useState} from 'react';
import logo from '../../../static/assets/images/logo.png';
import phoneIcon from '../../../static/assets/images/phone-icon.png';
import {about, blog, contact, home, services} from "../../../route";

const Header = () => {


    const [scrollTopValue, setSTValue] = useState(0);

    window.onscroll = function () {
        setSTValue(window.pageYOffset);
    }
    return (
        <header className={(scrollTopValue > 0) ? "header fixedMenu" : "header"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar_header">
                            <a className="navbar-brand logo" href={home}>
                                <img src={logo} alt="logo"/>
                            </a>
                            <button className="navbar-toggler navbar_btn" type="button" data-toggle="collapse"
                                    data-target="#headerNavbar" aria-expanded="false">
                                Bar
                            </button>

                            <div className="collapse navbar-collapse header_menu" id="headerNavbar">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href={home}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={about}>About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={services}>Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={blog}>Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={contact}>Contact</a>
                                    </li>
                                </ul>
                                <div className="contact_Us">
                                    <div className="icon"><img src={phoneIcon} alt="icon"/></div>
                                    <div className="contact">
                                        <p className="primary-color con_text"> Call us now: </p>
                                        <p className="con_link brand-color"><a href="#">964 643 475</a></p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;