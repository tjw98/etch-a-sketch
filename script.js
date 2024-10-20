function createGrid(length) {
  const squares = [];
  const gridSquares = length * length;

  for (let i = 0; i < gridSquares; i++) {
    squares[i] = document.createElement("div");
    squares[i].style.height = `${sketchPadPx / (Math.sqrt(gridSquares))}px`;
    squares[i].style.width = `${sketchPadPx / (Math.sqrt(gridSquares))}px`;
    squares[i].setAttribute("data-count", "0");
    mainContainer.appendChild(squares[i]);
    squares[i].classList.add("square");
  }
}

function removeGrid() {
  mainContainer.textContent = "";
}

function randomiseColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `RGB(${red}, ${green}, ${blue})`;
}

function drawOpaque(e) {
  const shades = [
  "#eeeeee",
  "#cccccc",
  "#aaaaaa",
  "#888888",
  "#666666",
  "#444444",
  "#333333",
  "#222222",
  "#111111",
  "#000000" 
  ];

  e.target.dataset.count = parseInt(e.target.dataset.count) +1;
  console.log(e.target.dataset.count);
  for (let i = 0; i < shades.length; i++) {
    if (parseInt(e.target.dataset.count) == i + 1) {
      e.target.style.backgroundColor = shades[i];
    }
  }
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
  if (opacity.checked == false) {
    e.target.dataset.count = 0;
  }
  
  if (rainbow.checked == true) {
    opacity.checked == false;
    e.target.style.backgroundColor = randomiseColor();
  } else if (opacity.checked == true) {
    rainbow.checked == false;
    drawOpaque(e);
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