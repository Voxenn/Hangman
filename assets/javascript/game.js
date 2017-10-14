var wordBank = ['oppa', 'gangnam', 'kpop', 'psy', 'dancing'];
var currentWord = wordBank[Math.floor((Math.random() * wordBank.length))];
var wordLength = ' ';
var guessLeft = 7;
var guessTaken = 0;

function main() {
  $('#guessNumLeft').text(guessLeft);
  $('#guessNumTake').text(guessTaken);
  for (let i = 0; i < currentWord.length ; i++) {
      wordLength = wordLength.concat('- ');
  }
  $('#wordContainer').text(wordLength);
  $('.guess-button').on('click', function(){
    guessTaken++;
    guessLeft--;
    $('#guessNumLeft').text(guessLeft);
    $('#guessNumTake').text(guessTaken);
    let input = $('#guess').val();
    let guess = currentWord.search(input);
    if(guess === -1 && guessLeft != 0) {
      $(".guess-button").text("Try again!");
    } else if (guess === -1 && guessLeft === 0) {
      $(".guess-button").text("Game...over.");
    } else {
      $(".guess-button").text("Keep going!");
    }
  });
}

function play() {

}

function updateWord() {
  
}

$(document).ready(main);
