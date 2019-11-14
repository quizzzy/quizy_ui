import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	button: {
		marginLeft: '15px',
		background: '#2b2b2b',
		'&:hover': {
			background: '#000',
		},
	},
}));

function Nav(props) {
	const classes = useStyles();

	return (
		<nav className={props.className}>
			<Button
				variant="contained"
				onClick={props.onPrev}
				disabled={props.isPrevDisabled}
			>
				Prev
			</Button>
			<Button
				variant="contained"
				color="primary"
				className={classes.button}
				onClick={props.onNext}
				disabled={props.isNextDisabled}
			>
				Next
			</Button>
			<Button
				variant="contained"
				style={{
					display: `${props.isFinished ? 'inline-flex' : 'none'}`,
				}}
				color="primary"
				className={classes.button}
				onClick={props.onFinish}
			>
				Finish
			</Button>
		</nav>
	);
}

export default Nav;
