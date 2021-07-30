import "./styles/index.scss";
import Clock from './scripts/Clock';
import Puzzle from "./scripts/Puzzle";
import { findClick } from "./scripts/game";
import { cute } from "./assets/images/cute";
import { lizard } from "./assets/images/lizard";

document.addEventListener('DOMContentLoaded', () => {
  
  const clock = new Clock();
  const canvas = document.getElementById('puzzle');
  const ctx = canvas.getContext("2d");
  const reset = document.getElementById("reset");
  let boardSize = canvas.width;
  let cardSize = boardSize / 3;
  
  let img = new Image();
  img.setAttribute(`src`, `data:image/jpg;base64, ${cute}`);
  // ctx.drawImage(img, 0, 0, img.width, img.height,
                    //  0, 0, canvas.width, canvas.height);
  console.log("content loaded listener");
  
  let puzzle = new Puzzle(canvas, img);
  puzzle.drawCards();
  window.puzzle = puzzle;
  window.clock = clock;
  
  canvas.addEventListener('click', function(e) {

    findClick(e);
    // let rect = canvas.getBoundingClientRect();

    
    // // let cardSize = document.getElementById('puzzle').width / 3;
    
    // let width = window.innerWidth;
    // let height = window.innerHeight;
    // window.puzzle.width = width;
    // window.puzzle.height = height;
    // let cardHeight = height / 3;
    // let cardWidth = width / 3;

    
    // let clickLoc = {
      
    //   x: Math.floor(Math.abs((e.offsetX))/cardWidth),
    //   y: Math.floor(Math.abs((e.offsetY))/cardHeight)
      
    // }
    // console.log(`clickLoc: ${clickLoc}`);
    // // console.log(`[e.clientX, e.clientY]: ${[e.clientX, e.clientY]}`);
    // console.log(`cardSize: ${cardSize}`);
    // console.log(`[rect.left, rect.top]: ${[e.offsetX, e.offsetY]}`);

    // debugger
    // window.puzzle.switchCards(clickLoc);

  }, false)

  reset.addEventListener('click', function(e) {

    window.puzzle.setBoard();
    window.clock.reset();

  }, false)

  

}) 
