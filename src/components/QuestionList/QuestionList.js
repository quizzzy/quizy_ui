import React, { useState } from 'react';
import Question from '../Question';
import Nav from '../../components/Nav';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { questions } from '../../mockedInput';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: '20px',
		padding: '15px 20px',
	},
	nav: {
		marginTop: '10px',
	},
}));

function QuestionList() {
	const classes = useStyles();

	// const [questionsState] = useState(questions);
	const [index, setIndexState] = useState(0);

	const [isFinished, setFinished] = useState(false);
	const [isPrevDisabled, setPrevDisbaled] = useState(true);
	const [isNextDisabled, setNextDisabled] = useState(false);

	const handleNextClick = () => {
		setIndexState(prevIndex => {
			const nextIndex = prevIndex + 1;

			if (nextIndex > 0) {
				setPrevDisbaled(false);
			}

			if (nextIndex === questions.length - 1) {
				setNextDisabled(true);
				setFinished(true);
			}

			return nextIndex;
		});
	};
	const handlePrevClick = () => {
		setIndexState(prevIndex => {
			const nextIndex = prevIndex - 1;

			if (nextIndex !== questions.length - 1) {
				setNextDisabled(false);
				setFinished(false);
			}

			if (nextIndex == 0) {
				setPrevDisbaled(true);
			}
			return nextIndex;
		});
	};

	const answers = questions.map(question => ({
		id: question.id,
		value: question.answers[0].value,
	}));

	const [answersState, setAnswers] = useState(answers);

	const questionsList = questions.map((question, index) => {
		return (
			<Question
				question={question}
				answer={answersState[index]}
				index={index}
				updateState={setAnswers}
			/>
		);
	});

	console.log(answersState);

	return (
		<Paper className={classes.root} square={true}>
			{questionsList[index]}
			<Nav
				onNext={handleNextClick}
				onPrev={handlePrevClick}
				className={classes.nav}
				isFinished={isFinished}
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
			/>
		</Paper>
	);
}

export default QuestionList;
