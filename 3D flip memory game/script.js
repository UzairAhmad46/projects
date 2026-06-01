const emojis = ['🐱', '🐶', '🦊', '🐼', '🐨', '🐸', '🦁', '🐯'];

let cards = [...emojis, ...emojis];
let flippedCards = [];
let matchedPairs = 0;

let moves = 0;
let seconds = 0;

let lockBoard = false;
let timer = null;

// Load Best Score
const savedBest = localStorage.getItem('memoryBest');
document.getElementById('best').textContent = savedBest
  ? `${savedBest}s`
  : '--';

// Shuffle Function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

// Start Timer
function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    seconds++;
    document.getElementById('time').textContent = seconds;
  }, 1000);
}

// Stop Timer
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// Create Board
function createBoard() {
  const grid = document.getElementById('grid');

  grid.innerHTML = '';

  shuffle(cards);

  cards.forEach((emoji) => {
    const card = document.createElement('div');

    card.classList.add('card');
    card.dataset.emoji = emoji;

    card.innerHTML = `
      <div class="card-inner">
        <div class="front">?</div>
        <div class="back">${emoji}</div>
      </div>
    `;

    card.addEventListener('click', flipCard);

    grid.appendChild(card);
  });
}


function flipCard() {
  if (lockBoard) return;
  if (this.classList.contains('flipped')) return;
  if (this.classList.contains('matched')) return;

  startTimer();

  this.classList.add('flipped');
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    moves++;

    document.getElementById('moves').textContent = moves;

    checkMatch();
  }
}

function checkMatch() {
  lockBoard = true;

  const [card1, card2] = flippedCards;

  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add('matched');
    card2.classList.add('matched');

    matchedPairs++;

    resetTurn();

    if (matchedPairs === emojis.length) {
      stopTimer();

      setTimeout(showWin, 500);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');

      resetTurn();
    }, 1000);
  }
}


function resetTurn() {
  flippedCards = [];
  lockBoard = false;
}


function showWin() {
  document.getElementById('win').classList.add('show');

  document.getElementById('finalMoves').textContent = moves;
  document.getElementById('finalTime').textContent = seconds;

  let best = localStorage.getItem('memoryBest');

  if (best === null || seconds < Number(best)) {
    best = seconds;

    localStorage.setItem('memoryBest', best);
  }

  document.getElementById('best').textContent = `${best}s`;
}


function resetGame() {
  matchedPairs = 0;
  moves = 0;
  seconds = 0;

  flippedCards = [];
  lockBoard = false;

  stopTimer();

  document.getElementById('moves').textContent = '0';
  document.getElementById('time').textContent = '0';

  document.getElementById('win').classList.remove('show');

  cards = [...emojis, ...emojis];

  createBoard();
}


createBoard();
