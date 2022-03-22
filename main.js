let gridSize = 16;
let percent = 100 / gridSize;

const resetButton = document.querySelector('.reset');
const container = document.querySelector('.container');

resetButton.addEventListener('click', function() {
  gridSize = prompt('?');
  console.log(gridSize);
  DeleteGrid();
  makeGrid(gridSize);
  styleGrid();
});


function DeleteGrid() {
  let grid = document.querySelectorAll('.box');
  for (grid of grid) {
  container.removeChild(grid)
  }
}

function makeGrid(size) {
for (let i=0; i < (size * size); i++) {
    if (gridSize <= 100) {
      const boxDiv = document.createElement('div');
      boxDiv.classList.add('box');
      container.appendChild(boxDiv);
    } else {
      alert("100 IS THE MAX");
      break;
    }
  }
}

function styleGrid() {
  let percent = 100 / gridSize;
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  const blockSize = document.querySelectorAll('.box');
  blockSize.forEach(blockSize => blockSize.style.width = `${percent}%`);
  blockSize.forEach(blockSize => blockSize.style.paddingBottom = `${percent}%`);
  recolor();
}

function recolor() {
  const blockSize = document.querySelectorAll('.box');
  blockSize.forEach(blockSize => blockSize.addEventListener('mouseenter', function(){
    let randomColor = Math.floor(Math.random()*13773325).toString(16);
    blockSize.style.backgroundColor = "#" + randomColor;
  }));
}

//This is the non-arrow function version of the above
//box.forEach(function(blockSize){
//    blockSize.addEventListener('mouseenter', function(){
//        BlockSize.style.backgroundColor = 'green';
//    })
//})

makeGrid(gridSize);
styleGrid();




