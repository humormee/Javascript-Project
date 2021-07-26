import Card from "./Card";
import { lizard } from "../assets/images/lizard";
// class Puzzle {
//   constructor(el, imageSrc, width, dimension = 3){

//   }
// }

let img = new Image();
debugger
// img.crossOrigin = "Anonymous"
img.src = lizard;
img.addEventListener('load', drawCards, false);

// const canvas = document.getElementById("puzzle");
const canvas = document.createElement('canvas');
debugger
const ctx = canvas.getContext("2d");
let boardSize = canvas.width;
let cardSize = boardSize / 3;
let cardsArray;
// let emptyCard = 8;
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
  cardsArray = new Array(3);
  //initialize cards Arr with x, y positions from 0,0 to 2,2
  for (let i = 0; i < 3; i++) {
    cardsArray[i] = new Array(2)
    for (let j = 0; j < 3; j++) {
      cardsArray[i][j] = {
        x: 2 - i,
        y: 2 - j
      };
    }
  }

  emptyCard.x = cardsArray[2][2].x;
  emptyCard.y = cardsArray[2][2].y;
  isSolved = false;
}

function drawCards(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      let x = cardsArray[i][j].x;
      let y = cardsArray[i][j].y;
      if(i !== emptyCard.x || j !== emptyCard.y || isSolved === false) {
        ctx.drawImage(img, x * cardSize, y * cardSize, cardSize, cardSize, i * cardSize, j * cardSize, cardSize, cardSize);
      }
    }
  }
  debugger
  let imageWidth = img.width;
  let imageHeight = img.height;
  const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
}


//let's set an event listener on the canvas
canvas.onmousemove = function(event) {
  mouse.x = Math.floor((event.pageX - event.offsetLeft) / cardSize);
  mouse.y = Math.floor((event.pageY - event.offsetTop) / cardSize);
}



function findEmpty() {

}

function findPosition(index) {

}

setBoard();

export default Canvas;