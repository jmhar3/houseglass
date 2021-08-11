import React, { Component } from 'react';
import SwatchCard from './swatchCard';

const SwatchList = props => {
	console.log(props);
	return (
		<div>
			<Link id="action-button" to="/palette">Make Your Own</Link>
			{props.swatches.map(() => <SwatchCard />)}
		</div>
	)
}

export default SwatchList;