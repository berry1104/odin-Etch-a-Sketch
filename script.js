// create a 16x16 grid of square divs
// Use flexbox to make the divs appear as a grid (versus just one on each line)
const container = document.querySelector('#grid-container');
let gridSize = 16;
let cells = document.querySelectorAll('.cell');

function createGrid(numberOfSquares) {
    container.style.setProperty('--items-per-row', numberOfSquares);

    // Clear previous cells if any
    container.innerHTML = '';

    // Create cells
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        // Add additional cell setup here if needed
        container.appendChild(cell);
    }
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'pink';
        });
    });

}



createGrid(16);



// cells.forEach(cell => {
//     cell.addEventListener('mouseover', () => {
//         cell.style.backgroundColor = 'pink';
//     });
// });


function clearGrid() {
    cells.forEach(cell => {
        cell.style.backgroundColor = '#f2f0f0';
    });
}




function resizeGrid() {
    gridSize = prompt('Enter the number of squares per side (1-100):');
    if (gridSize > 100) {
        gridSize = 100;
    } else if (gridSize < 1) {
        gridSize = 1;
    }
    createGrid(gridSize);
}





const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);

const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener('click', resizeGrid);

// Add a hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through the grid like a pen

