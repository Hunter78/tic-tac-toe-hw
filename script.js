//I peeked at the solution//

var count = 1;
var xArray = [];
var yArray = [];
var ticCounter = 0;
var winners = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];

var reset = document.getElementById('reset');
reset.addEventListener("click", remove);
var gameText = document.getElementsByClassName('playerTurn');
gameText[0].innerText = "It is X's turn";
var collection = document.getElementsByClassName('square');

startGame();

function startGame() {
  for (var i = 0; i < collection.length; i++) {
    collection[i].addEventListener("click", selected);
  }
}

function remove() {
  for (var i = 0; i < collection.length; i++) {
    collection[i].innerHTML = "";
   } 
       count = 1;
    xArray = [];
    yArray = [];
  for (var j = 0; i < collection.length; i++) {
    collection[j].removeEventListener("click", selected);
   } 

}

function checkX(array,winners) {
  for (var i = 0; i < winners.length; i++) {
    ticCounter= 0;
      
      for (var j = 0; j < winners.length; j++) {
        if (array.indexOf(winners[i][j]) !== -1) {
            ticCounter++;
        }
        if (ticCounter === 3) {
          gameText[0].innerText = "Game over, X wins!";
          ticCounter = 0;
          remove(); 
        }
      }
  }
}
 
function checkY(array,winners) {
 for (var i = 0; i < winners.length; i++) {
    ticCounter= 0;
    
      for (var j = 0; j < winners.length; j++) {
        if (array.indexOf(winners[i][j]) !== -1) {
            ticCounter++;
        }
        if (ticCounter === 3) {
          gameText[0].innerText = "Game over, O wins!";
          ticCounter = 0;
          remove();
        }
      }
  }
}

function selected() {
  if (count % 2 === 1 && this.innerHTML === "") {
    this.innerHTML = "X";
    xArray.push(this.id.toString().charAt(this.id.length - 1) - 0 ); 
    console.log(xArray);
      if (ticCounter < 4 ) { 
        gameText[0].innerText = "It is O's turn";
        checkX(xArray, winners);
        count++; }

  }
  else if (count % 2 === 0 && this.innerHTML === "")  { 
    this.innerHTML = "O";
    yArray.push(this.id.toString().charAt(this.id.length - 1) - 0);
    console.log(yArray);
      if (ticCounter < 4) {
    gameText[0].innerText = "It is X's turn";
    checkY(yArray, winners);
    count++; }
  }
}