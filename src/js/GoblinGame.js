import image from '../assets/goblin.png';

export default class GoblinGame {
  constructor() {
    this.position = -1;
    this.field = 0;
    this.boarSize = 1;
  }

  goblinSetter() {
    const position = Math.floor(Math.random() * (this.boarSize ** 2 + 1));
    if (position === this.lastPosition) {
      const position2 = this.goblinSetter();
      return position2;
    }
    return position;
  }

  boardGeneration(countOfCells) {
    this.boarSize = countOfCells;
    this.field = document.createElement('div');
    this.field.classList.add('board');
    const width = 124 * countOfCells;
    this.field.style.width = `${width}px`;
    document.body.appendChild(this.field);
    for (let i = 0; i < countOfCells ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.field.appendChild(cell);
    }
  }

  imgCreate(interval) {
    const goblin = new Image();
    // const goblin = document.createElement('img');
    goblin.src = image;
    // const goblin = document.getElementById('x01');
    // goblin.classList.remove('hidden');
    setInterval(() => {
      const position = this.goblinSetter();
      this.field.childNodes[position].appendChild(goblin);
    }, interval);
  }
}
