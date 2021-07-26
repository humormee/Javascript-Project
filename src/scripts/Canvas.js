const canvas = document.getElementById("puzzle");
const ctx = canvas.getContext("2d");
let boardSize = canvas.width;
let cardSize = boardSize / 3;
let cardsArray = [];
let emptyCard = 8;
let isSolved = false;

let mouse = {
  x: null,
  y: null
}

function setBoard() {
  //initialize cards Arr with positions from 0 to 8
  for (var i = 0; i < 8; i++) {
    cardsArray.push(i);
  }
  
}


canvas.onmousemove = function(event) {
  mouse.x = Math.floor((event.pageX - event.offsetLeft) / cardSize);
  mouse.y = Math.floor((event.pageY - event.offsetTop) / cardSize);
}

// canvas.onclick = function(event) {
//   if ()
// }



let img = new Image();
img.src = 'http://www.brucealderman.info/Images/dimetrodon.jpg';
img.addEventListener('load', drawCards, false);

// function drawImage(){
//   let imageWidth = png.width;
//   let imageHeight = png.height;
//   const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   class Particle {
//     constructor(x, y, color, size)
//   }
// }