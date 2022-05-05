//First I want my grid to be created based on the value of gridDimension
const myForm = document.querySelector('#myForm');
const gridDim = document.querySelector('#gridDim');
const container = document.querySelector('.container');
const numInputs = document.querySelectorAll('input[type=number]');

numInputs.forEach(function(input){
    input.addEventListener('change', function(e){
        if(e.target.value == ''){
            e.target.value = 1;
        }
    })
});
function createSquares(){
    let gridSquares = gridDim.value * gridDim.value;
    for(i = 0; i < gridSquares; i++){
        let newDiv = document.createElement('div');
        container.appendChild(newDiv);
    }
}
function setDimensions(){
    container.setAttribute('style', `grid-template: repeat(${gridDim.value}, 1fr) / repeat(${gridDim.value}, 1fr);`);
}
myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(`${gridDim.value}` + ' x ' + `${gridDim.value}`);
    createSquares();
    setDimensions();
});
createSquares();
setDimensions();