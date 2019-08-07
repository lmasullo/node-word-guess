/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Get the guessed letter
// let userLetter = process.argv[2];
// console.log(userLetter);

// Letter Constructor
function Letter() {
  // This comes from word.js
  // The guessed letter and the object that contains all the letters of the movie
  this.isGuessed = function (guessedLetter, objAllLetters, isVisited) {
    // Set the default return variables
    const underscore = '_';
    const space = ' ';
    let concatString = '';

    // Create the results array to hold the key positions that match
    // const results = [];
    // console.log(objAllLetters);
    // Loop over object and find the matching key/values
    Object.keys(objAllLetters).forEach((key) => {
      // console.log(`${key} - ${objAllLetters[key]}`);
      if (objAllLetters[key] === guessedLetter) {
        // objAllLetters[key] = guessedLetter;
        concatString += `${guessedLetter} `;
        isVisited[objAllLetters[key]] = true;
      } else if (objAllLetters[key] === ' ') {
        // objAllLetters[key] = space;
        concatString += `${space} `;
      } else if (isVisited[objAllLetters[key]]) {
        concatString += objAllLetters[key];
      } else {
        // else if (!isVisited[objAllLetters[key]]) {
        // objAllLetters[key] = underscore;
        concatString += `${underscore} `;
      }
    });
    // console.log(isVisited);
    // console.log(objAllLetters);

    return concatString;
  }; // End function this is guessed
} // End Letter Constructor

module.exports = Letter;
