import React, { Component } from 'react';
import './Skills.css'
import '../sections.css'

class Skills extends Component {
    render() {
        return (
            <aside className="skills aside section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Skills</h2>
                    <div className="content">
                        <div className="skillset">
                            <div className="item">
                                <hr />
                                Languages
                                <h3 className="level-title">Java, Python, PHP, JavaScript</h3>
                            </div>
                            <div className="item">
                                <hr />
                                Tools
                                <h3 className="level-title">Android SDK, Selenium, Git</h3>
                            </div>
                            <div className="item">
                                <hr />
                                Frameworks
                                <h3 className="level-title">React, Node.js, CodeIgniter (PHP), Flask (Python), Spring MVC (Java)</h3>
                            </div>
                            <div className="item">
                                <hr />
                                Cloud Platforms
                                <h3 className="level-title">AWS, Microsoft Azure, Firebase, Heroku</h3>
                            </div>
                        </div>              
                    </div>
                </div>
            </aside>
        )
    }
}

export default Skills;