const canvas = document.getElementById("puzzle");
const ctx = canvas.getContext("2d");
let boardSize = canvas.width;
let cardSize = boardSize / 3;
let cardsArray = [];
let emptyCard = 8;
let isSolved = false;

let emptyCard = {
  x: null,
  y: null
}

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

//let's set an event listener on the canvas
canvas.onmousemove = function(event) {
  mouse.x = Math.floor((event.pageX - event.offsetLeft) / cardSize);
  mouse.y = Math.floor((event.pageY - event.offsetTop) / cardSize);
}



let img = new Image();
img.src = 'http://www.brucealderman.info/Images/dimetrodon.jpg';
img.addEventListener('load', drawCards, false);

function drawCards(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < 9; i++) {
    
  }
  let imageWidth = image.width;
  let imageHeight = image.height;
  const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
}