// create a 16x16 grid of square divs
// Use flexbox to make the divs appear as a grid (versus just one on each line)
const container = document.querySelector('#grid-container');
let gridSize = 55;

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
}


createGrid(gridSize);


// Add a hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through the grid like a pen

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'pink';
    });
});
