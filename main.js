let gridSize = prompt('What size grid would you like?');
let length = gridSize;
let grid = (length * length);
let percent = 100 / gridSize;

const container = document.querySelector('.container');

for (let i=0; i < (grid); i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}

const box = document.querySelectorAll('.box');
box.forEach(box => box.style.width = `${percent}%`)
box.forEach(box => box.style.paddingBottom = `${percent}%`)

box.forEach(box => box.addEventListener('mouseenter', function(){
    box.style.backgroundColor = 'green';
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
    console.log(gridSize);
}


//CONTINUE WITH FINDING A WAY TO RESIZE THE BLOCKS WITHIN THE BIG SQUARE