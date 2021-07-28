import "./styles/index.scss";
import Clock from './scripts/Clock';
// import Stopwatch from "./scripts/Stopwatch";
import Puzzle from "./scripts/Puzzle";
import { cute } from "./assets/images/cute"
import { lizard } from "./assets/images/lizard";

document.addEventListener('DOMContentLoaded', () => {
  // let timer = new Stopwatch();
  // timer.start();
  const clock = new Clock();
  const canvas = document.getElementById('puzzle');
  const ctx = canvas.getContext("2d");
  const reset = document.getElementById("reset");
  let boardSize = canvas.width;
  let cardSize = boardSize / 3;
  
  let img = new Image();
  img.setAttribute(`src`, `data:image/jpg;base64, ${cute}`);
  ctx.drawImage(img, 0, 0, img.width, img.height,
                     0, 0, canvas.width, canvas.height);
  console.log("webpack running");
  
  let puzzle = new Puzzle(canvas, img);
  puzzle.drawCards();
  window.puzzle = puzzle;
  window.clock = clock;
  
  canvas.addEventListener('click', function(e) {
    let rect = canvas.getBoundingClientRect();

    let cardSize = document.getElementById('puzzle').width / 3;

    let clickLoc = {
      x: Math.floor(Math.abs((e.clientX - rect.left))/cardSize),
      y: Math.floor(Math.abs((e.clientY - rect.top))/cardSize)
    }

    window.puzzle.switchCards(clickLoc);

  }, false)

  reset.addEventListener('click', function(e) {
    puzzle = new Puzzle(canvas, img);
    puzzle.drawCards();
    window.clock.reset();

  }, false)

  

}) 
