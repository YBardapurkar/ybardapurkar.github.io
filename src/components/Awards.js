import React, { Component } from 'react';
import './Awards.css'
import '../sections.css'

class Awards extends Component {

    render() {
        return (
            <aside className="awards aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Awards</h2>
                    <div className="content">
                        <ul className="list-unstyled">
                            <li className="item">
                                <hr />
                                <p><span className="title"><strong><a href="https://www.bitsaa.org/page/prof-suresh-ramaswamy-memorial-award">Prof. Suresh Ramaswamy Memorial Award 2015-16</a></strong></span></p>
                                <span className="level">Recipient of the "Prof. Suresh Ramaswamy Memorial Award 2015-16", for the team project titled "HITCH: an interactive platform that facilitates communication, remote control and local positioning/tracking system for mobile devices".<br className="visible-xs" /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Awards;