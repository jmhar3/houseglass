import React, { Component } from 'react';

export default class SwatchCard extends Component {
    generateHeartElement = () => {
        if (this.props.heartIcon !== null) {
            return <h4 className="like-button">❤️</h4>;
        } return <h4 className="like-button">💖</h4>
    }

    setBackground = (colours) => {
        document.body.style.backgroundImage = linear-gradient(90, colours);;
    }

    render() {
        const colours = [this.swatch.colours];

        const swatchColours = []

        for (const [index, value] of colours.list()) {
            swatchColours.push(<div className="colour-div" key={index} style={{
                backgroundColor: {value}
              }}></div>)
        }

        return (
        <div className="swatch-card" onMouseEnter={this.setBackground(colours)}>
            <div className="card-head">
                <h4 className="swatch-name">{this.swatch.name}</h4>
                <h4 className="like-button">❤️</h4>
            </div>
            <div className="swatch-colours">
                {this.swatchColours()}
            </div>
        </div>
    )}
}