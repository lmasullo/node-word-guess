/* eslint-disable no-restricted-globals */
// Require the inquirer npm package
const inquirer = require('inquirer');

// Import word.js
const Word = require('./word');

// Create the new Word object
const word = new Word();

//! Set up variables
let numGuesses = 10;

// Array of Movies for the user to try and guess
const arrWord = ['The Matrix', 'Star Wars', 'Star Trek', 'Serenity'];

// Choose a random movie from 0 to 1 less than the array length
const randMovie = arrWord[Math.floor(Math.random() * arrWord.length)];

// console.log(randMovie);

// Create an Object containing the random movie
objMovie = {
  movie: randMovie,
};

// todo Need recursion to keep prompting until numGuesses gets to 0

// Prompt for a letter
inquirer
  .prompt([
    {
      type: 'Input',
      message: 'Please Select a Letter',
      name: 'letter',
      // Validate that the user enters a letter
      validate(value) {
        if (isNaN(value) === true) {
          return true;
        }
        // Prompt for a Letter
        console.log('Please select a Letter');
        return false;
      },
    },
  ])
  .then((answers) => {
    // console.log(answers.letter);

    // Increment the user guesses
    numGuesses--;
    // console.log(numGuesses);

    // Add the chosen letter to the objMovie so I can send to word.js
    objMovie.letter = answers.letter;
    // console.log(`Movie: ${objMovie.movie} - Letter: ${objMovie.letter}`);

    // Call the constructor on word.js and pass in the object with the letter and movie
    word.createWordArray(objMovie);
  });

// Export the random movie to word.js,
// Word.js will construct an object of the random word
// module.exports = objMovie;
// todo *******************************
// Need to prompt the user for a letter
// Create an object with the user's letter and the random word
// Export that object to word.js
