import React from 'react';
import {
	Typography,
	FormControl,
	Radio,
	FormControlLabel,
} from '@material-ui/core';

function Question(props) {
	const { question, selectedAnswer, setAnswers } = props;

	const handleChange = event => {
		setAnswers(prevAnswers => {
			const newAnswers = new Map([...prevAnswers]);
			newAnswers.set(question._id, event.target.value);

			return newAnswers;
		});
	};

	const radioButtons = question.answers.map(answer => {
		return (
			<FormControlLabel
				key={answer._id}
				control={
					<Radio
						color="primary"
						checked={selectedAnswer === answer._id}
						value={answer._id}
						onChange={handleChange}
						name={`answer${question._id}`}
					/>
				}
				label={answer.description}
			/>
		);
	});

	return (
		<div>
			<Typography variant="h5">{props.question.description}</Typography>
			<FormControl component="fieldset">{radioButtons}</FormControl>
		</div>
	);
}

export default Question;
