import React, { Component } from 'react'
import axios from 'axios'

import Business from './components/Business'
import { TextField, Select, Button, MenuItem, Input, FormControl, InputLabel } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'

const API_KEY = "mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx"

const styles = theme => ({
	textField: {
		margin: theme.spacing.unit,
		width: "100%",
	},
	formControl: {
		margin: theme.spacing.unit,
		width: "100%",
	},
	button: {
		margin: theme.spacing.unit,
		width: "100%",
		backgroundColor: ['#26c6da'].join(','),
		'&:hover': {
			backgroundColor: '#26c6da',
		}
	}
})

class App extends Component {
	state = {
		term: '',
		categories: '',
		location: '',
		sortBy: 'best_match',
		totalResults: 0,
		businesses: [],
		success: false,
		error: null,
	}

	// Handles changes from input in text fields
	handleChange = (event, value) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	// Handles changes from Search button (term based)
	handleSubmit = async (e) => {
		e.preventDefault()

		const { term, location, categories, sortBy } = this.state

		const link = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&categories=${categories}&sort_by=${sortBy}&locale=en_CA`
		console.log(link)

		if (location.length > 0 && term.length > 0) {

			await axios.get(
				link,
				{
					headers: {
						"Authorization": `Bearer ${API_KEY}`
					}
				})
				.then(json => json.data)
				.then(data => {
					this.setState({
						totalResults: data.total,
						businesses: data.businesses,
						success: false,
						error: null
					})
				})
				.catch(error => {
					this.setState({ error: error.description })
				})

			if (this.state.totalResults !== 0) {
				this.setState({
					success: true,
				})
			} else {
				this.setState({
					error: `Cound not find any business.`,
				})
			}

		}

		if (!term) {
			this.setState({
				location: '',
				success: false,
				error: 'Missing a search term!'
			})
		}

		if (!location) {
			this.setState({
				term: '',
				success: false,
				error: 'Missing a location search term!'
			})
		}

	}

	render() {
		const props = this.props
		const state = this.state
		return (
			<CssBaseline>

				<div className="wrapper">
					<div className="main">
						<h1 className="site-title">React Restaurant App - by Maggie</h1>
						<form onSubmit={this.handleSubmit}>
							<TextField
								className={props.classes.textField}
								label="Search Term"
								margin="normal"
								name="term"
								value={state.term}
								type="search"
								variant="outlined"
								InputLabelProps={{
									required: true,
									color: "white",
									shrink: true
								}}
								onChange={this.handleChange}
								/>

							<TextField
								className={props.classes.textField}
								label="Categories"
								margin="normal"
								name="categories"
								value={state.categories}
								type="search"
								variant="outlined"
								InputLabelProps={{
									required: true,
									color: "white",
									shrink: true
								}}
								onChange={this.handleChange}
								/>

							<TextField
								className={props.classes.textField}
								label="City/Location"
								margin="normal"
								name="location"
								value={state.location}
								type="search"
								variant="outlined"
								InputLabelProps={{
									required: true,
									color: "white",
									shrink: true
								}}
								onChange={this.handleChange}
								/>

							<FormControl className={props.classes.formControl}>
								<InputLabel shrink htmlFor="select-sortBy">
									Sort By
								</InputLabel>
								<Select
									value={state.sortBy}
									onChange={this.handleChange}
									name="sortBy"
									input={<Input name="sort-by" id="select-sortBy" />}
									className={props.classes.selectEmpty}
									fullWidth={true}
									>
									<MenuItem value='best_match'>Best Match</MenuItem>
									<MenuItem value='rating'>Rating</MenuItem>
									<MenuItem value='review_count'>Review Count</MenuItem>
									<MenuItem value='distance'>Distance</MenuItem>
								</Select>
							</FormControl>

							<Button
								className={props.classes.button}
								color='primary'
								type='submit'
								variant='contained' >
								Search
          		</Button>
						</form>

						<div className="business-section">
							{!this.state.success && <p style={{ textAlign: 'center' }}>{this.state.error}</p>}

							{this.state.success && this.state.businesses.slice(0, 10).map((business, id) => {
								return (
									<Business
										key={id}
										name={business.name}
										isClosed={business.is_closed}
										price={business.price}
										reviewCount={business.review_count}
										rating={business.rating}
										address={business.location.address1}
										city={business.location.city}
										zipCode={business.location.zip_code}
										imageUrl={business.image_url}
										phone={business.display_phone}
										url={business.url}
									/>
								)
							})}
						</div>
					</div>
				</div>

			</CssBaseline>
		)
	}
}

export default withStyles(styles)(App)
