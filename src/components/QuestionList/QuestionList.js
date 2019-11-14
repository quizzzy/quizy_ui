import React, { useState, Fragment, useEffect } from 'react';
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
	const [profileId, setProfileId] = useState('');
	const [isPrevDisabled, setPrevDisbaled] = useState(true);
	const [isNextDisabled, setNextDisabled] = useState(false);

	useEffect(() => {
		if (!localStorage.getItem('answers')) {
			questions.forEach(question => {
				setAnswers(prevAnswers => {
					const newAnswers = new Map([...prevAnswers]);
					newAnswers.set(question._id, question.answers[0]._id);
					localStorage.setItem(
						'answers',
						JSON.stringify(Array.from(newAnswers.entries()))
					);
					return newAnswers;
				});
			});
		} else {
			setAnswers(new Map(JSON.parse(localStorage.getItem('answers'))));
		}

		const savedIndex = +localStorage.getItem('index');
		if (savedIndex) {
			if (savedIndex > 0) {
				setPrevDisbaled(false);
			}
			setIndexState(savedIndex);
		}
	}, [questions]);

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

			localStorage.setItem('index', nextIndex);

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

			localStorage.setItem('index', nextIndex);
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
			localStorage.removeItem('answers');
			localStorage.removeItem('index');
			setScalesFinished(true);
			setScales(data.scales);
			setProfileId(data.id);
		});
	};

	const questionsList = questions.map(question => {
		const savedAnswer = new Map(
			JSON.parse(localStorage.getItem('answers'))
		).get(question._id);
		return (
			<Question
				question={question}
				selectedAnswer={savedAnswer ? savedAnswer : answers.get(question._id)}
				setAnswers={setAnswers}
				setNextDisabled={setNextDisabled}
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
			{isScalesCalculated ? (
				<ScaleList profileId={profileId} scales={scalesState} />
			) : (
				quiz
			)}
		</Fragment>
	);
}

export default QuestionList;
