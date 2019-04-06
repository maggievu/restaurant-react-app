import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		width: '96%',
		margin: '2rem 2%',
		backgroundColor: '#fff',
	},
	title: {
		marginTop: 0,
	}
}

const Business = (props) => (
	<Grid className={props.classes.root} container spacing={32}>

		<Grid item md={4}>
			<img src={props.imageUrl} alt='Poster' />
		</Grid>

		<Grid item md={8}>
			<p>Name: {props.name}</p>
			<p>Open: {props.isClosed ? 'No' : 'Yes'}</p>
			<p>Price: {props.price}</p>
			<p>No. of Reviews: {props.reviewCount}</p>
			<p>Rating: {props.rating}</p>
			<p>Address: {props.address}, {props.city}, {props.zipCode}</p>
			<p>Phone: {props.phone}</p>
			<p>Click <a href={props.url} target="_blank" rel="noopener noreferrer">here</a> to go to Yelp link</p>
		</Grid>

	</Grid>
)

export default withStyles(styles)(Business)
