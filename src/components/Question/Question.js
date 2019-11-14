import React from 'react';
import {
	Typography,
	FormControl,
	Radio,
	FormControlLabel,
	useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	fieldset: {
		width: '100%',
	},
}));
function Question(props) {
	const { question, selectedAnswer, setAnswers } = props;
	const matches = useMediaQuery('(max-width:600px)');
	const classes = useStyles();

	const handleChange = event => {
		event.persist();

		setAnswers(prevAnswers => {
			const newAnswers = new Map([...prevAnswers]);
			newAnswers.set(question._id, event.target.value);
			localStorage.setItem(
				'answers',
				JSON.stringify(Array.from(newAnswers.entries()))
			);
			return newAnswers;
		});
	};

	const radioButtons = question.answers.map(answer => {
		return (
			<FormControlLabel
				key={answer._id}
				control={
					<Radio
						checked={selectedAnswer === answer._id}
						value={answer._id}
						onChange={event => {
							handleChange(event);
						}}
						name={`answer${question._id}`}
					/>
				}
				label={answer.description}
			/>
		);
	});

	return (
		<div>
			<Typography variant={matches ? 'h6' : 'h5'}>
				{props.question.description}
			</Typography>
			<FormControl component="fieldset" className={classes.fieldset}>
				{radioButtons}
			</FormControl>
		</div>
	);
}

export default Question;
