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
						{
							this.props.projects.map((project) => {
								return (
									<ProjectItem 
										key={project.id}
										title={project.title}
										image={project.image}
										description={project.description}
										links={project.links} />
								)
							})
						}
					</div>
				</div>
			</section>
		)
	}
}

class ProjectItem extends Component {
	render() {
		return (
			<div className="item">
				<hr />
				<div className="row">
					<div className="img-div col-md-4 col-12">
						<img className="img-fluid project-image" src={this.props.image} alt={this.props.title} />
					</div>
					<div className="desc col-md-8 col-12">
						<h3 className="title">{this.props.title}</h3>
						<ul className="mb-2">
							{
								this.props.description.map((row) => {
									return <li key={this.props.description.indexOf(row)}>{row}</li>
								})
							}
						</ul>
						<p className="links">
							{
								this.props.links.map((item) => {
									return (
										<ProjectLink
											key={item.id}
											type={item.type}
											label={item.label}
											url={item.url} />
									)
								})
							}
						</p>
						{/* <p className="tags-row">
							{
								this.props.tags.map((tag) => {
									return (
										<Tag 
											name={tag} 
											key={this.props.tags.indexOf(tag)} />
									)
								})
							}
						</p> */}
					</div>
				</div>
			</div>
		);
	}
}

class ProjectLink extends Component{

	renderLink(type) {
		switch (type) {
			case 'github':
				return <FaGithub />
			case 'youtube':
				return <FaYoutube />
			case 'info':
				return <FaInfoCircle />
			default:
				return <FaExternalLinkAlt />
		}
	}

	render() {
		return (
			<span className="level-label" data-toggle="tooltip" data-placement="top" data-animation="true" title={this.props.label}>
				<a className="more-link" href={this.props.url} target="_blank" rel="noopener noreferrer">
					{
						this.renderLink(this.props.type)
					}
				</a>
			</span>
		)
	}
}

class Tag extends Component {
	render() {
		return (
			<span 
				className="tag-body" 
				onClick={e => this.props.onFilterSelect(this.props.name)} >
					{this.props.name}
			</span>
		)
	}
}

export default Projects;