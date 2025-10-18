// tic-tac-toe.js

window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const statusDiv = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');
  let isXTurn = true; // X goes first
  const gameState = Array(squares.length).fill(null); // Track Xs and Os

  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];

  // Function to check for a winner
  function checkWinner() {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        statusDiv.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
        statusDiv.classList.add('you-won');

        // Disable further clicks
        squares.forEach((square, index) => {
          if (!gameState[index]) {
            square.removeEventListener('click', square.clickHandler);
          }
        });
        return true;
      }
    }
    return false;
  }

  // Click handler
  function handleClick(index) {
    if (!gameState[index]) {
      const currentPlayer = isXTurn ? 'X' : 'O';
      squares[index].textContent = currentPlayer;
      squares[index].classList.add(currentPlayer);
      gameState[index] = currentPlayer;

      // Check winner
      if (!checkWinner()) {
        isXTurn = !isXTurn;
      }
    }
  }

  // Initialize squares
  squares.forEach((square, index) => {
    square.classList.add('square');

    // Hover effects
    square.addEventListener('mouseover', () => {
      if (!gameState[index]) square.classList.add('hover');
    });
    square.addEventListener('mouseleave', () => square.classList.remove('hover'));

    // Click events
    square.clickHandler = () => handleClick(index);
    square.addEventListener('click', square.clickHandler);
  });

  // New Game button
  newGameBtn.addEventListener('click', () => {
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
    });
    gameState.fill(null);
    isXTurn = true;

    statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusDiv.classList.remove('you-won');
  });
});
