import React, { Component } from 'react';
import SwatchCard from './swatchCard';
import swatchData from './data.js';

export default class Swatch extends Component {
	generateSwatches = () => {
		return swatchData.map((swatch, index) => <SwatchCard
		      key={index}
		      title={swatch.title}
		      colours={swatch.colours}
		    />)
	};

	render() {
		return <div id="featured-swatches">{this.generateSwatches()}</div>;
	}
}