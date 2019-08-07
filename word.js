/* eslint-disable no-plusplus */
// Import letter.js
const Letter = require('./letter');
// Create a new instance of the constructor
const letter = new Letter();

// Word Consructor
const Word = function () {
  // Create the object to hold all the letters
  this.objLetters = {};

  this.visited = {};

  // Creat the initial blank movie object and display
  this.createBlankMovie = function (randMovie) {
    console.log(randMovie);
    // Split the movie into an array of characters
    const splitMovie = randMovie.toLowerCase().split('');
    // console.log(splitMovie);

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

    // console.log(this.objLetters);
    console.log('Try and guess the Movie!');
    console.log(concatMovie);
    // console.log(objLetters);

    // return objLetters;
  };

  this.checkLetter = function (guessedLetter) {
    // console.log(guessedLetter);
    // console.log(this.objLetters);

    // Call the function in letter to check if this letter is in the movie name
    const resultCheck = letter.isGuessed(guessedLetter, this.objLetters, this.visited);
    // return resultCheck;
    console.log(resultCheck);
  }; // End checkLetter function
}; // End Constructor Word

// Export the Word object to index.js
module.exports = Word;
