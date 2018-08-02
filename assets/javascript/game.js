var wordBank = ['spike', 'faye', 'ed', 'swordfish'];
var currentWord = wordBank[Math.floor((Math.random() * wordBank.length))];
var wordLength = '';
var guessLeft = 5;
var guessTaken = 0;

function main() {
  $('#guessNumLeft').text(guessLeft);
  $('#guessNumTake').text(guessTaken);
  for (let i = 0; i < currentWord.length ; i++) {
      wordLength = wordLength.concat('-');
  }
  $('#wordContainer').text(wordLength);
  $(document).on("keypress", function(e) {
    let input = String.fromCharCode(e.which);
    let guess = searchString(input);
    let guessPos = wordLength.charAt(guess);
    if((typeof guess === "undefined") && guessLeft != 0) {
      guessTaken++;
      guessLeft--;
      $(".guess-button").text("Try again!");
      $('#guessNumLeft').text(guessLeft);
      $('#guessNumTake').text(guessTaken);
    } else if (guess === -1 && guessLeft === 0) {
      $(".guess-button").text("Game...over.");
    } else {
      wordLength = wordLength.substring(0, guess) + input + wordLength.substring(guess + 1);
      $('#wordContainer').text(wordLength);
      $(".guess-button").text("Keep going!");
    }
  });
}
function searchString(input) {
  for (var i = 0; i < currentWord.length; i++) {
      if(currentWord.charAt(i) === input) {
          return i;
      }
  }
}
$(document).ready(main);
