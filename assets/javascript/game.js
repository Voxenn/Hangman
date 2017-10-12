function main() {
  let wordBank = ['oppa', 'gangnam', 'kpop', 'psy', 'dancing'];
  let random = Math.floor((Math.random() * 4) + 1);
  let currentWord = wordBank[random];
  let wordLength = '';
  let guessLeft = 7;
  let guessTaken = 0;

  $('#guessNumLeft').text(guessLeft);
  $('#guessNumTake').text(guessTaken);
  for (let i = 0; i < currentWord.length ; i++){
      wordLength = wordLength.concat('- ');
  }
  $('#wordContainer').text(wordLength);
  $('.guess-button').on('click', function(){
    guessTaken++;
    guessLeft--;
    $('#guessNumLeft').text(guessLeft);
    $('#guessNumTake').text(guessTaken);
    let guess = $('#guess').val();
  })
}

$(document).ready(main);
