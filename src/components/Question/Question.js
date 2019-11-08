import React from 'react';
import {
	Typography,
	FormControl,
	Radio,
	FormControlLabel,
} from '@material-ui/core';

function Question(props) {
	// debugger;
	const { question } = props;

	const handleChange = event => {
		props.updateState(prevState => {
			const newState = [...prevState];
			newState[props.index].value = +event.target.value;
			return newState;
		});
	};

	const radioButtons = question.answers.map(answer => {
		return (
			<FormControlLabel
				key={answer.id}
				control={
					<Radio
						color="primary"
						checked={props.answer.value === answer.value}
						value={answer.value}
						onChange={handleChange}
						name={`answer${question.id}`}
					/>
				}
				label={answer.description}
			/>
		);
	});

	return (
		<div>
			<Typography variant="h5">{props.question.title}</Typography>
			<FormControl component="fieldset">{radioButtons}</FormControl>
		</div>
	);
}

export default Question;
