import React, { Component } from 'react';
import RestaurantList from './RestaurantList';

import GeoLocation from './GeoLocation';
const API_KEY =`97bdea3ea03761124f60b657313bb082`;


class RestaurantContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
			restaurants : [],
			sort: 'ratings',
			zipcode: this.props.query,
			
    };
	
		this.updateZip = this.updateZip.bind(this);
		this.fetchRestaurants = this.fetchRestaurants.bind(this);
  }
	fetchRestaurants (zipcode,city='New York') {
		let url = `https://developers.zomato.com/api/v2.1/cities?q=${city}&apikey=${API_KEY}`
		fetch(url)
			// .then(checkStatus)
			// .then(parseJSON)
			.then(function(data) {
				let results = data.query.results.Result
				
				this.setState({
					restaurants :  results
				});
			}.bind(this)).catch(function(error) {
				console.log('request failed', error)
			})
	}
	componentDidMount() {
		this.fetchRestaurants(this.state.query, this.state.zipcode );
	}
	
	updateZip(zip){
		this.setState({zip :zip});
		this.fetchRestaurants(zip);
	
	}
	
	render() {
    return (
			<div className="row">
				<div className="col-sm-4 col-xs-12">
					<div className="panel panel-default">
						<div className="panel-body">
							{/* <UserInput onQuerysubmit={this.updateQuery}/> */}
						</div>
					</div>
					<GeoLocation onZipchange={this.updateZip} />
				</div>
				<div className="col-sm-8 col-xs-12">
					<h3>Suggested restaurants:</h3>
					<div className="row sort">
						<div className="col-xs-12">
						Sort by:
							</div>
     			</div>
					<RestaurantList restaurants={this.state.restaurants} />
				</div>
			</div>
    )
  }
}
export default RestaurantContainer;
