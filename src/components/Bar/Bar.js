import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	toolbar: {
		minHeight: '45px',
		boxShadow: '0 0 5px 0 rgba(0,0,0, .1)',
	},
}));

function Bar() {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar className={classes.toolbar}>
				<Typography variant="subtitle1">
					Апка, що зробить вас щасливим
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Bar;
