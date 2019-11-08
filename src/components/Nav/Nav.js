import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	ml: {
		marginLeft: '15px',
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
				className={classes.ml}
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
				className={classes.ml}
				onClick={props.onFinish}
			>
				Finish
			</Button>
		</nav>
	);
}

export default Nav;
