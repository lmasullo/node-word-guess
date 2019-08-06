/* eslint-disable no-plusplus */
// Import letter.js
const Letter = require('./letter');
// Create a new instance of the constructor
const letter = new Letter();

// Create the object to hold all the letters
const objLetters = {};

// Word Consructor
const Word = function () {
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
      objLetters[key] = splitMovie[i];
      if (splitMovie[i] !== ' ') {
        // Add to the string to display
        concatMovie += `${underscore} `;
      } else {
        concatMovie += `${blank} `;
      }
    }
    console.log('Try and guess the Movie, you have 10 guesses!');
    console.log(concatMovie);
    // console.log(objLetters);

    // return objLetters;
  };

  this.checkLetter = function (guessedLetter) {
    // console.log(guessedLetter);
    console.log(objLetters);

    // Call the function in letter to check if this letter is in the movie name
    const resultCheck = letter.isGuessed(guessedLetter, objLetters);
    // return resultCheck;
    console.log(resultCheck);
  };


  // this.randMovie = objMovie.movie;
  // this.letter = objMovie.letter;
  // console.log(randMovie);
  // console.log(letter);
  // slit the movie string into an array of charactersd

  //! array or object?????????????????
  // Create an object of guessed letters
  // const guessedLetters = {};
  const guessedLetters = [];

  // objMovie comes from index.js after user picks a letter - sends the movie and the chosen letter
  this.createWordArray = function (randMovie) {
    // Add the letter to the guessedLetters object
    const guessedLetter = objMovie.letter;
    console.log(guessedLetter);
    // guessedLetters[guessedLetter] = guessedLetter;
    guessedLetters.push(guessedLetter);

    // Split the movie into an array of characters
    const splitMovie = objMovie.movie.toLowerCase().split('');
    console.log(splitMovie);

    // Guessed letters object
    console.log(guessedLetters);

    // Call Letter.js function isGuessed for each letter in split movie
    let concatMovie = '';
    for (let i = 0; i < splitMovie.length; i++) {
      const checkLetter = letter.isGuessed(guessedLetter, splitMovie[i]);
      console.log(checkLetter);
      concatMovie += `${checkLetter} `;
    }
    console.log(concatMovie);
  };
};

// Export the Word object to index.js
module.exports = Word;


// Create a new Word Constructor object
// let newWord = new Word(RandMovie);

// console.log(RandMovie);


// Call the function in that object to create the array of characters
// newWord.createWordArray();
