import React, { Component } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Languages.css'
import '../sections.css'

class Languages extends Component {

    render() {
        return (
            <aside class="languages aside section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading">Languages</h2>
                        <div class="content">
                            <ul class="list-unstyled">
                                <li class="item">
                                <hr />
                                    <span class="title"><strong>English: </strong></span>
                                    <span class="level">Professional 
                                        <br class="visible-xs"/>
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStarHalfAlt className="icon" />
                                    </span>
                                </li>
                                <li class="item">
                                <hr />
                                    <span class="title"><strong>Hindi: </strong></span>
                                    <span class="level">Native 
                                        <br class="visible-sm visible-xs"/>
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaRegStar className="icon" />
                                    </span>
                                </li>
                                <li class="item">
                                <hr />
                                    <span class="title"><strong>Marathi: </strong></span>
                                    <span class="level">Native 
                                        <br class="visible-sm visible-xs"/>
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaRegStar className="icon" />
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
        )
    }
}

export default Languages;