/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
// Get the guessed letter
// let userLetter = process.argv[2];
// console.log(userLetter);

// Letter Constructor
function Letter() {
  // This comes from word.js
  // The guessed letter and the object that contains all the letters of the movie
  // and the isVisited object to keep track of the guessed letters
  this.isGuessed = function (guessedLetter, objLetters, isVisited) {
    // Set the default return variables
    const underscore = '_';
    const space = ' ';
    let concatString = '';

    // Loop over object and find the matching key/values
    Object.keys(objLetters).forEach((key) => {
      console.log(`Key: ${key} - Value: ${objLetters[key]}`);
      if (objLetters[key] === guessedLetter) {
        concatString += `${guessedLetter} `;
        isVisited[objLetters[key]] = true;
      } else if (objLetters[key] === ' ') {
        // objLetters[key] = space;
        concatString += `${space} `;
      } else if (isVisited[objLetters[key]]) {
        concatString += objLetters[key];
      } else {
        // else if (!isVisited[objLetters[key]]) {
        // objLetters[key] = underscore;
        concatString += `${underscore} `;
      }
    });
    // console.log(isVisited);
    // console.log(objLetters);

    return concatString;
  }; // End function this is guessed
} // End Letter Constructor

module.exports = Letter;
