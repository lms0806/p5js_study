function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = 0;
}

function draw(){
  background(0);

  stroke(50);
  fill(255);
  ellipse(x, y, 24, 24);

  x = x - random(pmouseX - mouseX);
  y++;

  if(y > height){
    y = 0;
  }
}

function mousePressed(){
  x = mouseX;
  y = 0;
}
