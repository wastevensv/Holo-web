p5.disableFriendlyErrors = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  drawGrid();
}

function drawGrid() {
  background(150, 150, 200);
  noFill();
  stroke(60, 60, 150);
  strokeWeight(5);
  for(y = 0; y < windowHeight/25; y++) {
    line(0,y*25,windowWidth,y*25);
  }
  for(x = 0; x < windowWidth/25; x++) {
    line(x*25,0,x*25,windowHeight);
  }
  fill(255);
  strokeWeight(5);
  ellipse(width/2,height/2,100);
  fill(255);
  stroke(0);
  strokeWeight(5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
