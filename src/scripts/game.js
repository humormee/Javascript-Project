import { lizard } from '../assets/images/lizard'
import Canvas from './Canvas';
import { cute } from '../assets/images/cute'

let img = new Image();
debugger
// img.crossOrigin = "Anonymous"
img.setAttribute(`src`, `data:image/jpg;base65, ${lizard}`);
// img.src = lizard;
img.addEventListener('load', Canvas.drawCards, false);

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





// //let's set an event listener on the canvas
// canvas.onmousemove = function(event) {
//   mouse.x = Math.floor((event.pageX - event.offsetLeft) / cardSize);
//   mouse.y = Math.floor((event.pageY - event.offsetTop) / cardSize);
// }




debugger
setBoard();