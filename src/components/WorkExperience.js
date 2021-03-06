import React, { Component } from 'react';

import '../sections.css'
import './WorkExperience.css'


class WorkExperience extends Component {
	
	render() {
		return (
			<section className="experience section">
				<div className="section-inner shadow-sm rounded">
					<h2 className="heading">Work Experience</h2>
					<div className="content">
						<div className="item">
							<hr />
							<h3 className="title">Software Developer<br />
								<span className="place"><a href="https://beehyv.com/" target="_blank">BeeHyv Software Solutions Pvt. Ltd. - Hyderabad, India</a> </span>
								<span className="year">(Aug 2016 - Apr 2018)</span>
							</h3>
							<p>Work as full-stack developer on different domains such as Angular, Spring MVC, Android Development. Train and mentor new employees to get them started with their newly assigned tasks
								<ul>
									<li>'User Management' portal for users with different access levels, using Spring MVC, Hibernate and AngularJS 1.6</li>
									<li>Android Application that creates travel albums in real time and posts travel updates on social media</li>
									<li>'Project management' portal to manage file access among different users at various stages of the project, using Google Cloud Platform, “JHipster Application Generator”, Spring MVC, Hibernate and Angular 5</li>
								</ul>
							</p>
						</div>
						<div className="item">
							<hr />
							<h3 className="title">Software Developer Intern<br />
								<span className="place"><a href="https://gargwebtech.com/" target="_blank">Garg WebTech Pvt. Ltd. - Bengaluru, India</a> </span>
								<span className="year">(Jul 2015 - Dec 2015)</span>
							</h3>
							<p>Internship as a part of the Practice School program of BITS Pilani University to provide students with an opportunity to work on industry projects, under the guidance of professional experts.
							<ul>
									<li>Create an Android application with Administrator access to the backend of the hyper-local e-commerce website 'Local Kirana Store'. The application can manage inventory and process orders</li>
									<li>Create an Android application that transmits firmware updates to a micro-controller over Bluetooth</li>
								</ul>
							</p>
						</div>

					</div>
				</div>
			</section>
		)
	}
}

export default WorkExperience;