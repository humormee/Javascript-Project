import "./styles/index.scss";
import Canvas from "./scripts/Canvas";
import { lizard } from "./assets/images/lizard";

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('puzzle');
  debugger
  const ctx = canvas.getContext("2d");
  let boardSize = canvas.width;
  let cardSize = boardSize / 3;
  
  let img = new Image();
  debugger
  img.setAttribute(`src`, `data:image/jpg;base64, ${lizard}`);
  ctx.drawImage(img, 0, 0, boardSize, boardSize);
  console.log("webpack running");
  Canvas.drawCards();
})