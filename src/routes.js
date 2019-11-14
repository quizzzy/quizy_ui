import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import Fallback from './components/Fallback';

export default props => (
	<Router>
		<Switch>
			<Route exact path="/" component={Welcome} />
			<Route path="/quiz">
				<Quiz fallback={<Fallback />} />
			</Route>
		</Switch>
	</Router>
);
