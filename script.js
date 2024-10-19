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

function randomiseColor() {
  const red = Math.floor(Math.random() * 257);
  const green = Math.floor(Math.random() * 257);
  const blue = Math.floor(Math.random() * 257);
  return `RGB(${red}, ${green}, ${blue})`;
}

const sketchPadPx = 600;
const mainContainer = document.querySelector(".main-container");
const promptBtn = document.querySelector(".create-grid");
const resetBtn = document.querySelector(".reset");
const input = document.querySelector("input");
const rainbow = document.querySelector("#rainbow");
const opacity = document.querySelector("#opacity");
let gridLength = 16;


// Event listeners to change hover effect on grid
mainContainer.addEventListener("mouseover", (e) => {
  if (rainbow.checked == true) {
    e.target.style.backgroundColor = randomiseColor();
  } else {
    e.target.style.backgroundColor = "black";
  }
});

// Event listener to take user input and change grid size
promptBtn.addEventListener("click", () => {
  // Limit size of grid to 100 x 100 for performance
  if (input.value <= 100) {
    removeGrid();
    gridLength = input.value;
    input.value = "";
    createGrid(gridLength);
  } else {
    alert("Please limit grid size to 100 or less.");
  }
});

resetBtn.addEventListener("click", () => {
  removeGrid();
  createGrid(gridLength);
});

createGrid(gridLength);