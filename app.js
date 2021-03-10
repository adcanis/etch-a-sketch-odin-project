
//Globals

const container = document.querySelector('.container');
const resetButton = document.querySelector('.resetButton');
let gridSize = document.querySelector('#size');
let square = document.querySelector('.square');

//Grid 

function makeGrid(gridSize) {
    for (let i = 1; i < gridSize; i++) {
        const div = document.createElement('div');
        container.appendChild(div);

    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement('div');
        square.setAttribute('id', 'innerSquare');
        square.classList.add('square');
        square.style.width = `${960 / gridSize}px`;
        square.style.height = `${500 / gridSize}px`;
        div.appendChild(square);
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'lightgrey';
        })
        }
    }
}

//User select a size

function getSize() {
gridSize.addEventListener('click', function() {
    gridSize = 16;
    makeGrid(gridSize);
})
} getSize();





    