let swatchCard = document.getElementsByClassName('swatch-card');

// swatch card event listener - mouse enter
swatchCard.onMouseEnter(e) {
    setBackground(e);
}

// update background with selected colours
const setBackground = (swatch) => {
    let colours = swatch.colours

    document.body.style.backgroundImage = "linear-gradient(90deg, "colours")";
}