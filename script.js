let currentPlayer = 'X';
const cells = document.querySelectorAll('.btn');
const resultContainer = document.querySelector('.result');
const resetButton = document.getElementById('resetBtn');


function checkResult() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].value && cells[a].value === cells[b].value && cells[a].value === cells[c].value) {
      resultContainer.textContent = `Player ${currentPlayer} wins!`;
      resetButton.disabled = false;
      return;
    }
  }

  if ([...cells].every(cell => cell.value)) {
    resultContainer.textContent = "It's a draw!";
    resetButton.disabled = false;
  }
}


function cellClick(e) {
  if (!e.target.value) {
    e.target.value = currentPlayer;
    e.target.disabled = true;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
    checkResult();
  }
}


function resetGame() {
  cells.forEach(cell => {
    cell.value = '';
    cell.disabled = false;
  });
  currentPlayer = 'X';
  resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
  resetButton.disabled = true;
}


cells.forEach(cell => cell.addEventListener('click', cellClick));
resetButton.addEventListener('click', resetGame);


resetGame();