const container = document.querySelector('.grid-container');
const squares = 16;

function createGrid() {
  for (let i = 1; i <= squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
}

createGrid()