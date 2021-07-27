import Card from "./Card";
import { lizard } from "../assets/images/lizard";

export default class Puzzle {
 
  constructor(canvas, img){
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.imageSrc = lizard;
    this.emptyCard = {
      x: 0,
      y: 0
    };
    this.setBoard();
    this.isSolved = false;
    this.img = img;
  }

  
 
  setBoard() {
    
    this.cardsArray = new Array(3);
    //initialize cards Arr with x, y positions from 0,0 to 2,2
    for (let i = 0; i < 3; i++) {
      this.cardsArray[i] = new Array(2)
      for (let j = 0; j < 3; j++) {
        this.cardsArray[i][j] = new Card(this.canvas, [2 - i, 2 - j], [i, j])
        // this.cardsArray[i][j] = {
        //   baseX: i,
        //   baseY: j,
        //   x: 2 - i,
        //   y: 2 - j
        // };
      }
    }

    // this.emptyCard.x = this.cardsArray[2][2].x;
    // this.emptyCard.y = this.cardsArray[2][2].y;
    this.isSolved = false;
  }

  drawCards(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let cardSize = this.canvas.width / 3;

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        // debugger
        // let card = new Card(this.canvas, [i, j], cardSize, cardSize)
        
        debugger
        let baseX = this.cardsArray[i][j].baseIndex[0];
        let baseY = this.cardsArray[i][j].baseIndex[1];
        let x = this.cardsArray[i][j].currentIndex[0];
        let y = this.cardsArray[i][j].currentIndex[1];

        if(i !== this.emptyCard.x || j !== this.emptyCard.y) {
          // debugger
          this.ctx.drawImage(this.img, baseX * cardSize, baseY * cardSize, cardSize, cardSize, i * cardSize, j * cardSize, cardSize, cardSize);
        }
      }
    }
    debugger
    let imageWidth = this.img.width;
    let imageHeight = this.img.height;
    const data = this.ctx.getImageData(0, 0, imageWidth, imageHeight);
  }

  switchCards(clickLoc) {
    let isAdjacent = (Math.abs(clickLoc.x - this.emptyCard.x) <= 1 && Math.abs(clickLoc.y - this.emptyCard.y) <= 1)
    debugger
    let isDiagonal = (Math.abs(clickLoc.x - this.emptyCard.x) == 1 && Math.abs(clickLoc.y - this.emptyCard.y) == 1)
    debugger
    if(isAdjacent && !isDiagonal){
      let temp = clickLoc;
      this.cardsArray[clickLoc.x][clickLoc.y] = this.emptyCard;
      this.emptyCard = temp;
      console.log("empty next to click yep")
      
    }
    this.setBoard();
    this.drawCards();

  }

  isSolved(){
    return false;
  }

}


// export default Canvas;