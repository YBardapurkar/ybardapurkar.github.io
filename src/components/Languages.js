import React, { Component } from 'react';
// import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Languages.css'
import '../sections.css'

class Languages extends Component {

    render() {
        return (
            <aside className="languages aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Languages</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li className="item">
                                <hr />
                                    <span className="title"><strong>English: </strong></span>
                                    <span className="level">Professional 
                                        <br className="visible-xs"/>
                                        {/* <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStarHalfAlt className="icon" /> */}
                                    </span>
                                </li>
                                <li className="item">
                                <hr />
                                    <span className="title"><strong>Hindi: </strong></span>
                                    <span className="level">Native 
                                        <br className="visible-sm visible-xs"/>
                                        {/* <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaRegStar className="icon" /> */}
                                    </span>
                                </li>
                                <li className="item">
                                <hr />
                                    <span className="title"><strong>Marathi: </strong></span>
                                    <span className="level">Native 
                                        {/* <br className="visible-sm visible-xs"/>
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaStar className="icon" />
                                        <FaRegStar className="icon" /> */}
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