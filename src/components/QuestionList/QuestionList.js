import React, { useState } from 'react';
import Question from '../Question';
import Nav from '../../components/Nav';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: '20px',
		padding: '15px 20px',
	},
	nav: {
		marginTop: '10px',
	},
}));

function QuestionList(props) {
	const { questions } = props;

	const classes = useStyles();
	const [index, setIndexState] = useState(0);
	const [answers, setAnswers] = useState(new Map());
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

			if (nextIndex === 0) {
				setPrevDisbaled(true);
			}
			return nextIndex;
		});
	};

	const handleFinishClick = () => {
		console.log(JSON.stringify(Array.from(answers.entries())));
	};

	const questionsList = questions.map(question => {
		return (
			<Question
				question={question}
				selectedAnswer={
					answers.get(question._id)
						? answers.get(question._id)
						: question.answers[0]._id
				}
				setAnswers={setAnswers}
			/>
		);
	});

	let navigation = null;

	if (questionsList.length) {
		navigation = (
			<Nav
				onNext={handleNextClick}
				onPrev={handlePrevClick}
				onFinish={handleFinishClick}
				className={classes.nav}
				isFinished={isFinished}
				isPrevDisabled={isPrevDisabled}
				isNextDisabled={isNextDisabled}
			/>
		);
	}

	return (
		<Paper className={classes.root} square={true}>
			{questionsList[index]}
			{navigation}
		</Paper>
	);
}

export default QuestionList;
