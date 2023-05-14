// Set up variables
const target = document.getElementById('game-target');
const score = document.getElementById('score');
let gameStarted = false;
let gameScore = 0;

// Function to move the target randomly
function moveTarget() {
  console.log(target.style.left)
  const maxWidth = window.innerWidth - target.offsetWidth - 100;
  const maxHeight = window.innerHeight - target.offsetHeight - 100;
  const newLeft = Math.floor((Math.random() - 0.5) * maxWidth);
  const newTop = Math.floor((Math.random() - 0.5) * maxHeight);
  console.log(window.newLeft)
  target.style.left = `${newLeft}px`;
  target.style.top = `${newTop}px`;
}

// Function to start the game
function startGame() {
  gameStarted = true;
  gameScore = 0;
  score.innerHTML = gameScore;
  moveTarget();
  target.addEventListener('click', handleTargetClick);
}

// Function to handle clicks on the target
function handleTargetClick() {
  gameScore++;
  score.innerHTML = gameScore;
  moveTarget();
}

// Event listener for start button
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

function setTargetSize(size) {
  targetSize = size;
  target.style.width = `${targetSize}px`;
  target.style.height = `${targetSize}px`;
}

// Event listeners for difficulty buttons
const easyButton = document.getElementById('easy-button');
easyButton.addEventListener('click', () => setTargetSize(50));

const mediumButton = document.getElementById('medium-button');
mediumButton.addEventListener('click', () => setTargetSize(30));

const hardButton = document.getElementById('hard-button');
hardButton.addEventListener('click', () => setTargetSize(15));


// Resize event listener to update target position on window resize
window.addEventListener('resize', moveTarget);
