import React, { Component } from 'react';
import './Awards.css'
import '../sections.css'

class Awards extends Component {

    render() {
        return (
            <aside class="awards aside section">
                <div class="section-inner shadow-sm rounded">
                    <h2 class="heading">Awards</h2>
                    <div class="content">
                        <ul class="list-unstyled">
                            <li class="item">
                                <hr />
                                <p><span class="title"><strong><a href="https://www.bitsaa.org/page/prof-suresh-ramaswamy-memorial-award">Prof. Suresh Ramaswamy Memorial Award 2015-16</a></strong></span></p>
                                <span class="level">Recipient of the "Prof. Suresh Ramaswamy Memorial Award 2015-16", for the team project titled "HITCH: an interactive platform that facilitates communication, remote control and local positioning/tracking system for mobile devices".<br class="visible-xs" /></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Awards;