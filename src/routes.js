import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

export default props => (
	<Router>
		<Switch>
			<Route exact path="/" component={Welcome} />
			<Route path="/quiz" component={Quiz} />
			<Route path="/results" component={Results} />
		</Switch>
	</Router>
);
