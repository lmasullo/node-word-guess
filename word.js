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
    console.log(resultCheck);

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
    arrConcat = arrConcat.filter(entry => entry.trim() != '');

    // console.log(arrUnique);
    // console.log('arrConcat');
    // console.log(arrConcat);

    // Now compare
    const strLetters = JSON.stringify(arrLetters);
    const strVisited = JSON.stringify(arrConcat);

    // // Create an array to hold all the visited letters
    // let arrVisited = [];
    // Object.keys(isVisited).forEach((key) => {
    //   arrVisited.push(key);
    // });

    // // Sort the arrays
    // arrUnique = arrUnique.sort();
    // arrVisited = arrVisited.sort();
    // // console.log(arrUnique);
    // // console.log(arrVisited);

    // const strLetters = JSON.stringify(arrUnique);
    // const strVisited = JSON.stringify(arrVisited);
    // // console.log(strLetters);
    // // console.log(strVisited);

    if (strLetters === strVisited) {
      // const done = true;
      console.log('Your Got it Right! Next Word.');
      return 'done';
    }

    // return resultCheck;
    // console.log(resultCheck);
  }; // End checkLetter function
}; // End Constructor Word

// Export the Word object to index.js
module.exports = Word;
