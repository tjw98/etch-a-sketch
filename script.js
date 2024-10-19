function createGrid(length) {
  const squares = [];
  const gridSquares = length * length;

  for (let i = 0; i < gridSquares; i++) {
    squares[i] = document.createElement("div");
    squares[i].style.height = `${sketchPadPx / (Math.sqrt(gridSquares))}px`;
    squares[i].style.width = `${sketchPadPx / (Math.sqrt(gridSquares))}px`;
    mainContainer.appendChild(squares[i]);
    squares[i].classList.add("square");
  }
}

function removeGrid() {
  mainContainer.textContent = "";
}

const sketchPadPx = 600;
const mainContainer = document.querySelector(".main-container");
const promptBtn = document.querySelector(".create-grid");
const resetBtn = document.querySelector(".reset");
const input = document.querySelector("input");
let gridLength = 16;

// Event listeners to change hover effect on grid
mainContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});

// Event listener to take user input and change grid size
promptBtn.addEventListener("click", () => {
  removeGrid();
  gridLength = input.value;
  input.value = "";
  createGrid(gridLength);
});

resetBtn.addEventListener("click", () => {
  removeGrid();
  createGrid(gridLength);
});

createGrid(gridLength);