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
						{
							this.props.experience.map((item) => {
								return (
									<WorkExperienceItem
										key={item.id}
										job_title={item.job_title}
										company_name={item.company_name}
										company_location={item.company_location}
										company_url={item.company_url}
										start_date={item.start_date}
										end_date={item.end_date}
										description={item.description} />
								)
							})
						}
					</div>
				</div>
			</section>
		)
	}
}

class WorkExperienceItem extends Component {
	render() {
		return (
			<div className="item">
				<hr />
				<h3 className="title">{this.props.job_title}<br />
					<span className="place">
						<a href={this.props.company_url} target="_blank" rel="noopener noreferrer">{this.props.company_name} - {this.props.company_location}</a>
					</span>
					<span className="year">(Aug 2016 - Apr 2018)</span>
				</h3>
				<ul>
					{
						this.props.description.map((row) => {
							return <li key={this.props.description.indexOf(row)}>{row}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

export default WorkExperience;