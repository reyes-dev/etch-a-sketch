//First I want my grid to be created based on the value of gridDimension
let gridInput = prompt('Enter dimensions: ', 0);
let gridSquares = gridInput * gridInput;
const container = document.querySelector('.container');
for(i = 0; i < gridSquares; i++){
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
}
container.setAttribute('style', `grid-template: repeat(${gridInput}, 1fr) / repeat(${gridInput}, 1fr);`);