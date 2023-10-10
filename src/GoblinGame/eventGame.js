import GameOn from './move';

export default class EventgGame {
  constructor() {
    this.element = document.querySelector('.area');
    this.element.addEventListener('click', EventgGame.onGoblinClick);

    this.Goblin = new GameOn().move();
  }

  static onGoblinClick(e) {
    if (e.target.classList.contains('goblin-hole')) {
      document.getElementById('hit').textContent = Number(document.getElementById('hit').textContent) + 1;
      e.target.classList.remove('goblin-hole');
    } else {
      document.getElementById('miss').textContent = Number(document.getElementById('miss').textContent) + 1;
      if (document.getElementById('miss').textContent > 4) {
        alert('Вы проиграли. Начните сначала');
        document.getElementById('miss').textContent = 0;
        document.getElementById('hit').textContent = 0;
      }
    }
  }
}

const game = new EventgGame();
game.Goblin;