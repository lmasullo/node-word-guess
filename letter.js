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

    // Loop over the movie object (each letter) and find the matching key/values
    Object.keys(objLetters).forEach((key) => {
      // console.log(`Key: ${key} - Value: ${objLetters[key]}`);
      // console.log(concatString);

      // Check if the value = to the user's guessed letter
      if (objLetters[key] === guessedLetter) {
        // Append the guessed letter
        concatString += ` ${guessedLetter}`;
        // Set the isVisited object guessed letter to true
        isVisited[objLetters[key]] = true;
      } else if (objLetters[key] === ' ') {
        // Append a space
        concatString += ` ${space}`;
      } else if (isVisited[objLetters[key]]) {
        // If the guessed letter is in isVisited, append it
        concatString += ` ${objLetters[key]}`;
      } else {
        // Append an Underscore
        concatString += ` ${underscore}`;
      }
    });

    // Display message if guess is correct or not
    if (isVisited[guessedLetter]) {
      console.log('CORRECT!');
    } else {
      console.log('INCORRECT!');
    }

    return concatString;
  }; // End function this is guessed
} // End Letter Constructor

module.exports = Letter;
