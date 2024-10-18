function createGrid() {
  const squares = [];

  for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement("div");
    squares[i].style.height = `${sketchPadPx / (Math.sqrt(256))}px`;
    squares[i].style.width = `${sketchPadPx / (Math.sqrt(256))}px`;
    mainContainer.appendChild(squares[i]);
    squares[i].classList.add("square");
  }
}

const sketchPadPx = 600;
const mainContainer = document.querySelector(".main-container");
const promptBtn = document.querySelector("button");
const input = document.querySelector("input");
let gridLength = 16;

// Event listeners to change hover effect on grid
mainContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});

mainContainer.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "#E0E0E0";
});

// Event listener to take user input
promptBtn.addEventListener("click", () => {
  gridLength = input.value;
  input.value = "";
});

createGrid();