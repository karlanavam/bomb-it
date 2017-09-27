var containerBombIt = document.getElementById("container-bomb-it");
var tableBombIt = document.getElementById("bomb-it");

var spaces = document.getElementsByClassName("space");
var bombs = document.getElementsByClassName("bomb");
var numbers = document.getElementsByClassName("number");

// loop - empty spaces to color space
// we iterate over all spaces to add the event definition
for (var i = 0; i < spaces.length; i++) {
  // last false indicates we use event bubling for the listener
  spaces[i].addEventListener("click", changeColor, false);
}

// function - change empty spaces to color
function changeColor() {
  //this means this clicked cell
  this.style.backgroundColor = "#000000";
}

// loop - add numbers
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", showNumber, false);
}

// function - show the number of bombs near
function showNumber() {
  this.innerText = "1";
}

// loop - to add bombs
for (var i = 0; i < bombs.length; i++) {
  bombs[i].addEventListener("click", bombIt, false);
}

// function - explode bomb
function bombIt() {
  alert(" YOU LOST :( sorry! ");
  containerBombIt.removeChild(tableBombIt);
  containerBombIt.innerHTML =
    "<img src='https://media.giphy.com/media/3osxYCsLd9qgsgqpwI/giphy.gif' id='imgBomb' alt='BOOM!'>";
}

// button
// we don't need to iterate here because there is only one restart button
var buttonReStart = document.getElementById("reStart");
buttonReStart.addEventListener("click", reStart);

// function - restart the game
function reStart() {
  // we reload the hole page if we want to restart
  location.reload();
}
