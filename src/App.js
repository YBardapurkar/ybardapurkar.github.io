import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Awards from './components/Awards';

function App() {
	return (
		<>
			<Header />

			<div className="container sections-wrapper">
				<div className="row">
					<div class="primary col-lg-8 col-12">
						<WorkExperience />
						<Projects />
					</div>

					<div class="secondary col-lg-4 col-12">
						<PersonalInfo />
						<Education />
						<Skills />
						<Languages />
						<Awards />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
