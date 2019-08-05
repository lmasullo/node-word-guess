// Get the guessed letter
// let userLetter = process.argv[2];
// console.log(userLetter);

function Letter() {
  this.isGuessed = function (guessedLetter, splitMovie) {
    // let userChar = userChar;
    const underscore = '_';
    const guessed = false;

    // Check if guessedLetter is in splitMovie
    const found = splitMovie.find(element => element === guessedLetter);
    console.log(found);

    // The letter is found
    if (found != undefined) {
      return guessedLetter;
      // Letter not found, return underscore
    }
    return underscore;
  };
} // End Letter Constructor

// let newReq = new Letter(userLetter);

// newReq.isGuessed();

module.exports = Letter;
