const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
// const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(heal) {
  const healValue = Math.random() * heal;
  playerHealthBar.value = +playerHealthBar.value + healValue;
  return healValue;
}

function undoPlayerHealthAfterDeath(heal){
    playerHealthBar.value = 0 + heal;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  const bonusLifeEl = document.getElementById('bonus-life');
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function addBonusLife() {
  document.getElementById('player-health-bonus').innerHTML = 'PLAYER HEALTH<span id="bonus-life">1</span>'
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
