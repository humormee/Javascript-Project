import "./styles/index.scss";
import Puzzle from "./scripts/Puzzle";
import { lizard } from "./assets/images/lizard";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('puzzle');
  // debugger
  const ctx = canvas.getContext("2d");
  let boardSize = canvas.width;
  let cardSize = boardSize / 3;
  
  let img = new Image();
  // debugger
  img.setAttribute(`src`, `data:image/jpg;base64, ${lizard}`);
  ctx.drawImage(img, 0, 0, boardSize, boardSize);
  console.log("webpack running");
  debugger
  let puzzle = new Puzzle(canvas, img);
  puzzle.drawCards();
  window.puzzle = puzzle;
  debugger
  canvas.addEventListener('click', function(e) {
    // debugger
    let rect = canvas.getBoundingClientRect();

    let cardSize = document.getElementById('puzzle').width / 3;

    let clickLoc = {
      x: Math.floor((e.clientX - rect.left)/cardSize),
      y: Math.floor((e.clientY - rect.top)/cardSize)
    }

    window.puzzle.switchCards(clickLoc);
    // console.log(clickLoc);
    // console.log(window.puzzle.cardsArray);
  }, false)
  // canvas.onclick = function(e) {
  //   debugger
  //   let rect = canvas.getBoundingClientRect();

  //   let cardSize = document.getElementById('puzzle').width / 3;

  //   let clickLoc = {
  //     x: Math.floor((e.clientX - rect.left)/cardSize),
  //     y: Math.floor((e.clientY - rect.top)/cardSize)
  //   }

  //   console.log(clickLoc);
  //   console.log();
  // }
}) 

// debugger
// Puzzle.drawCards()