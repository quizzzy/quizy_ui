import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Button } from '@material-ui/core';

import Bar from '../../components/Bar';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: '20px',
		padding: '15px 20px',
	},
	title: {},
	description: {
		marginTop: '10px',
	},
	button: {
		marginTop: '20px',
	},
	link: {
		textDecoration: 'none',
	},
}));

function Welcome() {
	const classes = useStyles();

	return (
		<Fragment>
			<Bar />
			<Container fixed={true} maxWidth="md" spacing={1}>
				<Grid container direction="row">
					<Grid item xs={12}>
						<Paper square={true} className={classes.root}>
							<Typography variant="h5">Title</Typography>
							<Typography variant="body1" className={classes.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Curabitur ac lacinia dui, a imperdiet libero. Ut dapibus felis
								sit amet mi tempor, egestas rutrum turpis ultrices. Sed mauris
								justo, semper vitae elit bibendum, tempor consectetur massa.
								Morbi lectus felis, porta et lacus eu, porttitor viverra enim.
								Quisque suscipit a tortor eu tincidunt. Etiam feugiat lectus ut
								ligula dignissim eleifend quis et nisl. Nunc molestie bibendum
								libero vitae aliquam. Vivamus at euismod metus, a laoreet nibh.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				<Grid container direction="row" align="center">
					<Grid item xs={12}>
						<Link to="/quiz" className={classes.link}>
							<Button
								variant="contained"
								color="primary"
								to="/quiz"
								className={classes.button}
							>
								Start
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default Welcome;
