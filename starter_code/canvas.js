function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById('hangman');
  this.ctx = this.canvas.getContext('2d');

  

  // Color para trabajar el canvas
  // ctx.fillStyle = "#FF0000";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  
}

HangmanCanvas.prototype.createBoard = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

HangmanCanvas.prototype.drawLines = function () {

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  ctx.font = "70px Arial";
  ctx.fillText(index, 400, 700);;
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};



//-------------- Funciones para dibujar cada linea del Ahorcado----------
HangmanCanvas("Hola") //Eliminar-- Llama al contexto para probar el dibujo

hanganCanvas = new HangmanCanvas();

var line01 = function () {
  ctx.beginPath();
  ctx.moveTo(100, 700);
  ctx.lineTo(250, 700);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line02 = function () {
  ctx.beginPath();
  ctx.moveTo(100, 700);
  ctx.lineTo(175, 650);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line03 = function () {
  ctx.beginPath();
  ctx.moveTo(250, 700);
  ctx.lineTo(175, 650);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line04 = function () {
  ctx.beginPath();
  ctx.moveTo(175, 650);
  ctx.lineTo(175, 100);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line05 = function () {
  ctx.beginPath();
  ctx.moveTo(175, 100);
  ctx.lineTo(500, 100);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line06 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 100);
  ctx.lineTo(500, 150);
  ctx.lineWidth = 6;
  ctx.stroke();
}
// Cabeza
var line07 = function () {
  ctx.beginPath();
  ctx.arc(500, 200, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
var line08 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 250);
  ctx.lineTo(500, 400);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line09 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 400);
  ctx.lineTo(450, 450);
  ctx.lineWidth = 6;
  ctx.stroke();
}
var line10 = function () {
  ctx.beginPath();
  ctx.moveTo(500, 400);
  ctx.lineTo(550, 450);
  ctx.lineWidth = 6;
  ctx.stroke();
}

// Array de funciones para dibujar el Ahoracdo
var line = [line01(), line02(), line03(), line04(), line05(), line06(), line07(), line08(), line09(), line10()];



// line.forEach(function(){

// })