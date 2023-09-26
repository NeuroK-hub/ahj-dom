function gameStart() {
  const goblin = document.querySelector('.goblin-hole');
  const randomIndex = Math.floor(1 + Math.random() * 16 - 1 + 1);

  const nextGoblin = document.getElementById(`hole${randomIndex}`);
  if (goblin) {
    goblin.classList.remove('goblin-hole');
  }
  nextGoblin.classList.add('goblin-hole');
}
setInterval(gameStart, 1000);
