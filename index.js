/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */

// Require the inquirer npm package
const inquirer = require('inquirer');

// Import word.js
const Word = require('./word');

// Create a new instance of the constructor
const word = new Word();

// Array of Movies for the user to try and guess
const arrWord = ['The Matrix', 'Star Wars', 'Star Trek', 'Serenity'];

// Choose a random movie from 0 to 1 less than the array length
let randMovie = arrWord[Math.floor(Math.random() * arrWord.length)];

// Set up Recursion Counter
let count = 0;

// Set number of guesses
let numGuesses = 0;

// Call the Word Constructor Function to display the blank movie to display
word.createBlankMovie(randMovie);

// Reset function
function reset(answer) {
  // Choose a random movie from 0 to 1 less than the array length
  randMovie = arrWord[Math.floor(Math.random() * arrWord.length)];

  // Send the random movie to word.js with answer is true, so no it's a new turn
  word.createBlankMovie(randMovie, answer);

  // Set the guessReset variable
  const guessReset = true;

  // Start the questions again and reset the guesses
  askQuestion(guessReset);
}

// Recursive Function
const askQuestion = function (guessReset) {
  // console.log(`Reset: ${guessReset}`);

  // Set the number of guesses allowed
  numGuesses = 10;

  // If the user guessed the movie correctly, reset the counter
  if (guessReset === true) {
    count = 0;
  }

  // Start the Quesioning
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
        // Increment the counter
        count++;

        // Calculate the user's guesses remaining
        numGuesses -= count;

        // Display the number of guesses remaining
        console.log(`You have ${numGuesses} guesses remaining.`);

        // Call the constructor on word.js and pass in guessed letter
        const answer = word.checkLetter(answers.letter);

        // Display the concatenated string is still guessing letters
        // If the result was true, they guessed right, don't show them "true"
        if (answer !== true) {
          console.log(answer);
        }

        // The user has guessed the movie correctly and need to choose a new movie and restart
        if (answer === true) {
          // Call the reset function
          reset(answer);
        } else {
          // Call the function to continue asking for guesses
          askQuestion();
        }
      });
    // End Count
  } else {
    console.log("You have used all your guesses!\nHere's a new word.");
    // They have used all their guesses, Call the reset function
    const answer = true;
    reset(answer);
  }
}; // End Ask Question Recursive function

// Call the function to start asking for guesses
askQuestion();
