import React, {Component} from 'react';
import { FaGraduationCap} from 'react-icons/fa';

import './Education.css';
import '../sections.css';

class Education extends Component {

    render() {
        return (
            <aside className="education aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Education</h2>
                    <div className="content">

                        <div className="item">
                            <hr />
                            <h3 className="title"><FaGraduationCap className="icon" /> MS - Computer Science</h3>
                            <h4 className="university">
                                <a href="https://www.uta.edu/" target="_blank" rel="noopener noreferrer">University of Texas at Arlington</a>
                                <br />
                                <span className="year"> (Jan 2019 - May 2021)</span>
                            </h4>
                        </div>
                        <div className="item">
                            <hr />
                            <h3 className="title"><FaGraduationCap className="icon" /> BE (Hons) - Electronics and Instrumentation</h3>
                            <h4 className="university">
                                <a href="https://www.bits-pilani.ac.in/goa/" target="_blank" rel="noopener noreferrer">Birla Institute of Technology and Science, Pilani - K K Birla Goa Campus</a>
                                <br />
                                <span className="year"> (2012 - 2016)</span>
                            </h4>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default Education;