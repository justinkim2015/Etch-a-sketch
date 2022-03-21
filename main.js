let gridSize = 24;
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
  box.forEach(box => box.style.backgroundColor = 'lightgrey');
});

function makeGrid(size) {
for (let i=0; i < (size * size); i++) {
    if (gridSize <= 100) {
      const box = document.createElement('div');
      box.classList.add('box');
      container.appendChild(box);
    } else {
      alert("100 IS THE MAX");
      break;
    }
  }
}

const box = document.querySelectorAll('.box');

box.forEach(box => box.style.width = `${percent}%`);
box.forEach(box => box.style.paddingBottom = `${percent}%`);

box.forEach(box => box.addEventListener('mouseenter', function(){
    box.style.backgroundColor = "#" + randomColor;
}));

//This is the non-arrow function version of the above
//box.forEach(function(box){
//    box.addEventListener('mouseenter', function(){
//        box.style.backgroundColor = 'green';
//    })
//})





