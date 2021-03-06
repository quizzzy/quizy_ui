import { withErrorBoundary } from '../../components/ErrorBoundary';
import React, { Fragment, useState, useEffect } from 'react';
import QuestionList from '../../components/QuestionList';
import { Container } from '@material-ui/core';
import { APP_URI } from '../../constants/app';
import Bar from '../../components/Bar';

function Quiz() {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		async function fetchQuestions(url) {
			const response = await fetch(url);

			try {
				const questions = await response.json();
				setQuestions(questions);
			} catch (error) {
				console.error(error);
			}
		}

		fetchQuestions(`${APP_URI}/api/questions`);
	}, []);

	return (
		<Fragment>
			<Bar />
			<Container fixed={true} maxWidth="md" spacing={1}>
				<QuestionList questions={questions} />
			</Container>
		</Fragment>
	);
}

export default withErrorBoundary(Quiz);
