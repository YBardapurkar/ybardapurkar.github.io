import React, { Component } from 'react';
import { FaGithub, FaInfoCircle, FaYoutube, FaExternalLinkAlt } from 'react-icons/fa';

import './Projects.css';
import '../sections.css';

class Projects extends Component {
	
	render() {
		return (
			<section className="projects section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Projects</h2>
                        <div className="content">    
                                               
                            <div className="item">
								<hr />
								<div className="row">
									<a className="col-md-4 col-12">
										<img className="img-fluid project-image" src="./projects/project-campuscarrental.png" alt="project name" />
									</a>
									<div className="desc col-md-8 col-12">
										<h3 className="title">CampusCarRental</h3>
										<p className="mb-2">Class project made for the course CSE-5324-001 - Software Engineering I</p>
										<p className="mb-2">Android Application for a Car Rental Android application for students</p>
										<p class="links">
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="GitHub">
												<a className="more-link" href="https://github.com/YBardapurkar/SE1_Project/" target="_blank">
													<FaGithub />
												</a>
											</span>
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="Demo Video">
												<a className="more-link" href="https://youtu.be/-qqv9Q6gr-8" target="_blank">
													<FaYoutube />
												</a>
											</span>
										</p>
									</div>
								</div>
                                
                            </div>
                            
                            <div className="item">
								<hr />
								<div className="row">
									<a className="col-md-4 col-12">
										<img className="img-fluid project-image" src="https://ybardapurkar.github.io/Data_Mining_Project/images/search.PNG" alt="project name" />
									</a>
									<div className="desc col-md-8 col-12">
										<h3 className="title">Data Mining Project - Movie Search and Classifier</h3>
										<p className="mb-2">Movie Search Engine, Movie Classifier by genre based on description, and Image Captioning and Search. Datasets used are MovieLens dataset and MS-COCO 2014 dataset. Application was created using Python and Flask, and hosted on PythonAnywhere.
												<ul>
												<li>Movie Search Engine</li>
												<li>Movie Classification</li>
												<li>Image Search and Captioning</li>
											</ul>
										</p>
										<p class="links">
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="Demo">
												<a className="more-link" href="https://ybardapurkar.pythonanywhere.com/" target="_blank">
													<FaExternalLinkAlt />
												</a>
											</span>
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="Project Proposal">
												<a className="more-link" href="https://ybardapurkar.github.io/Data_Mining_Project/project-proposal.html" target="_blank">
													<FaInfoCircle />
												</a>
											</span>
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="GitHub">
												<a className="more-link" href="https://github.com/YBardapurkar/Data_Mining_Project/" target="_blank">
													<FaGithub />
												</a>
											</span>
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="Demo Video">
												<a className="more-link" href="https://youtu.be/w62vYHwzs98?t=130" target="_blank">
													<FaYoutube />
												</a>
											</span>
										</p>
									</div>
								</div>
                            </div>
                            
                            <div className="item">
								<hr />
								<div className="row">
									<a className="col-md-4 col-12">
									<img className="img-fluid project-image" src="./projects/project-wdm.png" alt="project name" />
									</a>
									<div className="desc col-md-8 col-12">
										<h3 className="title">Web Data Management Project – 'SayItRight' Events Organization Website</h3>
										<p className="mb-2">Create a responsive website using HTML, CSS, JavaScript, Bootstrap, PHP, MySQL and the CodeIgniter framework (PHP) where users can create ‘Events’ as well as RSVP to existing events (like Facebook Events)</p>
										<p class="links">
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="Demo">
												<a className="more-link" href="https://yashbardapurkar.uta.cloud/sayitright" target="_blank">
													<FaExternalLinkAlt />
												</a>
											</span>
											<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title="GitHub">
												<a className="more-link" href="https://github.com/YBardapurkar/WDM_Assignment" target="_blank">
													<FaGithub />
												</a>
											</span> 
										</p>
									</div>
								</div>
                            </div>

                            <div className="item">
								<hr />
								<div className="row">
									<a className="col-md-4 col-12">
									<img className="img-fluid project-image" src="./projects/project-hitch.jpg" alt="project name" />
									</a>
									<div className="desc col-md-8 col-12">
										<h3 className="title">HITCH Android Application</h3>
										<p className="mb-2">'Hitch' is a Bluetooth based tag, which can be tracked using an Android application.
											<ul>
												<li>Create the initial user interface of the Android application to register 'Hitch' devices</li>
												<li>Create tracking algorithms to keep track of device location and signal strength, and create alerts accordingly</li>
											</ul>
										</p>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </section>
		)
	}
}

export default Projects;