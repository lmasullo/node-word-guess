/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
// Require the inquirer npm package
const inquirer = require('inquirer');

// Import word.js
const Word = require('./word');

// Create a new instance of the constructor
const word = new Word();

//! Set up variables
// Array of Movies for the user to try and guess
const arrWord = ['The Matrix', 'Star Wars', 'Star Trek', 'Serenity'];

// Choose a random movie from 0 to 1 less than the array length
const randMovie = arrWord[Math.floor(Math.random() * arrWord.length)];

// Call the Word Constructor Function to display the blank movie to display
word.createBlankMovie(randMovie);


// Set up Recursion Counter
let count = 0;

// Recursive Function
const askQuestion = function () {
  let numGuesses = 10;
  if (count < numGuesses) {
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

        // Decrement the user's guesses
        numGuesses--;
        console.log(`NumGuesses ${numGuesses}`);

        // Increment the coutner
        count++;
        console.log(`Count: ${count}`);
        console.log(`You have ${numGuesses} guesses remaining.`);

        // Call the constructor on word.js and pass in guessed letter
        word.checkLetter(answers.letter);

        // Call the function to continue asking for guesses
        askQuestion();
      });
    // End Count
  } else {
    console.log("You have used all your guesses!\nHere's a new word");
    // Re-call the Word Constructor Function to display the blank movie to display
    word.createBlankMovie(randMovie, numGuesses);
  }
}; // End Ask Question Recursive function

// Call the function to start asking for guesses
askQuestion();
