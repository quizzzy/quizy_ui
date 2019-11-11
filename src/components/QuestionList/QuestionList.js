import React, { useState, Fragment } from 'react';
import Question from '../Question';
import Nav from '../../components/Nav';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { APP_URI } from '../../constants/app';
import ScaleList from '../ScaleList';

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
	const [isScalesCalculated, setScalesFinished] = useState(false);
	const [scalesState, setScales] = useState([]);
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
		const profile = {
			questions: [],
		};

		for (const [questionId, answerId] of answers) {
			profile.questions.push({
				questionId,
				answerId,
			});
		}

		function calculateProfile(url) {
			return fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(profile),
			}).then(response => response.json());
		}

		calculateProfile(`${APP_URI}/api/profiles`).then(data => {
			console.log(data);
			setScalesFinished(true);
			setScales(data);
		});
	};

	const questionsList = questions.map(question => {
		return (
			<Question
				question={question}
				selectedAnswer={
					answers.get(question._id) ? answers.get(question._id) : ''
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

	const quiz = (
		<Fragment>
			<Paper className={classes.root} square={true}>
				{questionsList[index]}
				{navigation}
			</Paper>
		</Fragment>
	);
	return (
		<Fragment>
			{isScalesCalculated ? <ScaleList scales={scalesState} /> : quiz}
		</Fragment>
	);
}

export default QuestionList;
