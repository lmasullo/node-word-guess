// Require the inquirer npm package
const inquirer = require('inquirer');

// Import word.js
const Word = require('./word');

// Create a new instance of the constructor
const word = new Word();

//! Set up variables
//let numGuesses = 10;

// Array of Movies for the user to try and guess
const arrWord = ['The Matrix', 'Star Wars', 'Star Trek', 'Serenity'];

// Choose a random movie from 0 to 1 less than the array length
const randMovie = arrWord[Math.floor((Math.random() * arrWord.length))];

// Call the Word Constructor Function to display the blank movie to display
word.createBlankMovie(randMovie);

// Set up Recursion Counter
let count = 0;

// Recursive Function
const askQuestion = function () {
  if (count < 5) {
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

        // Call the constructor on word.js and pass in guessed letter
        word.checkLetter(answers.letter);

        // Increment the coutner
        count++;

        // Call the function to start asking for guesses
        askQuestion();
      });
  }// End Count < 5
  else {
    console.log('You have used all your guesses!');
  }
};// End Ask Question Recursive function

// Call the function to start asking for guesses
//askQuestion();
