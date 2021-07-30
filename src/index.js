import "./styles/index.scss";
import Clock from './scripts/Clock';
import Puzzle from "./scripts/Puzzle";
import { findClick } from "./scripts/game";
import { cute } from "./assets/images/cute";
import { lizard } from "./assets/images/lizard";
import { panda } from "./assets/images/panda";
import { manatees } from "./assets/images/manatees";

function chooseImage(){
  console.log("entered chooseImage function")
  const imgArr = [cute, lizard, panda, manatees];
  let pic = imgArr[Math.floor(Math.random()*imgArr.length)];
  
  let img = new Image();
  img.setAttribute(`src`, `data:image/jpg;base64, ${pic}`);
  window.img = img;
}

document.addEventListener('DOMContentLoaded', () => {
  
  const clock = new Clock();
  const canvas = document.getElementById('puzzle');
  const ctx = canvas.getContext("2d");
  const reset = document.getElementById("reset");
  let boardSize = canvas.width;
  let cardSize = boardSize / 3;

  
  // ctx.drawImage(img, 0, 0, img.width, img.height,
                    //  0, 0, canvas.width, canvas.height);
  
  chooseImage();
  let puzzle = new Puzzle(canvas, img);
  puzzle.drawCards();
  window.puzzle = puzzle;
  window.clock = clock;
  
  canvas.addEventListener('click', function(e) {

    findClick(e);

  }, false)


  reset.addEventListener('click', function(e) {
    chooseImage();
    console.log('reset click event listener activated')
    window.puzzle.setBoard();
    window.clock.reset();
    
  }, false)

  

}) 
