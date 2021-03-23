import React, { Component } from 'react';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';
import './Header.css'
import '../sections.css'


class Header extends Component {

    render() {
        return (
            <header className="header">
                <div className="container clearfix">
                    <img className="profile-image img-fluid float-left" src="./profile-pic.jpg" alt="Yash Bardapurkar" />
                    <div className="profile-content float-left">
                        <h1 className="name">Yash Bardapurkar</h1>
                        <h2 className="desc">Software Developer</h2>   
                        <ul className="social list-inline">
                            <li className="list-inline-item">
                                <span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="LinkedIn">
                                    <a href="https://www.linkedin.com/in/yash-bardapurkar-6859b488/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                    </a>
                                </span>
                            </li>
                            <li className="list-inline-item">
                                <span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="GitHub">
                                    <a href="https://github.com/YBardapurkar" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </span>
                            </li>
                            <li className="list-inline-item">
                                <span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="GitHub">
                                    <a href="mailto:ybardapurkar@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <FaRegEnvelope />
                                    </a>
                                </span>
                            </li>
                        </ul> 
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;