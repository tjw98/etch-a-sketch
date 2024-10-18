function createGrid() {
  const squares = [];

  for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement("div");
    mainContainer.appendChild(squares[i]);
    squares[i].classList.add("square");
  }
}

const mainContainer = document.querySelector(".main-container");
createGrid();

mainContainer.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
  
});

mainContainer.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "#E0E0E0";
});
