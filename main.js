let grid = 256

const container = document.querySelector('.container');

for (let i=0; i < (grid); i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

let box = document.querySelectorAll('.box');

box.forEach(box => box.addEventListener('click', function(){
    box.style.backgroundColor = 'black';
}));
//This is the non-arrow function version of the above
//box.forEach(function(box){
//    box.addEventListener('mouseenter', function(){
//        box.style.backgroundColor = 'green';
//    })
//})

let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => document.location.reload());
resetButton.addEventListener('click', resize);

function resize(gridSize) {
    gridSize = prompt('New grid size?');
    console.log(gridSize);
}

//CONTINUE WITH FINDING A WAY TO RESIZE THE BLOCKS WITHIN THE BIG SQUARE