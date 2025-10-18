// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  let isXTurn = true; // X goes first
  const gameState = Array(squares.length).fill(null); // to track Xs and Os

  // Initialize squares with the 'square' class and add click event
  squares.forEach((square, index) => {
    square.classList.add('square');

    square.addEventListener('click', () => {
      // Only allow click if the square is empty
      if (!gameState[index]) {
        // Determine current player
        const currentPlayer = isXTurn ? 'X' : 'O';

        // Display X or O in the square
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Update game state
        gameState[index] = currentPlayer;

        // Switch turns
        isXTurn = !isXTurn;
      }
    });
  });
});
