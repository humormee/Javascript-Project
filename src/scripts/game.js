import { lizard } from '../assets/images/lizard'
// import Canvas from './Canvas';
import { cute } from '../assets/images/cute'

// let img = new Image();

// img.crossOrigin = "Anonymous"
// img.setAttribute(`src`, `data:image/jpg;base65, ${cute}`);
// img.src = lizard;
// img.addEventListener('load', Canvas.drawCards, false);

// const canvas = document.getElementById("puzzle");
// const canvas = document.createElement('canvas');

// const ctx = canvas.getContext("2d");
// let boardSize = canvas.width;
// let cardSize = boardSize / 3;
// let cardsArray;
// // let emptyCard = 8;
// let isSolved = false;

// let emptyCard = {
//   x: null,
//   y: null
// }

// let mouse = {
//   x: null,
//   y: null
// }




export const findClick = function(e) {
  debugger
  // let canvas = document.getElementById('puzzle');
  // let rect = canvas.getBoundingClientRect();

  
    // let cardSize = document.getElementById('puzzle').width / 3;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    window.puzzle.width = width;
    window.puzzle.height = height;
    let cardHeight = height / 3;
    let cardWidth = width / 3;

    
    let clickLoc = {
      
      x: Math.floor(Math.abs((e.offsetX))/cardWidth),
      y: Math.floor(Math.abs((e.offsetY))/cardHeight)
      
    }
    console.log(`clickLoc: ${clickLoc}`);
    // console.log(`[e.clientX, e.clientY]: ${[e.clientX, e.clientY]}`);
    // console.log(`cardSize: ${cardSize}`);
    console.log(`[rect.left, rect.top]: ${[e.offsetX, e.offsetY]}`);

    debugger
    window.puzzle.switchCards(clickLoc);
}
// //let's set an event listener on the canvas
// canvas.onmousemove = function(event) {
//   mouse.x = Math.floor((event.pageX - event.offsetLeft) / cardSize);
//   mouse.y = Math.floor((event.pageY - event.offsetTop) / cardSize);
// }





// setBoard();