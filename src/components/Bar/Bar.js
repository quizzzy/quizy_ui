import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../logo-root.svg';

const useStyles = makeStyles(() => ({
	toolbar: {
		minHeight: '45px',
		boxShadow: '0 0 5px 0 rgba(0,0,0, .1)',
		background: '#000',
	},
	image: {
		width: '100%',
		maxWidth: '120px',
	},
}));

function Bar() {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<img src={logo} className={classes.image} alt="SoftServe logo" />
			</Toolbar>
		</AppBar>
	);
}

export default Bar;
