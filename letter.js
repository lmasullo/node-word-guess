//Get the guessed letter
//let userLetter = process.argv[2];
//console.log(userLetter);


function Letter (){
  this.isGuessed = function (guessedLetter, splitMovie) {

    //let userChar = userChar;
    let underscore = '_';
    let guessed = false;


    //Check if guessedLetter is in splitMovie
    var found = splitMovie.find(function(element) {
      return element === guessedLetter;
    });
    console.log(found);

    //The letter is found
    if(found != undefined){
      return guessedLetter
    //Letter not found, return underscore
    }else{
      return underscore;
    }
    
  }
}//End Letter Constructor 

//let newReq = new Letter(userLetter);

//newReq.isGuessed();


module.exports = Letter;