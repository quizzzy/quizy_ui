import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';
import QuestionList from '../../components/QuestionList';
import Bar from '../../components/Bar';

function Quiz() {
	return (
		<Fragment>
			<Bar />
			<Container fixed={true} maxWidth="lg" spacing={1}>
				<QuestionList />
			</Container>
		</Fragment>
	);
}

export default Quiz;
