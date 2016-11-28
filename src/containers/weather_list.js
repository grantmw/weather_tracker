import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class WeatherList extends Component {
	render() {
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temp</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>

				</tbody>
			</table>
		);
	};
}


function mapStateToProps(state) {
	return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);