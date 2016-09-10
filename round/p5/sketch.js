p5.disableFriendlyErrors = true;

var angle=Math.PI/2;
var radius=0;
var adelta=0.15;
var rdelta=5;

var bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawGrid();
  ptt = polarToCart(250,Math.PI/2); ellipse(ptt.x,ptt.y,100);
  for(i = 0; i < bullets.length-1; i++) {
    bullet = bullets[i];
    fill(bullet.color)
    ptb = polarToCart(bullet.radius,bullet.angle);
    ellipse(ptb.x,ptb.y,50);
    bullet.radius += rdelta;
    if(collideCircleCircle(ptt.x,ptt.y,100,ptb.x,ptb.y,50)) {
      bullet.color = [255,0,0];
    }
    if(bullet.radius > height/2) {
      d = bullets.indexOf(bullet);
      bullets.splice(d,1);
    }
  }
  if(random(0,100) > 90) {
    bullet = Bullet(50,angle,255);
    bullets.push(bullet);
  }
  angle += adelta;
  if(angle >= PI*3/4 || angle <= PI/4) {
    adelta = -adelta;
  }
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

function polarToCart(radius,theta) {
  var x = width/2;
  var y = height/2;
  return {x:x+(radius*cos(theta)), y:y+(radius*sin(theta))};
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Bullet(radius, angle, color) {
  bullet = {}
  bullet.angle = angle;
  bullet.radius = radius;
  bullet.color = color;
  return bullet;
}

