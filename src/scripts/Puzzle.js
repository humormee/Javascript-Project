import Card from "./Card";
import { lizard } from "../assets/images/lizard";

export default class Puzzle {
 
  constructor(canvas, img){
    this.canvas = canvas;
    this.img = img;
    this.ctx = canvas.getContext("2d");
    this.imageSrc = lizard;
    this.emptyCard = new Card(img, canvas, [0, 0], [0, 0], true);
    // this.emptyCard = {
    //   x: 0,
    //   y: 0
    // };
    this.cardsArray = this.setBoard();

    
    this.isSolved = false;
    
  }

  
 
  setBoard() {
    
    let cardsArray = new Array(3);
    //initialize cards Arr with x, y positions from 0,0 to 2,2
    for (let i = 0; i < 3; i++) {
      cardsArray[i] = new Array(2)
      for (let j = 0; j < 3; j++) {
        
        cardsArray[i][j] = new Card(this.img, this.canvas, [2 - i, 2 - j], [i, j])
        
      }
    }
    cardsArray[2][2] = this.emptyCard;
    return cardsArray;
  }

  drawCards(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // let cardSize = this.canvas.width / 3;

    debugger
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
       


        if(i !== this.emptyCard.x || j !== this.emptyCard.y) {
          this.cardsArray[i][j].drawCard();
         
        }
      }
    }
    
    let imageWidth = this.img.width;
    let imageHeight = this.img.height;
    const data = this.ctx.getImageData(0, 0, imageWidth, imageHeight);
  }

  switchCards(clickLoc) {
    let isAdjacent = (Math.abs(clickLoc.x - this.emptyCard.x) <= 1 && Math.abs(clickLoc.y - this.emptyCard.y) <= 1)
    
    let isDiagonal = (Math.abs(clickLoc.x - this.emptyCard.x) == 1 && Math.abs(clickLoc.y - this.emptyCard.y) == 1)
    // debugger
    if(isAdjacent && !isDiagonal){
      debugger
      let temp = clickLoc;
      this.cardsArray[clickLoc.x][clickLoc.y] = this.emptyCard;
      this.emptyCard = temp;
      console.log("empty next to click yep")
      
    }
    // this.setBoard();
    this.drawCards();

  }

  isSolved(){
    return false;
  }

}


// export default Canvas;