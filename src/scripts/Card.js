import { lizard } from "../assets/images/lizard";

export default class Card {
  constructor(canvasEl, currentIndex, baseIndex) {
    this.isEmtpy = false;
    this.canvasEl = canvasEl;
    this.ctx = canvasEl.getContext("2d")
    this.currentIndex = currentIndex;
    this.baseIndex = baseIndex;
    this.size = canvasEl.width / 3;

    let el = this.createCard();
    // debugger
    this.canvasEl.appendChild(el)
  }

  createCard() {
    // this.canvasEl.appendChild()'
    // debugger
    const cardDiv = document.createElement('div');
    cardDiv.style.backgroundSize = `${this.width}px ${this.height}px`;
    cardDiv.style.border = '1px solid white';
    cardDiv.style.position = 'absolute';
    return cardDiv;
  }

  drawCard() {
    this.ctx.drawImage();
  }
}