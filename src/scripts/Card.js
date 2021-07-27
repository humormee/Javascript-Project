export default class Card {
  constructor(canvasEl, index, height, width) {
    this.isEmtpy = false;
    this.canvasEl = canvasEl;
    this.index = index;
    this.height = height;
    this.width = width

    this.createCard();
    // this.canvasEl.appendChild(el)
  }

  createCard() {
    // this.canvasEl.appendChild()'
    debugger
    const cardDiv = document.createElement('div');
    cardDiv.style.backgroundSize = `${this.width}px ${this.height}px`;
    cardDiv.style.border = '1px solid white';
    cardDiv.style.position = 'absolute';

  }
}