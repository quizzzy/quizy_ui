import React, { Fragment } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

function Scales(props) {
	const { scales } = props;

	return (
		<Fragment>
			<Grid container direction="row" spacing={2}>
				{scales.map(scale => {
					return (
						<Grid item xs={6} key={scale.id}>
							<Paper square={true}>
								<Typography variant="h5">{scale.scaleTitle}</Typography>
								<Typography variant="h6">
									Ваш результат: {scale.value}
								</Typography>

								{scale.categories.map(category => {
									return (
										<Fragment key={category.title}>
											<Typography variant="subtitle1">
												{category.title}
											</Typography>
											<Typography variant="body1">
												{category.description}
											</Typography>
											<Typography variant="body1">
												Мінімальне значення категорії: {category.range.low}
											</Typography>
											<Typography variant="body1">
												Максимальне значення категорії: {category.range.high}
											</Typography>
										</Fragment>
									);
								})}
							</Paper>
						</Grid>
					);
				})}
			</Grid>
		</Fragment>
	);
}

export default Scales;
