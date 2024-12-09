// Canvas Animation Script
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;
const radius = 20;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#007BFF";
  ctx.fill();
  ctx.closePath();
}

function update() {
  drawBall();

  // Bounce off walls
  if (x + dx > canvas.width - radius || x + dx < radius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - radius || y + dy < radius) {
    dy = -dy;
  }

  x += dx;
  y += dy;

  requestAnimationFrame(update);
}

update();