var wordBank = ['spike', 'faye', 'ed', 'swordfish'];
var currentWord = wordBank[Math.floor((Math.random() * wordBank.length))];
var wordLength = '';
var guessLeft = 5;
var guessTaken = '';
var found = 0;
var inputArr = [];

function main() {
  $('#guessNumLeft').text(guessLeft);
  $('#guessNumTake').text(guessTaken);
  for (let i = 0; i < currentWord.length ; i++) {
      wordLength = wordLength.concat('-');
  }
  $('#wordContainer').text(wordLength);
  $(document).on("keypress", function(e) {
    //Get the keystroke the user entered
    let input = String.fromCharCode(e.which);
    //Search for character setting an array of where the character was found in the word
    var guess = searchString(input);
    //Depending on the answer, we'll either loop through to fill in all spots, set the single char, or set guess to undefined
    if (found > 1) {
      for (var i = 0; i < found ; i++) {
          guessChar(input, inputArr[i]);
      }
    } else if ( found === 1) {
          guessChar(input, inputArr[0]);
    } else {
       guess = null;
    }
  });
}

//Function to search the current word for a single character
function searchString(input) {
  found = 0;
  inputArr = [];
  for (var i = 0; i < currentWord.length; i++) {
      if(currentWord.charAt(i) === input) {
          found++;
          inputArr.push(i);
      }
  }
}

//Function to guess the user's input
function guessChar(userGuess, guess) {
  this.guess = guess;
  this.input = userGuess;
  if((typeof this.guess === null) && guessLeft != 0) {
    guessTaken++;
    guessLeft--;
    $(".guess-button").text("Try again!");
    $('#guessNumLeft').text(guessLeft);
    $('#guessNumTake').append(this.input);
  } else if (this.guess === null && guessLeft === 0) {
    $(".guess-button").text("Game...over.");
  } else {
    wordLength = wordLength.substring(0, this.guess) + this.input + wordLength.substring(this.guess + 1);
    $('#wordContainer').text(wordLength);
    $(".guess-button").text("Keep going!");
  }
}
$(document).ready(main);
