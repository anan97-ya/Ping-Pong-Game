console.log("JavaScript is connected!");

// Paddle properties
let paddleWidth = 100;
let paddleHeight = 20;
let paddleX;
let paddleY;
let paddleSpeed = 12;

// Ball properties 
let ballX;
let ballY;
let ballDiameter = 20;
let ballSpeedX = 4;
let ballSpeedY = 4;

function setup() {
  createCanvas(600, 400);
  
  // Paddle position
  paddleX = width / 2 - paddleWidth / 2;
  paddleY = height - paddleHeight - 10;
  
  // Ball position (ensuring it's inside the canvas)
  ballX = random(ballDiameter / 2, width - ballDiameter / 2);
  ballY = random(ballDiameter / 2, height / 2);
}

function draw() {
  background(0);
  
  // Draw paddle
  fill("red"); // Ensures the paddle is visible
  strokeWeight(2);
  stroke("white");
  rect(paddleX , paddleY , paddleWidth , paddleHeight);
  
  // Ball
  fill("red");
  stroke("white");
  ellipse(ballX, ballY, ballDiameter);
  
  // Ball movement
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  // Ball bounces off left and right walls
  if (ballX < ballDiameter / 2 || ballX > width - ballDiameter / 2) {
    ballSpeedX *= -1;
  }
  
  // Ball bounces off the top
  if (ballY < ballDiameter / 2) {
    ballSpeedY *= -1;
  }
  
  // Ball bounces off the paddle
  if (ballY + ballDiameter / 2 > paddleY && ballX > paddleX && ballX < paddleX + paddleWidth) {
    ballSpeedY *= -1;
  }
  
  // Check if the ball goes off the bottom (game over)
  if (ballY > height) {
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text("Game Over", width / 2, height / 2);
    noLoop(); // Stop the game
  }
  
  // Paddle movement
  if (keyIsDown(65)) { // Move Left
    paddleX -= paddleSpeed;
  }
  if (keyIsDown(68)) { // Move Right
    paddleX += paddleSpeed;
  }

  // Keep paddle within the canvas boundaries
  paddleX = constrain(paddleX, 0, width - paddleWidth);
}
