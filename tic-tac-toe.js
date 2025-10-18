// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  let isXTurn = true; // X goes first
  const gameState = Array(squares.length).fill(null); // to track Xs and Os

  squares.forEach((square, index) => {
    // Exercise 1: Add 'square' class
    square.classList.add('square');

    // Exercise 2: Click to place X or O
    square.addEventListener('click', () => {
      if (!gameState[index]) {
        const currentPlayer = isXTurn ? 'X' : 'O';
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;
        isXTurn = !isXTurn;
      }
    });

    // Exercise 3: Hover effect
    square.addEventListener('mouseover', () => {
      if (!gameState[index]) { // only hover if square is empty
        square.classList.add('hover');
      }
    });

    square.addEventListener('mouseleave', () => {
      square.classList.remove('hover');
    });
  });
});
