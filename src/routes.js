import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';

export default props => (
	<Router>
		<Switch>
			<Route exact path="/" component={Welcome} />
			<Route path="/quiz" component={Quiz} />
		</Switch>
	</Router>
);
