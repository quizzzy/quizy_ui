import React from 'react';
import Scale from '../Scale';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { APP_URI } from '../../constants/app';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: '20px',
	},
}));

function ScaleList(props) {
	const { scales, profileId } = props;
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
				<Grid item xs={12}>
					<Button
						variant="contained"
						href={`${APP_URI}/api/profiles/${profileId}?format=document`}
						target="_blank"
					>
						Завантажити PDF
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default ScaleList;
