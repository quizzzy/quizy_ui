import React from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	root: {
		padding: '20px',
	},
	categoryBox: {
		display: 'flex',
		alignItems: 'center',
	},
	categories: {
		marginTop: '10px',
	},
	title: {},
}));

function Scale(props) {
	const { scale } = props;
	const classes = useStyles();

	const userScaleCategories = scale.categories.filter(category => {
		return (
			scale.value >= category.range.low && scale.value < category.range.high
		);
	});

	return (
		<Paper square={true} className={classes.root}>
			<Typography variant="h5" className={classes.title}>
				{scale.scaleTitle}
			</Typography>
			<Box className={classes.categoryBox}>
				<CheckIcon />
				<Typography variant="subtitle1">
					Ваш результат: {scale.value}
				</Typography>
			</Box>
			{!!userScaleCategories.length && (
				<Box className={classes.categoryBox}>
					<CheckIcon />
					<Typography variant="subtitle1">
						Категорія:
						{userScaleCategories.map(scaleCateogy => scaleCateogy.title)}
					</Typography>
				</Box>
			)}

			<Grid
				container
				direction="row"
				spacing={2}
				className={classes.categories}
			>
				{scale.categories.map(category => {
					return (
						<Grid item xs={12} md={6} key={category.title}>
							<Box className={classes.categoryBox}>
								<BookmarkIcon />
								<Typography variant="h6">{category.title}</Typography>
							</Box>
							<Typography variant="body2">
								Мінімальне значення категорії: {category.range.low}
							</Typography>
							<Typography variant="body2">
								Максимальне значення категорії: {category.range.high}
							</Typography>
							<Typography variant="body1">{category.description}</Typography>
						</Grid>
					);
				})}
			</Grid>
		</Paper>
	);
}

export default Scale;
