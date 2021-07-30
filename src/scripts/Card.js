// import { lizard } from "../assets/images/lizard";

export default class Card {
  constructor(img, canvasEl, currentIndex, baseIndex, isEmpty = false) {
    
    this.img = img;
    this.isEmtpy = isEmpty;
    this.canvasEl = canvasEl;
    this.ctx = canvasEl.getContext("2d");
    this.currentIndex = currentIndex;
    this.baseIndex = baseIndex;
    this.height = this.img.height / 3;
    this.width = this.img.width / 3;
    this.size = this.canvasEl.width / 3;

    let el = this.createCard();
    this.canvasEl.appendChild(el);

  }

  createCard() {
    
    const cardDiv = document.createElement('div');
    cardDiv.style.class = "card";
    // cardDiv.style.backgroundSize = `${this.size}px ${this.size}px`;
    // cardDiv.style.border = '1px solid white';
    // cardDiv.style.position = 'absolute';
    return cardDiv;
  }

  drawCard() {
   
    let size = this.size
    let baseX = this.baseIndex[0];
    let baseY = this.baseIndex[1];
    let i = this.currentIndex[0];
    let j = this.currentIndex[1];
    debugger
    this.ctx.drawImage(this.img, baseX * this.width, baseY * this.height, this.width, this.height, i * size, j * size, size-1, size-1);
  }
}