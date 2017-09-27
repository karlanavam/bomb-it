var containerBombIt = document.getElementById('container-bomb-it');
var tableBombIt = document.getElementById('bomb-it');

var spaces = document.getElementsByClassName('space');
var bombs = document.getElementsByClassName('bomb');
var numbers = document.getElementsByClassName('number');

// loop - empty spaces to color space
for (var i = 0 ; i < spaces.length; i++) {
  spaces[i].addEventListener('click', changeColor, false);
}

// function - change empty spaces to color
function changeColor() {
	this.style.backgroundColor = '#000000';
}

// loop - add numbers
for (var i = 0 ; i < numbers.length; i++) {
  numbers[i].addEventListener('click', showNumber, false);
}

// function - show the number of bombs near
function showNumber() {
	this.innerText = "1";
}

// loop - to add bombs
for (var i = 0 ; i < bombs.length; i++) {
  bombs[i].addEventListener('click', BombIt, false);
}

// function - explode bomb
function BombIt() {
	alert(' YOU LOST :( sorry! ');
  containerBombIt.removeChild(tableBombIt);
  containerBombIt.innerHTML = "<img src='https://media.giphy.com/media/3osxYCsLd9qgsgqpwI/giphy.gif' id='imgBomb' alt='BOOM!'>"
}

// button
var buttonReStart = document.getElementById('reStart');
buttonReStart.addEventListener('click', reStart);

// function - restart the game
function reStart() {
  var imgBomb = document.getElementById('imgBomb');
  containerBombIt.removeChild(imgBomb);
  containerBombIt.appendChild(tableBombIt);
}
