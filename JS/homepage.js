class Swatch {
    constructor() {
        super()
    }

    render() {
        return <div className="swatch-card" onmouseenter={updateBackground()}>
            <div className="card-head">
                <h4 className="swatch-name">${this.swatch.name}</h4>
                <h4 className="like-button">❤</h4>
            </div>
            <div className="swatch-colours">
                <div className="colour-one"></div>
                <div className="colour-two"></div>
                <div className="colour-three"></div>
                <div className="colour-four"></div>
                <div className="colour-five"></div>
            </div>
        </div>
    }
}


// turn swatches into a string to use for background

updateBackground = (e) => {
    let currentSwatch = e.target;
    let swatchColours = currentSwatch.swatch - colours

    body.style.updateBackground = linear - gradient(90deg, `${swatchColours}`)
}