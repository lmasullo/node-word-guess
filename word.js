// Import letter.js
const Letter = require('./letter');

const letter = new Letter();

// Word Consructor
const Word = function () {
  // this.randMovie = objMovie.movie;
  // this.letter = objMovie.letter;
  // console.log(randMovie);
  // console.log(letter);
  // slit the movie string into an array of charactersd

  // Create an object of guessed letters
  const guessedLetters = {};

  this.createWordArray = function (objMovie) {
    // Add the letter to the guessedLetters object
    const guessedLetter = objMovie.letter;
    console.log(guessedLetter);
    guessedLetters[guessedLetter] = guessedLetter;

    // Split the movie into an array of characters
    const splitMovie = objMovie.movie.toLowerCase().split('');
    console.log(splitMovie);
    console.log(guessedLetters);

    // Call Letter.js function
    const checkLetter = letter.isGuessed(guessedLetter, splitMovie);
    console.log(checkLetter);
  };
};

// Export the Word object to index.js
module.exports = Word;

// Create a new Word Constructor object
// let newWord = new Word(RandMovie);

// console.log(RandMovie);

// Call the function in that object to create the array of characters
// newWord.createWordArray();
