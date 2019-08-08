/* eslint-disable no-plusplus */

// Import letter.js
const Letter = require('./letter');

// Create a new instance of the constructor
const letter = new Letter();

// Word Consructor
const Word = function () {
  // Create the object to hold all the letters
  this.objLetters = {};

  // Create the object to hold the guessed letters
  this.visited = {};

  // Creat the initial blank movie object and display
  this.createBlankMovie = function (randMovie, answer) {
    // If the movie was guessed and this is a new movie, clear the objects
    if (answer === true) {
      this.objLetters = {};
      this.visited = {};
    }

    // Split the movie into an array of characters
    const splitMovie = randMovie.toLowerCase().split('');

    // Create the default characters
    let concatMovie = '';
    const underscore = '_';
    const blank = ' ';
    for (let i = 0; i < splitMovie.length; i++) {
      // Add to the objLetters
      const key = i;
      this.objLetters[key] = splitMovie[i];
      if (splitMovie[i] !== ' ') {
        // Add to the string to display
        concatMovie += ` ${underscore} `;
      } else {
        concatMovie += ` ${blank} `;
      }
    }

    // Display the initial message and the random movie
    console.log('Try and guess the Movie!');
    console.log(concatMovie);
  };

  // This function will send the guessed letter to letters.js
  this.checkLetter = function (guessedLetter) {
    // Call the function in letter to check if this letter is in the movie name
    const resultCheck = letter.isGuessed(guessedLetter, this.objLetters, this.visited);

    // Need to compare the 2 arrays to tell when the user has guessed the whole movie
    // Create an array to hold all the letters
    let arrLetters = [];
    Object.keys(this.objLetters).forEach((key) => {
      if (this.objLetters[key] !== ' ') {
        arrLetters.push(this.objLetters[key]);
      }
    });

    // Remove duplicates from the array of letters
    arrLetters = arrLetters.filter((v, i, a) => a.indexOf(v) === i);

    // Put the concatinated string into an array of characters
    let arrConcat = resultCheck.toLowerCase().split('');

    // Remove duplicates
    arrConcat = arrConcat.filter((v, i, a) => a.indexOf(v) === i);

    // Delete the blank space
    arrConcat = arrConcat.filter(entry => entry.trim() !== '');

    // Now compare
    const strLetters = JSON.stringify(arrLetters);
    const strVisited = JSON.stringify(arrConcat);

    // If they are equal, display message and return done
    // Return done will trigger the reset
    if (strLetters === strVisited) {
      const done = true;
      console.log('Your Got it Right! Next Word.');
      return done;
    }

    // Return the concatenated string
    return resultCheck;
  }; // End checkLetter function
}; // End Constructor Word

// Export the Word object to index.js
module.exports = Word;
