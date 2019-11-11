import React, { Fragment } from 'react';
import Scale from '../Scale';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: '20px',
	},
}));

function ScaleList(props) {
	const { scales } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container direction="row" spacing={2}>
				{scales.map(scale => {
					return (
						<Grid item xs={12} key={scale.id}>
							<Scale scale={scale} />
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default ScaleList;
