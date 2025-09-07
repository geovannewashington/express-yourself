function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFah(celcius) {
    return (celcius * 9) / 5 + 32;
}

// Like a default export:

module.exports = {
    generateRandomNumber,
    celciusToFah
};

