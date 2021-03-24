import React, { Component } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import './PersonalInfo.css'
import '../sections.css'

class PersonalInfo extends Component {

    render() {
        return (
            <aside className="info aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading sr-only">Basic Information</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li><FaMapMarkerAlt className="icon" /><span className="sr-only">Location:</span>Arlington, TX</li>
                            <li><FaEnvelope className="icon"/><span className="sr-only">Email:</span><a href="mailto:ybardapurkar@gmail.com">ybardapurkar@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        )
    }
}

export default PersonalInfo;