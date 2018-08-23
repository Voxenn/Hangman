var wordBank = ['spike', 'faye', 'edward', 'swordfish'];
var currentWord = wordBank[Math.floor((Math.random() * wordBank.length))];
var hint = '';
var wordLength = '';
var guessLeft = 5;
var guessTaken = '';
var found = 0;
var inputArr = [];

function main() {
  $('#guessNumLeft').text(guessLeft);
  $('#guessNumTake').text(guessTaken);
  hint = 'assets/images/' + currentWord + '.jpg';
  $('img').attr("src", hint);
  for (let i = 0; i < currentWord.length ; i++) {
      wordLength = wordLength.concat('-');
  }
  $('#wordContainer').text(wordLength);
  userGuessFunc();
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
  return inputArr;
}

//Function to guess the user's input
function guessChar(userGuess, guess) {
  this.guess = guess;
  this.input = userGuess;
  if((this.guess === null) && guessLeft != 1) {
    guessTaken++;
    guessLeft--;
    $(".guess-button").text("Try again!");
    $('#guessNumLeft').text(guessLeft);
    $('#guessNumTake').append(this.input);
  } else if (this.guess === null && guessLeft === 1) {
    guessLeft--;
    $('#guessNumLeft').text(guessLeft);
    $(".guess-button").text("Game...over. Restarting in 3 seconds!");
    setTimeout(resetGame, 3000);
  } else {
    wordLength = wordLength.substring(0, this.guess) + this.input + wordLength.substring(this.guess + 1);
    $('#wordContainer').text(wordLength);
    $(".guess-button").text("Keep going!");
  }
  if (currentWord === wordLength) {
    $(".guess-button").text("You win!");
    setTimeout(resetGame, 3000);
  }
}

function userGuessFunc(){
  $(document).on("keypress", function(e) {
    //Get the keystroke the user entered
    let input = String.fromCharCode(e.which);
    //Search for character setting an array of where the character was found in the word
    let guess = searchString(input);
    //Depending on the answer, we'll either loop through to fill in all spots, set the single char, or set guess to undefined
    if (found > 1) {
      for (var i = 0; i < found ; i++) {
          guessChar(input, inputArr[i]);
      }
    } else if ( found === 1) {
          guessChar(input, inputArr[0]);
    } else {
          guessChar(input, null);
    }
  });
}
function resetGame(){
  location.reload();
}
$(document).ready(main);
