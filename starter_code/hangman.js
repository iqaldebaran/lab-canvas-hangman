var hangman;

function Hangman() {
  this.words = ["Cheese", "JavaScript", "Spotify", "Facebook"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  var position = Math.floor(Math.random() * this.words.length);
  this.secretWord = this.words[position];
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function(keyCode) {
// Le puse  la propiedad keyCode para obtener el numero - funciona
  return keyCode.keyCode > 64 && keyCode.keyCode < 91;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return !this.letters.includes(key);
};

Hangman.prototype.addCorrectLetter = function(i) {
  var letter = i;
  if (this.secretWord.toUpperCase().includes(letter.toUpperCase())) {
    this.guessedLetter += letter;
    return this.guessedLetter;
  }
  return this.addWrongLetter(i);
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.letters.push(letter);
  return this.letters;
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft == 0;
};

Hangman.prototype.checkWinner = function() {
  return this.secretWord.length == this.guessedLetter.length;
};

document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  console.log(hangman.getWord());

};


document.onkeydown = function(e) {
  console.log(hangman.secretWord);

  console.log(hangman.checkIfLetter(e));
  console.log("Correcta",hangman.addCorrectLetter(e.key));
  console.log("INCorrecta",hangman.addWrongLetter(e.key));

  console.log(e);
  // console.log(hangman.checkClickedLetters(e))
  hanganCanvas.writeCorrectLetter(e.key)
  
};
