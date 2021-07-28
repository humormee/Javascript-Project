import Card from "./Card";
import { lizard } from "../assets/images/lizard";
import { cute } from "../assets/images/cute";

export default class Puzzle {
 
  constructor(canvas, img){
    this.isShuffling = false;
    this.canvas = canvas;
    this.img = img;
    this.ctx = canvas.getContext("2d");
    this.imageSrc = cute;
    this.emptyCard = new Card(img, canvas, [0, 0], [0, 0], true);
    this.cardsArray = [];
    this.setBoard();

    
    // this.isSolved = false;
    
  }

  shuffle() {
    debugger
    this.isShuffling = true;
    let clickArr = [
      {x: 0, y: 0},
      {x: 0, y: 1},
      {x: 0, y: 2},
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 2},
      {x: 2, y: 0},
      {x: 2, y: 1},
      {x: 2, y: 2},
    ];

    let randomClick; 
    
    for(let i = 0; i < 100; i++) {
      randomClick = clickArr[Math.floor(Math.random() * clickArr.length)];
      this.switchCards(randomClick);
    }
    this.isShuffling = false;

  }
 
  setBoard() {

    let cardsArray = new Array(3);
    //initialize cards Arr with x, y positions from 0,0 to 2,2
    for (let i = 0; i < 3; i++) {
      cardsArray[i] = new Array(3)
      for (let j = 0; j < 3; j++) {
        
        // cardsArray[i][j] = new Card(this.img, this.canvas, [2 - i, 2 - j], [i, j])
        cardsArray[i][j] = new Card(this.img, this.canvas, [i, j], [i, j])
        
      }
    }
    
    this.cardsArray = cardsArray;
    // cardsArray[2][2] = this.emptyCard;
    this.shuffle();
  }

  drawCards(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
       
        if(!this.cardsArray[i][j].isEmpty) {
          this.cardsArray[i][j].drawCard();
        }
      }
    }
    
    this.isSolved();
    // let imageWidth = this.img.width;
    // let imageHeight = this.img.height;
    // const data = this.ctx.getImageData(0, 0, imageWidth, imageHeight);
  }

  switchCards(clickLoc) {
    let clickedCard = this.cardsArray[clickLoc.x][clickLoc.y];
    let emptyPosX = this.emptyCard.currentIndex[0];
    let emptyPosY = this.emptyCard.currentIndex[1];
    debugger

    if (clickLoc.x === emptyPosX && clickLoc.y === emptyPosY){
      return;
    }
    let isAdjacent = (Math.abs(clickLoc.x - emptyPosX) <= 1 && Math.abs(clickLoc.y - emptyPosY) <= 1)
    
    let isDiagonal = (Math.abs(clickLoc.x - emptyPosX) == 1 && Math.abs(clickLoc.y - emptyPosY) == 1)
    
    if(isAdjacent && !isDiagonal && !clickedCard.isEmpty){
      

      this.cardsArray[emptyPosX][emptyPosY] = clickedCard;
      this.cardsArray[clickLoc.x][clickLoc.y].currentIndex = this.emptyCard.currentIndex;
      
      this.emptyCard.currentIndex = [clickLoc.x, clickLoc.y];
      console.log("empty next to click yep")
      
    }
    this.drawCards();

  }

  isSolved(){
    debugger
    if(this.isShuffling){
      return false;
    }
    this.cardsArray.forEach(card => {
      if(card.currentIndex !== card.baseIndex){
        debugger
        return false;
      }
    })
  
    
    console.log("congrats you solved it!!")
    return true;
  }

}


// export default Canvas;