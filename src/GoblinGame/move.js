export default class GameOn {
  move() {
    setInterval(() => {
      this.goblin = document.querySelector('.goblin-hole');
      const randomIndex = Math.floor(1 + Math.random() * 16 - 1 + 1);
      const nextGoblin = document.getElementById(`hole${randomIndex}`);
      if (this.goblin) {
        this.goblin.classList.remove('goblin-hole');
      }
      nextGoblin.classList.add('goblin-hole');
    }, 1000);
  }
}
