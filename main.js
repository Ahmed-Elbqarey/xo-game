let text = document.getElementById("text");
let turn = "x";
let squares = [];

function theWinner(num1, num2, num3) {
  text.innerHTML = `${squares[num1]} winner `;
  document.getElementById("square" + num1).style.backgroundColor = "#000";
  document.getElementById("square" + num2).style.backgroundColor = "#000";
  document.getElementById("square" + num3).style.backgroundColor = "#000";
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("square" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    theWinner(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    theWinner(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    theWinner(7, 8, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    theWinner(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    theWinner(3, 5, 7);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    theWinner(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    theWinner(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    theWinner(3, 6, 9);
  }
}

function game(id) {
  let square = document.getElementById(id);
  if (turn === "x" && square.innerHTML == "") {
    square.innerHTML = "x";
    text.innerHTML = "o";
    turn = "o";
  } else {
    square.innerHTML = "o";
    text.innerHTML = "x";
    turn = "x";
  }
  winner();
}