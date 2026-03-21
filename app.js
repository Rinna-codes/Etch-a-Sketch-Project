const container = document.getElementById("grid-container");

function createGridCells() {
    for (let i = 0; i < 256; i++) {
        const cells = document.createElement('div');
        cells.classList.add('grid-cell');
        container.appendChild(cells);
    }
}

createGridCells()