import "./styles/index.scss";
import Puzzle from "./scripts/Puzzle";
import { cute } from "./assets/images/cute"
import { lizard } from "./assets/images/lizard";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('puzzle');
  // debugger
  const ctx = canvas.getContext("2d");
  let boardSize = canvas.width;
  let cardSize = boardSize / 3;
  
  let img = new Image();
  // debugger
  img.setAttribute(`src`, `data:image/jpg;base64, ${cute}`);
  ctx.drawImage(img, 0, 0, boardSize, boardSize);
  console.log("webpack running");
  
  let puzzle = new Puzzle(canvas, img);
  puzzle.drawCards();
  window.puzzle = puzzle;
  
  canvas.addEventListener('click', function(e) {
    let rect = canvas.getBoundingClientRect();

    let cardSize = document.getElementById('puzzle').width / 3;

    let clickLoc = {
      x: Math.floor(Math.abs((e.clientX - rect.left))/cardSize),
      y: Math.floor(Math.abs((e.clientY - rect.top))/cardSize)
    }

    window.puzzle.switchCards(clickLoc);

  }, false)

}) 
