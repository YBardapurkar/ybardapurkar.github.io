import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Awards from './components/Awards';

class App extends Component {
	
	constructor() {
		super();
		this.state = {
			projects: [
				{
					id: 0,
					title: "",
					description: [],
					links: [
						{
							id: 0,
							type: "",
							label: "",
							url: ""
						},
					]
				},
			],
			experience: [
				{
					id: 0,
					job_title: "",
					company_name: "",
					company_location: "",
					company_url: "",
					start_date: "",
					end_date: "",
					description: []
				}
			]
		};
	}

	render() {
		return (
			<>
				<Header />
				<div className="container sections-wrapper">
					<div className="row">
						<div className="primary col-lg-8 col-12">
							<WorkExperience 
								experience={ this.state.experience } />
							<Projects 
								projects={ this.state.projects } />
						</div>

						<div className="secondary col-lg-4 col-12">
							<PersonalInfo />
							<Education />
							<Skills />
							<Awards />
							<Languages />
						</div>
					</div>
				</div>
			</>
		);
	}

	componentDidMount() {
		// projects
		fetch('./projects_data.json')
			.then(response => response.json())
			.then(result => {
				result.reverse()
				this.setState({
					projects: result
				})
			})
		// experience
		fetch('./experience_data.json')
			.then(response => response.json())
			.then(result => {
				result.reverse()
				this.setState({
					experience: result
				})
			})
	}
}

export default App;
