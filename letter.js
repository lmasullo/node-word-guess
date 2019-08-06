/* eslint-disable no-plusplus */
// Get the guessed letter
// let userLetter = process.argv[2];
// console.log(userLetter);

// Letter Constructor
function Letter() {
  // this.wordString = function name(splitMovie) {

  // };

  // This comes from word.js, the guessed letter and the object that contains all the letters of the movie
  this.isGuessed = function (guessedLetter, objAllLetters) {
    // Set the default return variables
    const underscore = '_';
    const space = ' ';
    let concatString = '';

    // Check if guessed letter is in the object objAllLetters
    // const value = guessedLetter;

    // Object.keys(objAllLetters).forEach((key, guessedLetter) => {
    //   // const val = objAllLetters[key];
    //   const val = Object.values(objAllLetters).indexOf(guessedLetter);
    //   console.log(val);
    // });

    // Create the results array to hold the key positions that match
    // const results = [];
    // console.log(objAllLetters);
    // Loop over object and find the matching key/values
    Object.keys(objAllLetters).forEach((key) => {
      // console.log(`${key} - ${objAllLetters[key]}`);


      if (objAllLetters[key].indexOf(guessedLetter) !== -1) {
        objAllLetters[key] = guessedLetter;
        concatString += `${guessedLetter} `;
      } else if (objAllLetters[key] === ' ') {
        objAllLetters[key] = space;
        concatString += `${space} `;
      } else {
        objAllLetters[key] = underscore;
        concatString += `${underscore} `;
      }
    });

    return concatString;
    // console.log(concatString);
    // console.log(objAllLetters);
    // console.log(results);

    // Return the string with letters in the correct spot and underscore everywhere else
    // Loop over results array and Update the object and change the characters
    // for (let i = 0; i < results.length; i++) {

    // }


    // const key = Object.keys(objAllLetters)[Object.values(objAllLetters).indexOf(toSearch)];
    // console.log(key);


    // const key = Object.keys(objAllLetters)[Object.values(objAllLetters).indexOf(value)];

    // const key = OBJECT.keys(objAllLetters)[Object.values(objAllLetters).indexOf(value)];
    // console.log(key);

    // const objTest = {

    //   key1: 'value1',
    //   key2: 'value2',
    //   key3: 'value3',
    //   key4: 'value4',
    // };

    // console.log(objTest);


    // const value = 'value2';

    // const key = Object.keys(objTest)[Object.values(objTest).indexOf(value)];

    // console.log(key); // = key2


    // const guessed = false;

    // Check if guessedLetter matches the splitMovie letter
    // If it is a space return a space
    // if (splitMovieLetter === ' ') {
    //  return space;
    // }

    // If it matches return the letter
    // if (guessedLetter === splitMovieLetter) {
    //   return guessedLetter;
    // }

    // If it doesn't match,return underscore
    // return underscore;


    // const found = splitMovie.find(element => element === guessedLetter);
    // console.log(found);

    // The letter is found
    // if (found != undefined) {
    //   return guessedLetter;
    // }
    // // Letter not found, return underscore
    // return underscore;
  };
}// End Letter Constructor

// let newReq = new Letter(userLetter);

// newReq.isGuessed();


module.exports = Letter;
