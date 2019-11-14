import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Fallback(props) {
	return (
		<Container fixed={true} maxWidth="md" spacing={1}>
			<Typography variant="h4" style={{ marginTop: '20px' }}>
				Вибачте. Виникла помилка.
			</Typography>
		</Container>
	);
}

export default Fallback;
