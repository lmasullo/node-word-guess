// Letter Constructor
// Takes in the user's guessed letter and the split movie
function Letter() {
  // this.guessedLetter = guessedLetter;
  // this.splitMovie = splitMovie;
  let guessed = '';
  const underscore = '_';
  this.isGuessed = function (guessedLetter, splitMovie) {
    // Check if guessedLetter is in splitMovie
    const found = splitMovie.find(element => element === guessedLetter);
    // console.log(found);
    // console.log(underscore);

    // The letter is found
    if (found !== undefined) {
      guessed = true;
      this.returnValue(guessedLetter, guessed);
    } else {
      // Letter not found, return underscore
      guessed = false;
      this.returnValue(underscore, guessed);
    }
  };
  // Function to return either the letter or undrscore
  this.returnValue = function (value, guess) {
    console.log(`${value} - ${guess}`);
    // const val = {};
    // val.strChar = value;
    // val.guessed = guess;
    // return 't';
  };
} // End Letter Constructor

// const splitMovie = ['t', 'h', 'e', ''];
// const guessedLetter = 'x';
// const newReq = new Letter(guessedLetter, splitMovie);
// newReq.isGuessed();

// export Letter to word.js
module.exports = Letter;
