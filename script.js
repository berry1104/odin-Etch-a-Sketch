// create a 16x16 grid of square divs
// Use flexbox to make the divs appear as a grid (versus just one on each line)
const container = document.querySelector('#grid-container');

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}

// Add a hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through the grid like a pen
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'pink';
    });
});