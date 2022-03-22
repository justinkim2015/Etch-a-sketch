let gridSize = 16;
let percent = 100 / gridSize;
let randomColor = Math.floor(Math.random()*16777215).toString(16);

const resetButton = document.querySelector('.reset');
const container = document.querySelector('.container');

// resetButton.addEventListener('click', function(){
//   gridSize = prompt('What\'s the new size bub?');
//   console.log(gridSize);
// });

makeGrid(gridSize);

resetButton.addEventListener('click', function() {
  gridSize = prompt('?');
  console.log(gridSize);
  DeleteGrid();
  makeGrid(gridSize);
  sizeGrid();
});


function DeleteGrid() { //this function is working as intended
  let grid = document.querySelectorAll('.box');
  for (grid of grid) {
  container.removeChild(grid)
  }
}

//deletegrid is deleting the element so theres no container to append to
//this function is creating empty divs with the class box, it has the correct CSS applied but no padding or width so the grid doesnt show on screen.
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


sizeGrid();

function sizeGrid() {
  let percent = 100 / gridSize;
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  const blockSize = document.querySelectorAll('.box');
  blockSize.forEach(blockSize => blockSize.style.width = `${percent}%`);
  blockSize.forEach(blockSize => blockSize.style.paddingBottom = `${percent}%`);
  blockSize.forEach(blockSize => blockSize.addEventListener('mouseenter', function(){
    blockSize.style.backgroundColor = "#" + randomColor;
  }));
}

//This is the non-arrow function version of the above
//box.forEach(function(box){
//    box.addEventListener('mouseenter', function(){
//        box.style.backgroundColor = 'green';
//    })
//})





