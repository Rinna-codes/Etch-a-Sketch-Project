const container = document.getElementById("grid-container");
const gridSizeBtn = document.getElementById('grid-number');

function createGridCells(userInput) {
    const gridSize = userInput * userInput;
    for (let i = 0; i < gridSize; i++) { // 256 came from the total of 16x16 
        const cells = document.createElement('div');
        cells.classList.add('grid-cell'); // made a class called 'grid-cell' to appear on html web page
        container.appendChild(cells); // what made the cells to appear in the web page
    }
};

// Trigger a hover effect over the grid cells to change to a blue
container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('grid-cell')) { // checks if the event(mouse) is "over" the grid cells
        event.target.style.backgroundColor = 'blue';
    }
});

gridSizeBtn.addEventListener('click', () => {
    const userInput = prompt("What grid size would you like to set (#x#): ");

    if (userInput >= 100) {
        alert("Woah, that's a bit too big! Please re-enter a bit smaller grid size");
        newInput = prompt("What grid size would you like to set (#x#): ");
        createGridCells(newInput);
    } else {
        createGridCells(userInput);
    }
});

baseGrid();