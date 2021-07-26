class Card {
  constructor(puzzle, index) {
    this.isEmtpy = false;
    this.index = index;
    this.puzzle = puzzle;
    this.width = this.puzzle.width / 3;
    this.height = this.puzzle.height / 3;

    this.el = this.createCard();
    puzzle.el.appendChild(this.el)
  }

  createCard() {
    const cardDiv = document.createElement('div');
    cardDiv.style.backgroundSize = `${this.puzzle.width}px ${this.puzzle.height}px`;
    cardDiv.style.border = '1px solid white';
    cardDiv.style.position = 'absolute';
  }
  //lets add an event listener on the cards
}