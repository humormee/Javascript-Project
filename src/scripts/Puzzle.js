import Card from "./Card";
import { lizard } from "../assets/images/lizard";
import { cute } from "../assets/images/cute";

export default class Puzzle {
 
  constructor(canvas, img){
    this.isShuffling = false;
    this.canvas = canvas;
    this.img = img;
    this.ctx = canvas.getContext("2d");
    this.imageSrc = window.img;
    this.emptyCard = new Card(this.img, canvas, [0, 0], [0, 0], true);
    this.cardsArray = [];
    this.isShuffling = false;
    this.drawGrid();
    this.setBoard();
    
    
    // this.isSolved = false;
    
  }

  shuffle() {
    // this.isShuffling = true;
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
    
    for(let i = 0; i < 50; i++) {
      randomClick = clickArr[Math.floor(Math.random() * clickArr.length)];
      this.switchCards(randomClick);
    }
    this.isShuffling = false;

  }
 
  drawGrid() {
    
    
    let space = this.img.width / 3;
    let end = this.img.height;

    for(let i = 1; i < 3; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(space*i, 0);
      this.ctx.lineTo(space*i, end);
      this.ctx.stroke();
    }
  }
  setBoard() {

    let cardsArray = new Array(3);
    
    for (let i = 0; i < 3; i++) {
      cardsArray[i] = new Array(3)
      for (let j = 0; j < 3; j++) {
        cardsArray[i][j] = new Card(this.img, this.canvas, [i, j], [i, j])
      }
    }
    
    this.cardsArray = cardsArray;
    this.shuffle();
  }

  drawCards(){
    if(this.isShuffling) {
      return
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
       
        if(!this.cardsArray[i][j].isEmpty) {
          this.cardsArray[i][j].drawCard();
        }
      }
    }
    
    if(this.isSolved()){

      this.ctx.drawImage(window.img, 0, 0, window.img.width, window.img.height,
                     0, 0, this.canvas.width, this.canvas.height);

    };
    
  }

  
  switchCards(clickLoc) {
    let clickedCard = this.cardsArray[clickLoc.x][clickLoc.y];
    let emptyPosX = this.emptyCard.currentIndex[0];
    let emptyPosY = this.emptyCard.currentIndex[1];
    

    if (clickLoc.x === emptyPosX && clickLoc.y === emptyPosY || this.isSolved()){
      return;
    }
    let isAdjacent = (Math.abs(clickLoc.x - emptyPosX) <= 1 && Math.abs(clickLoc.y - emptyPosY) <= 1)
    
    let isDiagonal = (Math.abs(clickLoc.x - emptyPosX) == 1 && Math.abs(clickLoc.y - emptyPosY) == 1)
    
    if(isAdjacent && !isDiagonal && !clickedCard.isEmpty){
      

      this.cardsArray[emptyPosX][emptyPosY] = clickedCard;
      this.cardsArray[clickLoc.x][clickLoc.y].currentIndex = this.emptyCard.currentIndex;
      
      this.emptyCard.currentIndex = [clickLoc.x, clickLoc.y];
      
    }

    this.drawCards();

  }

  isSolved(){
    
    if(this.isShuffling){
      return false;
    }
    let isSolved = true;
    this.cardsArray.forEach(row => {
      row.forEach(card => {
        if(card.currentIndex[0] !== card.baseIndex[0] || card.currentIndex[1] !== card.baseIndex[1]){
          isSolved = false;
        }
      })
      
    })
  
    if (isSolved){
      window.clock.stop();
    }
    
    return isSolved;
  }

}


// export default Canvas;