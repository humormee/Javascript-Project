const canvas = document.getElementById("puzzle");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cardsArray = [];

let mouse = {
  x: null,
  y: null
}

window.addEventListener('mousemove', 
  function(event){
    mouse.x = event.x;
    mouse.y = event.y;
  }
)

// function drawImage(){
//   let imageWidth = png.width;
//   let imageHeight = png.height;
//   const data = ctx.getImageData(0, 0, imageWidth, imageHeight);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   class Particle {
//     constructor(x, y, color, size)
//   }
// }